import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Model: IEntitySchemaConfig = {
  entity: 'model',
  schema_version: 'v4',
  properties: [
    // existing attribute so far- master jane
    {
      id: 'minimum_selection',
      name: 'minimum_selection',
      type: EPropertyTypes.NUMBER,
      nullable: false,
    },
    {
      id: 'maximum_selection',
      name: 'maximum_selection',
      type: EPropertyTypes.NUMBER,
      nullable: false,
    },
    {
      id: 'value_type',
      name: 'value_type',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'values',
      name: 'values',
      type: EPropertyTypes.COLLECTION,
      nullable: true,
      additional_properties: [
        {
          id: 'label',
          name: 'label',
          type: EPropertyTypes.STRING,
          nullable: false,
        }
      ]
    },
    {
      id: 'id',
      name: 'id',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'label',
      name: 'label',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
  ],
};

export default Model;
