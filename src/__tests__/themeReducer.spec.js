import { setResultsTheme, setToolbarTheme } from '../redux/actions/themeActions';
import { themeReducer } from '../redux/reducers/themeReducer';

describe('themeReducer', () => {
    const initState = {
        toolbarTheme: 'dark',
        resultsTheme: 'light'
    };

    it('should return the same state by default', () => {
        const state = themeReducer(initState, { type: 'UNKNOWN' });
        expect(state).toBe(initState);
    });

    it('should correctly set results theme', () => {
        let state = themeReducer(initState, setResultsTheme('dark'));
        expect(state.resultsTheme).toBe('dark');

        state = themeReducer(state, setResultsTheme('light'));
        expect(state.resultsTheme).toBe('light');
    });

    it('should correctly set toolbar theme', () => {
        let state = themeReducer(initState, setToolbarTheme('light'));
        expect(state.toolbarTheme).toBe('light');

        state = themeReducer(state, setToolbarTheme('dark'));
        expect(state.toolbarTheme).toBe('dark');
    });
});
