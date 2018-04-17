import * as actions from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const reducer = (state=initialState, action) => {
    if(action.type === 'MAKE_GUESS'){
        return Object.assign();
    }else if(action.type === 'RESTART_GAME'){
        return Object.assign();
    }else if(action.type === 'AURAL_UPDATE'){
        return Object.assign();
    }
    return state;
}
