import { GET_CHAR, FETCHING, SUCCESS, FAILURE } from  "../actions";


const initialState = {
  isLoading: false,
  errorMessage: null,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHAR: {
      return {
        ...state,
        characters: action.characters,
      }
    }

    case FETCHING: {
      return {
        ...state,
        isLoading: true,
      }

    }

    case SUCCESS {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        characters,
      }
    }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
