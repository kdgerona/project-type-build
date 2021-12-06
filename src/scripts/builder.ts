import { writeFile } from 'fs/promises';
import { IEntitySchemaConfig } from '../types';
import { constructInterface } from './handlers';
import { toPascalCase } from './utils';

const builder = async (write_path: string, config: IEntitySchemaConfig) => {
  const { entity, properties } = config ?? {};
  const pascalized_entity_name = toPascalCase(entity);
  const interface_name = `I${pascalized_entity_name}`;
  const { root_properties, built_schemas } = constructInterface(properties);

  const template = `
    export interface ${interface_name} {
      ${root_properties.join('\n')}
    }

    ${built_schemas.join('\n')}
  `;

  await writeFile(`${write_path}/${pascalized_entity_name}.ts`, template);

  return pascalized_entity_name;
};

export default builder;
