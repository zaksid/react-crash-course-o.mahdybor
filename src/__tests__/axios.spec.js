import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import mockAxios from '../__mocks__/axios';
import userData from '../__mocks__/userData';
import ErrorView from '../components/ErrorView';
import Profile from '../components/Profile';
import Toolbar from '../components/Toolbar';
import store from '../redux/stores/store';

describe('Test axios', () => {
    it('should fetch user profile', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.resolve(userData)
        );

        const { getByText, findByTestId } = render(
            <Provider store={store}>
                <Toolbar />
                <Profile />
            </Provider>
        );

        const sendRequestBtn = getByText('Send request');

        fireEvent.click(sendRequestBtn);

        const email = await findByTestId('user-email');
        const name = await findByTestId('user-name');

        expect(email).toHaveTextContent(userData.data.results[0].email);
        expect(name).toHaveTextContent(`${userData.data.results[0].name.first} ${userData.data.results[0].name.last}`);
    });

    it('should show error message', async () => {
        mockAxios.get.mockImplementationOnce(() =>
            Promise.reject({
                message: 'test error'
            })
        );

        const { getByText, findByTestId } = render(
            <Provider store={store}>
                <Toolbar />
                <Profile />
                <ErrorView />
            </Provider>
        );

        const sendRequestBtn = getByText('Send request');

        fireEvent.click(sendRequestBtn);

        const errorView = await findByTestId('error-view');

        expect(errorView).not.toBeNull();
        expect(errorView).toHaveTextContent('test error');
    });
});
