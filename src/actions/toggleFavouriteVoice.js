export const toggleFavouriteVoice = (data) => (dispatch) => {
  dispatch({
    type: "TOGGLE_FAVOURITE_VOICE",
    payload: data,
  });
};
