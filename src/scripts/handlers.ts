import {
  EPropertyTypes,
  IEntityProperties,
  IEntityArrayProperty,
  TEntityProperties,
  TBasicTypes,
  IPropertiesTypeContructedInsulation,
  IEntityCustomProperty,
} from '../types';
import { isNullableType, toPascalCase } from './utils';

export const constructBasicTypes = (
  config: IEntityProperties<TBasicTypes>
): string => {
  const { name, type, nullable } = config ?? {};
  return `${name}${isNullableType(nullable)}: ${type}`;
};

export const constructArrayTypes = (
  config: IEntityArrayProperty<EPropertyTypes.ARRAY>
): string => {
  const { name, data_type, nullable } = config ?? {};
  return `${name}${isNullableType(nullable)}: ${data_type}[]`;
};

export const constructInterface = (
  properties: TEntityProperties[]
): IPropertiesTypeContructedInsulation => {
  const insulated_interface = properties.reduce(
    (acc, curr) => {
      const { type } = curr ?? {};

      switch (type) {
        case EPropertyTypes.STRING:
        case EPropertyTypes.NUMBER:
        case EPropertyTypes.BOOLEAN:
        case EPropertyTypes.ANY:
          const contructed_basic_type = constructBasicTypes(
            curr as IEntityProperties<TBasicTypes>
          );
          return {
            ...acc,
            root_properties: [...acc.root_properties, contructed_basic_type],
          };
        case EPropertyTypes.ARRAY:
          const contructed_array_type = constructArrayTypes(
            curr as IEntityArrayProperty<EPropertyTypes.ARRAY>
          );
          return {
            ...acc,
            root_properties: [...acc.root_properties, contructed_array_type],
          };
        case EPropertyTypes.OBJECT:
          const {
            root_properties: object_root_properties,
            built_schemas: object_built_schemas,
          } = constructObjectTypes(
            curr as IEntityCustomProperty<EPropertyTypes.OBJECT>
          );

          return {
            ...acc,
            root_properties: [
              ...acc.root_properties,
              ...object_root_properties,
            ],
            built_schemas: [...acc.built_schemas, ...object_built_schemas],
          };
        case EPropertyTypes.COLLECTION:
          const {
            root_properties: collection_root_properties,
            built_schemas: collection_built_schemas,
          } = constructCollectionTypes(
            curr as IEntityCustomProperty<EPropertyTypes.COLLECTION>
          );

          return {
            ...acc,
            root_properties: [
              ...acc.root_properties,
              ...collection_root_properties,
            ],
            built_schemas: [...acc.built_schemas, ...collection_built_schemas],
          };
        default:
          return acc;
      }
    },
    {
      root_properties: [],
      built_schemas: [],
    } as IPropertiesTypeContructedInsulation
  );

  return insulated_interface;
};

export const constructObjectTypes = (
  config: IEntityCustomProperty<EPropertyTypes.OBJECT>
): IPropertiesTypeContructedInsulation => {
  const { name, nullable, additional_properties } = config ?? {};
  const interface_name = `I${toPascalCase(name)}`;

  const { root_properties = [], built_schemas = [] } = constructInterface(
    additional_properties
  );

  const built_schema = `export interface ${interface_name} {
      ${root_properties.join('\n')}
  }`;

  return {
    root_properties: [`${name}${isNullableType(nullable)}: ${interface_name}`],
    built_schemas: [built_schema, ...built_schemas],
  };
};

export const constructCollectionTypes = (
  config: IEntityCustomProperty<EPropertyTypes.COLLECTION>
): IPropertiesTypeContructedInsulation => {
  const { name, nullable, additional_properties } = config ?? {};
  const interface_name = `I${toPascalCase(name)}`;

  const { root_properties = [], built_schemas = [] } = constructInterface(
    additional_properties
  );

  const built_schema = `export interface ${interface_name} {
        ${root_properties.join('\n')}
    }`;

  return {
    root_properties: [`${name}${isNullableType(nullable)}: ${interface_name}[]`],
    built_schemas: [built_schema, ...built_schemas],
  };
};
