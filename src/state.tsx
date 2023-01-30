import type { Location } from './types/sparkeats';

export function reducer(
  state: { location: Location; },
  action: { type: string; data: any; }
) {
  console.log('debug reducer', state, action);
  const location = state.location;

  switch (action.type) {
    case 'update_location': {
      return {
        ...state,
        location: {
          ...location,
          ...action.data
        }
      };
    }
  }
  throw Error(`Unknown action: ${action.type}`);
}
