import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-darmstadt',
    predictionPlace: {
      address: 'Darmstadt, Germany',
      bounds: new LatLngBounds(new LatLng(49.95388, 8.749719), new LatLng(49.795641, 8.559924)),
    },
  },
  {
    id: 'default-hannover',
    predictionPlace: {
      address: 'Hannover, Germany',
      bounds: new LatLngBounds(new LatLng(52.454422, 9.918508), new LatLng(52.304911, 9.604435)),
    },
  },
  {
    id: 'default-stuttgart',
    predictionPlace: {
      address: 'Stuttgart, Germany',
      bounds: new LatLngBounds(new LatLng(48.866399, 9.315825), new LatLng(48.692019, 9.038605)),
    },
  }
];
