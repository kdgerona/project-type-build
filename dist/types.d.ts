export declare type TDataTypes = EPropertyTypes.STRING | EPropertyTypes.NUMBER | EPropertyTypes.BOOLEAN | EPropertyTypes.ANY;
export interface IEntityArrayProperty<TType = EPropertyTypes> extends IEntityProperties<TType> {
    link?: string;
    data_type?: TDataTypes;
}
export interface IEntityCustomProperty<TType = EPropertyTypes> extends IEntityProperties<TType> {
    link?: string;
    additional_properties?: TEntityProperties[];
}
export interface IEntityProperties<TType = EPropertyTypes> {
    id: string;
    name: string;
    type: TType;
    nullable: boolean;
}
export declare type TEntityProperties = IEntityProperties<Exclude<EPropertyTypes, EPropertyTypes.ARRAY | EPropertyTypes.COLLECTION | EPropertyTypes.OBJECT>> | IEntityArrayProperty<Extract<EPropertyTypes, EPropertyTypes.ARRAY>> | IEntityCustomProperty<Extract<EPropertyTypes, EPropertyTypes.COLLECTION | EPropertyTypes.OBJECT>>;
export declare enum EPropertyTypes {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ARRAY = "array",
    OBJECT = "object",
    COLLECTION = "collection",
    ANY = "any"
}
export interface IEntitySchemaConfig {
    entity: string;
    schema_version: string;
    properties: TEntityProperties[];
}
export declare type TBasicTypes = EPropertyTypes.STRING | EPropertyTypes.NUMBER | EPropertyTypes.BOOLEAN | EPropertyTypes.ANY;
export interface IPropertiesTypeContructedInsulation {
    root_properties: string[];
    built_schemas: string[];
}
//# sourceMappingURL=types.d.ts.map