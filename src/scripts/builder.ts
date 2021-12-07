import { writeFile } from 'fs/promises';
import { IEntitySchemaConfig } from '../types';
import { constructInterface } from './handlers';
import { toPascalCase } from './utils';

const builder = async (write_path: string, config: IEntitySchemaConfig) => {
  const { entity, schema_version = 'v4', properties } = config ?? {};
  const pascalized_entity_name = toPascalCase(entity);
  const interface_name = `I${pascalized_entity_name}`;
  const { root_properties, built_schemas } = constructInterface(properties);
  const project_entity = `${pascalized_entity_name}${schema_version.toUpperCase()}Entity`;

  const template = `
    import { ${project_entity} } from '@dnamicro/gorentals-schema-core/build/src/${entity}_${schema_version}'

    export default interface ${interface_name}${schema_version.toUpperCase()} extends ${project_entity} {
      attribute?: ${interface_name}${schema_version.toUpperCase()}Attr
    }

    export interface ${interface_name}${schema_version.toUpperCase()}Attr {
      ${root_properties.join('\n')}
    }

    ${built_schemas.join('\n')}
  `;

  await writeFile(
    `${write_path}/${pascalized_entity_name}${schema_version.toUpperCase()}.ts`,
    template
  );

  return `${pascalized_entity_name}${schema_version.toUpperCase()}`;
};

export default builder;
