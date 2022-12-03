export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';

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

export const removeFavorite = (id) => ({
  type: REMOVE_FAVORITE,
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
