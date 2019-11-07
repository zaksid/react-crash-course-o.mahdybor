import React from 'react';
import './App.css';
import Button from './components/Button';
import ErrorView from './components/ErrorView';
import ResultItem from './components/ResultItem';
import axios from 'axios';

class App extends React.Component {
    state = {
        isLoading: false,
        isError: false,
        isCancelled: false,
        user: null
    };

    CancelToken = axios.CancelToken;
    source = this.CancelToken.source();
    url = 'https://randomuser.me/api/';

    sendRequest = async () => {
        this.setState({
            isLoading: true,
            isError: false
        });

        this.source = this.CancelToken.source();

        try {
            const response = await axios.get(this.url, {
                cancelToken: this.source.token
            });
            const user = response.data.results[0];

            setTimeout(() => {
                this.setState({
                    isLoading: false,
                    user: {
                        email: user.email,
                        name: user.name
                    }
                });
            }, 2000);
        } catch (error) {
            this.setState({
                user: '',
                isLoading: false
            });

            if (axios.isCancel(error)) {
                this.setState({
                    isCancelled: true
                });

                setTimeout(() => {
                    this.setState({ isCancelled: false });
                }, 3000);
            } else {
                this.setState({
                    isError: true,
                    errorMsg: error
                });
            }
        }
    };

    cancelRequest = () => {
        this.source.cancel('Operation canceled by the user.');

        //////////////////////
        this.setState({
            user: '',
            isLoading: false,
            isCancelled: true
        });

        setTimeout(() => {
            this.setState({ isCancelled: false });
        }, 3000);
    };

    render() {
        return (
            <div className="App">
                <Button
                    className="btn-ok"
                    text="Send request"
                    onClickHandler={this.sendRequest} />

                <Button
                    className="btn-cancel"
                    text="Cancel request"
                    onClickHandler={this.cancelRequest} />

                {
                    this.state.isError
                        ? <ErrorView onClickHandler={this.sendRequest} errorMsg={this.state.errorMsg} />
                        : <ResultItem state={this.state} />
                }
            </div>
        );
    }
}

export default App;
