import type { Location } from './types/sparkeats';

export function reducer(
  state: { location?: Location; locations?: Location[] },
  action: { type: string; data: any }
) {
  const { location } = state;

  switch (action.type) {
    case 'update_location': {
      return {
        ...state,
        location: {
          ...location,
          ...action.data,
        },
      };
    }
    case 'set_location': {
      return {
        ...state,
        location: action.data,
      };
    }
    case 'set_locations': {
      return {
        ...state,
        locations: action.data,
      };
    }
  }
  throw Error(`Unknown action: ${action.type}`);
}
