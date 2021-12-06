type TDataTypes =
  | EPropertyTypes.STRING
  | EPropertyTypes.NUMBER
  | EPropertyTypes.BOOLEAN
  | EPropertyTypes.ANY;

interface IEntityArrayProperty<TType = EPropertyTypes>
  extends IEntityProperties<TType> {
  data_type: TDataTypes;
}

interface IEntityCustomProperty<TType = EPropertyTypes>
  extends IEntityProperties<TType> {
  additional_properties: TEntityProperties[];
}

interface IEntityProperties<TType = EPropertyTypes> {
  name: string;
  type: TType;
  nullable: boolean;
}

type TEntityProperties =
  | IEntityProperties<
      Exclude<
        EPropertyTypes,
        EPropertyTypes.ARRAY | EPropertyTypes.COLLECTION | EPropertyTypes.OBJECT
      >
    >
  | IEntityArrayProperty<Extract<EPropertyTypes, EPropertyTypes.ARRAY>>
  | IEntityCustomProperty<
      Extract<EPropertyTypes, EPropertyTypes.COLLECTION | EPropertyTypes.OBJECT>
    >;

export enum EPropertyTypes {
  STRING = 'string',
  NUMBER = 'number',
  BOOLEAN = 'boolean',
  ARRAY = 'array',
  OBJECT = 'object',
  COLLECTION = 'collection',
  ANY = 'any', // ? TBD
}

export interface IEntitySchemaConfig {
  entity: string;
  properties: TEntityProperties[];
}