export const SUBMIT_GUESS = 'SUBMIT_GUESS';
export const submitGuess = (guess) => ({
    type: SUBMIT_GUESS,
    guess,
});

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => ({
    type: RESTART_GAME
});

export const AURAL_UPDATE = 'AURAL_UPDATE';
export const auralUpdate = (auralStatus) => ({
    type: AURAL_UPDATE,
    auralStatus
});

export const GUESS_FEEDBACK = 'GUESS_FEEDBACK';
export const guessFeedback = (feedback) => ({
    type: GUESS_FEEDBACK,
    feedback
});
