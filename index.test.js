import Ajv from 'ajv';
import { FeaturePoint, FeatureLineString } from './index';

// Start tests ...
describe('GeoJSON validation', () => {
  it('expect validate GeoJSON FeaturePoint', () => {
    // Init validator
    const ajv = new Ajv();
    const validate = ajv.compile(FeaturePoint);

    expect(validate({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [102.0, 0.5]
      },
      properties: {
        prop0: 'value0'
      },
    })).toBe(true);
  });

  it('expect unvalidate a bad GeoJSON FeaturePoint', () => {
    // Init validator
    const ajv = new Ajv();
    const validate = ajv.compile(FeaturePoint);

    expect(validate({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [102.0, 0.5]
      },
      properties: true,
    })).toBe(false);
  });

  it('expect validate GeoJSON FeatureLineString', () => {
    // Init validator
    const ajv = new Ajv();
    const validate = ajv.compile(FeatureLineString);

    expect(validate({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [[102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]],
      },
      properties: {
        prop0: 'value0',
        prop1: 0.0
      }
    })).toBe(true);
  });

  it('expect unvalidate a bad GeoJSON FeatureLineString', () => {
    // Init validator
    const ajv = new Ajv();
    const validate = ajv.compile(FeatureLineString);

    expect(validate({
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [102.0, 0.5]
      },
      properties: {
        prop0: 'value0',
        prop1: 0.0
      }
    })).toBe(false);
  });
});
