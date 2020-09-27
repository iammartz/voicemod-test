export const setVoiceAction = (data) => (dispatch) => {
  dispatch({
    type: "SET_VOICE",
    payload: data,
  });
};
