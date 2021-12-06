import { EPropertyTypes } from '../types';
import { constructBasicTypes, constructArrayTypes } from './handlers';

const builder = () => {
  console.log(
    'BASIC CONTRUCT',
    constructBasicTypes({
      name: 'first_name',
      type: EPropertyTypes.STRING,
      nullable: true,
    })
  );

  console.log(
    'ARRAY CONTRUCT',
    constructArrayTypes({
      name: 'emails',
      nullable: false,
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
    })
  );
};

export default builder;
