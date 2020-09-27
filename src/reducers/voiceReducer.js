export default (state = {}, action) => {
  switch (action.type) {
    case "SET_VOICE": {
      console.log(action.payload);
      return {
        ...state,
        activeVoice: action.payload,
      };
    }
    default:
      return state;
  }
};
