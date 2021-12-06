import {
  EPropertyTypes,
  IEntityProperties,
  IEntityArrayProperty,
  TEntityProperties,
} from '../types';
import { isNullableType } from './utils';

export const constructBasicTypes = (
  config: IEntityProperties<
    | EPropertyTypes.STRING
    | EPropertyTypes.NUMBER
    | EPropertyTypes.BOOLEAN
    | EPropertyTypes.ANY
  >
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

// export const constructInterface = (properties: TEntityProperties[]): string => {
//   return '';
// };
