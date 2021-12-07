export type TDataTypes =
  | EPropertyTypes.STRING
  | EPropertyTypes.NUMBER
  | EPropertyTypes.BOOLEAN
  | EPropertyTypes.ANY;

export interface IEntityArrayProperty<TType = EPropertyTypes>
  extends IEntityProperties<TType> {
  link?: string;
  data_type?: TDataTypes;
}

export interface IEntityCustomProperty<TType = EPropertyTypes>
  extends IEntityProperties<TType> {
  link?: string;
  additional_properties?: TEntityProperties[];
}

export interface IEntityProperties<TType = EPropertyTypes> {
  id: string;
  name: string;
  type: TType;
  nullable: boolean;
}

export type TEntityProperties =
  | IEntityProperties<
      Exclude<
        EPropertyTypes,
        | EPropertyTypes.ARRAY
        | EPropertyTypes.COLLECTION
        | EPropertyTypes.OBJECT
        | EPropertyTypes.DICTIONARY
      >
    >
  | IEntityArrayProperty<Extract<EPropertyTypes, EPropertyTypes.ARRAY>>
  | IEntityCustomProperty<
      Extract<
        EPropertyTypes,
        | EPropertyTypes.COLLECTION
        | EPropertyTypes.OBJECT
        | EPropertyTypes.DICTIONARY
      >
    >;

export enum EPropertyTypes {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT = 'object',
  COLLECTION = 'collection',
  DICTIONARY = 'dictionary',
  ANY = 'any', // ? TBD
}

export interface IEntitySchemaConfig {
  entity: string;
  schema_version: string; // v4
  properties: TEntityProperties[];
}

export type TBasicTypes =
  | EPropertyTypes.STRING
  | EPropertyTypes.NUMBER
  | EPropertyTypes.BOOLEAN
  | EPropertyTypes.ANY;

export interface IPropertiesTypeContructedInsulation {
  root_properties: string[];
  built_schemas: string[];
}
