import React from 'react';

class ResultItem extends React.Component {
    render() {
        const { state } = this.props;
        let element;

        if (state.isLoading) {
            element = <div>Loading data...</div>;
        } else if (state.isCancelled) {
            element = <div>The request has been cancelled</div>;
        } else if (state.user) {
            element = (
                <>
                    <div>Name: {`${state.user.name.first} ${state.user.name.first}`}</div>
                    <div>Email: {state.user.email}</div>
                </>
            );
        } else {
            element = <></>;
        }

        return (
            <div className="text">{element}</div>
        );
    }
}

export default ResultItem;
