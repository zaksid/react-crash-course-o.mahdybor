import React from 'react';

export const ThemePortal = React.createContext('light');

export function withTheme(Component) {
    return class ThemeWrapper extends React.Component {
        render() {
            return (
                <ThemePortal.Consumer>
                    {value => <Component {...this.props} theme={value} />}
                </ThemePortal.Consumer>
            );
        }
    };
}
