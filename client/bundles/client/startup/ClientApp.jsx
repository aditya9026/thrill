import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../store/clientStore';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../routes/Routes';

const ClientApp = (props) => (
  <Provider store={configureStore(props)}>
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Provider>
);
export default ClientApp;
