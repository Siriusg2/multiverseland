/* eslint-disable implicit-arrow-linebreak */
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const REMOVE_CARD = 'REMOVE_CARD';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const SEARCH_CHARACTER = 'SEARCH_CHARACTER';

export const addFavorite = ({
  id, name, species, gender, image,
}) => ({
  type: ADD_FAVORITE,
  payload: {
    id,
    name,
    species,
    gender,
    image,
  },
});

export const searchCharacter = (number) => async (dispatch) =>
  fetch(`https://rickandmortyapi.com/api/character/${number}`)
    .then((response) => response.json())
    .then((data) => dispatch({ type: SEARCH_CHARACTER, payload: data }));
export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
  payload: id,
});
export const removeCard = (id) => ({
  type: REMOVE_CARD,
  payload: id,
});

export const filterCardsaction = (gender) => ({
  type: FILTER,
  payload: gender,
});

export const orderCardsaction = (type) => ({
  type: ORDER,
  payload: type,
});
