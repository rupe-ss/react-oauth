import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const client = process.env.REACT_APP_AUTH0_CLIENT_ID;

//Below window.location.origin will redirect us to same location where login page was created
ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={client}
        redirectUri={window.location.origin}>
        <App />
    </Auth0Provider>,
    document.getElementById('root')
);
