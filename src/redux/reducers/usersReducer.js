import axios from 'axios';
import { fetchCancel, fetchError, fetchUsersStart, usersLoaded } from '../actions/usersActions';
import Constants from '../constants';

const CancelToken = axios.CancelToken;
const url = 'https://randomuser.me/api/';

let source;

export const usersState = {
    users: []
};

export const usersReducer = (state = usersState, action) => {
    switch (action.type) {
        case Constants.FetchUserStart: {
            return {
                ...state,
                isLoading: true
            };
        }
        case Constants.FetchUserSuccess: {
            return {
                ...state,
                users: action.payload,
                error: false,
                isCancelled: false,
                isLoading: false
            };
        }
        case Constants.FetchUserCancel: {
            return {
                ...state,
                isCancelled: true,
                isLoading: false
            };
        }
        case Constants.FetchUserError: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            };
        }
        default:
            return state;
    }
};

export const fetchUsers = () => async (dispatch) => {
    dispatch(fetchUsersStart());

    source = CancelToken.source();

    try {
        const response = await axios.get(url, {
            cancelToken: source.token
        });
        const user = response.data.results[0];

        dispatch(usersLoaded([{
            name: {
                first: user.name.first,
                last: user.name.last
            },
            email: user.email,
            picture: user.picture.large
        }]));
    } catch (error) {
        if (axios.isCancel(error)) {
            dispatch(fetchCancel());
        } else {
            dispatch(fetchError(error.message));
        }
    } finally {
        /* eslint-disable require-atomic-updates */
        source = null;
        /* eslint-enable require-atomic-updates */
    }
};

export const cancelRequest = () => dispatch => {
    if (!source) {
        return;
    }

    source.cancel('Operation canceled by the user.');
    dispatch(fetchCancel());
};
