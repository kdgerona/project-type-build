import { EPropertyTypes, IEntityProperties, IEntityArrayProperty, TEntityProperties, TBasicTypes, IPropertiesTypeContructedInsulation, IEntityCustomProperty } from '../types';
export declare const constructBasicTypes: (config: IEntityProperties<TBasicTypes>) => string;
export declare const constructArrayTypes: (config: IEntityArrayProperty<EPropertyTypes.ARRAY>) => string;
export declare const constructInterface: (properties?: TEntityProperties[]) => IPropertiesTypeContructedInsulation;
export declare const constructObjectTypes: (config: IEntityCustomProperty<EPropertyTypes.OBJECT>) => IPropertiesTypeContructedInsulation;
export declare const constructCollectionTypes: (config: IEntityCustomProperty<EPropertyTypes.COLLECTION>) => IPropertiesTypeContructedInsulation;
//# sourceMappingURL=handlers.d.ts.map