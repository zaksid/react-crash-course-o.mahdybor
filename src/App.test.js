import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import Toolbar from './components/Toolbar';
import store from './redux/stores/store';

describe('<App />', () => {
    it('should focus on Cancel Request button', async () => {
        const { getByText } = render(
            <Provider store={store}>
                <Toolbar />
            </Provider>
        );

        const sendRequestBtn = getByText('Send request');
        const cancelRequestBtn = getByText('Cancel request');

        fireEvent.click(sendRequestBtn);

        expect(cancelRequestBtn).toHaveFocus();
    });
});
