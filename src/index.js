import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App.js';
import { AppContainer } from 'react-hot-loader';

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept('./containers/App.js', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render(
                <AppContainer>
                    <NextApp />
                </AppContainer>,
            document.getElementById('app')
        );
    });
}