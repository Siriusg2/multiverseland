/* eslint-disable */
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER, SEARCH_CHARACTER,REMOVE_CARD } from "./actions";

const initialState = {
 allCharacters: [],
  myFavorites: [],
  allMyFavorites:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };
 
    case REMOVE_CARD:
      return {
        ...state,
        allCharacters:  state.allCharacters.filter(card=> card.id!== action.payload),
      };
 

    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allMyFavorites: [...state.allMyFavorites, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
        allMyFavorites: state.allMyFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    case FILTER:
      return {
        ...state,
        myFavorites: state.allMyFavorites.filter((character) => {
          return character.gender === action.payload;
        }),
      };
    case ORDER:
      if (action.payload === "Ascending") {
        state.allMyFavorites.sort((a, b) => a.id - b.id);
      } else {
        state.allMyFavorites.sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        myFavorites: state.allMyFavorites,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;

// eslint-disable-next-line linebreak-style
/* eslint-enable */
