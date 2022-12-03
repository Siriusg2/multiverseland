/* eslint-disable */
import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters:[],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== action.payload
        ),
        allCharacters: state.allCharacters.filter(
          (favorite) => favorite.id !== action.payload
        ),
      };
    case FILTER:
    
      return {
        ...state,
        myFavorites: state.allCharacters.filter((character) => {
        return character.gender === action.payload;
      })
      };
      case ORDER: 
  
      if(action.payload === "Ascending"){
        state.allCharacters.sort((a,b)=> a.id - b.id)
      }
      else{
       state.allCharacters.sort((a, b) => b.id - a.id);
      }
      return{
        ...state, myFavorites: state.allCharacters
      }
           
    default:
      return {
        ...state,
      };
  }
};

export default reducer;

// eslint-disable-next-line linebreak-style
/* eslint-enable */
