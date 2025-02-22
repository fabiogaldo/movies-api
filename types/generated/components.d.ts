import type { Schema, Struct } from '@strapi/strapi';

export interface ArrayArray extends Struct.ComponentSchema {
  collectionName: 'components_array_arrays';
  info: {
    displayName: 'Array';
  };
  attributes: {
    Genres: Schema.Attribute.Enumeration<['acao', 'comedia']>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'array.array': ArrayArray;
    }
  }
}
