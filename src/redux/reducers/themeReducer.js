import Constants from '../constants';

export const themeState = {
    toolbarTheme: 'dark',
    resultsTheme: 'light'
};

export const themeReducer = (state = themeState, action) => {
    switch (action.type) {
        case Constants.SetResultsTheme: {
            return {
                ...state,
                resultsTheme: action.payload
            };
        }
        case Constants.SetToolbarTheme: {
            return {
                ...state,
                toolbarTheme: action.payload
            };
        }
        default:
            return state;
    }
};
