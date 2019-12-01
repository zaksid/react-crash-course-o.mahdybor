import Constants from '../constants';

export const setResultsTheme = theme => ({
    type: Constants.SetResultsTheme,
    payload: theme
});

export const setToolbarTheme = theme => ({
    type: Constants.SetToolbarTheme,
    payload: theme
});
