export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_VOICE':
            return {
                ...state,
                activeVoice: action.payload
            }
        default:
        return state
    }
}