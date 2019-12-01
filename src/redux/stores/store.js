import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { themeReducer, themeState } from '../reducers/themeReducer';
import { usersReducer, usersState } from '../reducers/usersReducer';

const reducers = combineReducers({
    users: usersReducer,
    theme: themeReducer
});

const preloadedState = {
    users: usersState,
    theme: themeState
};

const store = createStore(reducers, preloadedState, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
