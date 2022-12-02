export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

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
