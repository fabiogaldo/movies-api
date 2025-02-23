import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayArray extends Struct.ComponentSchema {
  collectionName: 'components_array_arrays';
  info: {
    description: '';
    displayName: 'Array';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'array.array': ArrayArray;
    }
  }
}
