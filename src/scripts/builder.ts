import { writeFile } from 'fs/promises';
import { IEntitySchemaConfig } from '../types';
import { constructInterface } from './handlers';
import { toPascalCase } from './utils';

const builder = async (write_path: string, config: IEntitySchemaConfig) => {
  const { entity, properties } = config ?? {};
  const interface_name = `I${toPascalCase(entity)}`;
  const { root_properties, built_schemas } = constructInterface(properties);

  const template = `
    export interface ${interface_name} {
      ${root_properties.join('\n')}
    }

    ${built_schemas.join('\n')}
  `;

  await writeFile(`${write_path}/${toPascalCase(entity)}.ts`, template);
};

export default builder;
