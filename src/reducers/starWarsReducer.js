import { FETCHING, SUCCESS, FAILURE } from  "../actions";


const initialState = {
  isLoading: false,
  errorMessage: null,
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING: {
      return {
        ...state,
        isLoading: true,
      }

    }

    case SUCCESS: {
      return {
        ...state,
        isLoading: false,
        errorMessage: null,
        characters: [...state.characters, ...action.payload],
      }
    }

    case FAILURE: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.message,
      }
    }
    
    default:
      return state;
  }
};


// Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.