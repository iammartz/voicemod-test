export default (state = {favouriteVoices: []}, action) => {
    switch (action.type) {
        case 'TOGGLE_FAVOURITE_VOICE': {
            const findVoice = state.favouriteVoices.find(voice => voice.id === action.payload.id);
            if(!findVoice) {
                state.favouriteVoices.push(action.payload)
            }
            else{
                state.favouriteVoices = state.favouriteVoices.filter(voice => !(voice.id === action.payload.id))
            }
            localStorage.setItem('favouriteVoices', JSON.stringify(state.favouriteVoices, ["id", "title", "icon", "tags"]))
            return {...state, favouriteVoices: state.favouriteVoices}
        }
        case 'GET_FAVOURITE_VOICES': {
            return state.favouriteVoices
        }
        default:
        return state
    }
}