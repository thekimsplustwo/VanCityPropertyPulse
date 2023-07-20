import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import { getStore } from './redux/store';
import App from './App';
import GlobalStyle from './global';
import { GOOGLE_CLIENT_ID } from './config';

const { persistor, store } = getStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <React.StrictMode>
          <GlobalStyle />
          <App />
        </React.StrictMode>
      </PersistGate>
    </Provider>
  </GoogleOAuthProvider>
);
