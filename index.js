//-------
// Point
//-------
export const Point = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['Point'] },
    coordinates: {
      type: 'array',
      minItems: 2,
      maxItems: 3,
      items: { type: 'number' },
    },
  },
  required: ['type', 'coordinates'],
};

//-------
// LineString
//-------
export const LineString = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['LineString'] },
    coordinates: {
      type: 'array',
      minItems: 2,
      items: {
        type: 'array',
        minItems: 2,
        maxItems: 2,
        items: { type: 'number' },
      },
    },
  },
  required: ['type', 'coordinates'],
};

//-------
// Feature Point
//-------
export const FeaturePoint = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['Feature'] },
    geometry: Point,
    properties: { oneOf: [{ type: 'null' }, { type: 'object' }] },
  },
  required: ['type', 'geometry', 'properties'],
};

//-------
// Feature
//-------
export const FeatureLineString = {
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['Feature'] },
    geometry: LineString,
    properties: { oneOf: [{ type: 'null' }, { type: 'object' }] },
  },
  required: ['type', 'geometry', 'properties'],
};
