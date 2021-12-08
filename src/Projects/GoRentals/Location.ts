import { IEntitySchemaConfig, EPropertyTypes } from '../../types';

const Location: IEntitySchemaConfig = {
  entity: 'location',
  schema_version: 'v4',
  properties: [
    {
      id: 'country',
      name: 'country',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'city',
      name: 'city',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'open_hours_from',
      name: 'open_hours_from',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'lid',
      name: 'lid',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'latitude',
      name: 'latitude',
      type: EPropertyTypes.NUMBER,
      nullable: false,
    },
    {
      id: 'available_price_template',
      name: 'available_price_template',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'open_hours',
      name: 'open_hours',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'zip_code',
      name: 'zip_code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'emails',
      name: 'emails',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'category_strings',
      name: 'category_strings',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'primary_phone_number',
      name: 'primary_phone_number',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'entity_code',
      name: 'entity_code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'location_code',
      name: 'location_code',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'street',
      name: 'street',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'location_manager',
      name: 'location_manager',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'last_name',
          name: 'last_name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'first_name',
          name: 'first_name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      id: 'id',
      name: 'id',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'unit_apartment_suite',
      name: 'unit_apartment_suite',
      type: EPropertyTypes.STRING,
      nullable: true,
    },
    {
      id: 'state',
      name: 'state',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'categories',
      name: 'categories',
      type: EPropertyTypes.COLLECTION,
      nullable: false,
      additional_properties: [
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'category_type',
          name: 'category_type',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      id: 'longitude',
      name: 'longitude',
      type: EPropertyTypes.NUMBER,
      nullable: false,
    },
    {
      id: 'partner_fbo',
      name: 'partner_fbo',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'status',
          name: 'status',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
      ],
    },
    {
      id: 'address',
      name: 'address',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'open_hours_to',
      name: 'open_hours_to',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'partner_hotel',
      name: 'partner_hotel',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: true,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: true,
        },
        {
          id: 'status',
          name: 'status',
          type: EPropertyTypes.STRING,
          nullable: true,
        },
      ],
    },
    {
      id: 'counter_type',
      name: 'counter_type',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'phone_numbers',
      name: 'phone_numbers',
      type: EPropertyTypes.ARRAY,
      data_type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'location_name',
      name: 'location_name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'preferred_contact',
      name: 'preferred_contact',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'name',
      name: 'name',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'primary_email',
      name: 'primary_email',
      type: EPropertyTypes.STRING,
      nullable: false,
    },
    {
      id: 'region',
      name: 'region',
      type: EPropertyTypes.OBJECT,
      nullable: false,
      additional_properties: [
        {
          id: 'name',
          name: 'name',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'id',
          name: 'id',
          type: EPropertyTypes.STRING,
          nullable: false,
        },
        {
          id: 'attribute',
          name: 'attribute',
          type: EPropertyTypes.OBJECT,
          nullable: false,
          additional_properties: [
            {
              id: 'corporate',
              name: 'corporate',
              type: EPropertyTypes.OBJECT,
              nullable: false,
              additional_properties: [
                {
                  id: 'name',
                  name: 'name',
                  type: EPropertyTypes.STRING,
                  nullable: false,
                },
                {
                  id: 'id',
                  name: 'id',
                  type: EPropertyTypes.STRING,
                  nullable: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Location;
