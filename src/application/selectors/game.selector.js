// @Selectors

// get history array
export const getHistory = ({ gameReducer }) => gameReducer.History;
// get Step number
export const getStep = ({ gameReducer }) => gameReducer.Step;
// get next player status
export const getNextPlayer = ({ gameReducer }) => gameReducer.NextPlayer;
