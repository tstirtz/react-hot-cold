import * as action from './actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.round(Math.random() * 100) + 1
}

export const reducer = (state=initialState, action) => {
    if(action.type === 'SUBMIT_GUESS'){
        return Object.assign({}, state, {
            guesses: [...state.guesses, action.guess]
        });
    }else if(action.type === 'RESTART_GAME'){
        return Object.assign({}, state,{
            guesses: [],
            feedback: 'Make your guess!',
            auralStatus: '',
            correctAnswer: Math.round(Math.random() * 100) + 1
        });
    }else if(action.type === 'AURAL_UPDATE'){
        console.log("Aural update reducer called");
        return Object.assign({}, state, {
            auralStatus: action.auralStatus
        });
    }else if(action.type === 'GUESS_FEEDBACK'){
        return Object.assign({}, state, {
            feedback: action.feedback
        });
    }
    return state;
}
