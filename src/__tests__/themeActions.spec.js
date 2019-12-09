import { setResultsTheme, setToolbarTheme } from '../redux/actions/themeActions';

describe('themeActions', () => {
    describe('setResultsTheme', () => {
        const action = setResultsTheme('dark');

        it('should return correct action type', () => {
            expect(action.type).toBe('SET_RESULTS_THEME');
        });

        it('should match snapshot', () => {
            expect(action).toMatchSnapshot();
        });
    });

    describe('setToolbarTheme', () => {
        const action = setToolbarTheme('light');

        it('should return correct action type', () => {
            expect(action.type).toBe('SET_TOOLBAR_THEME');
        });

        it('setToolbarTheme should match snapshot', () => {
            expect(action).toMatchSnapshot();
        });
    });
});
