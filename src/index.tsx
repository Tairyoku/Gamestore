// import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import {Provider} from 'react-redux'
// import store  from './redux/store';
import { setupStore } from './redux/rootReduser';
import {  persistReducer,     persistStore, } from 'redux-persist'


const store = setupStore()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
  <Provider store={store}>
  {/* <PersistGate persistor={persistStore(store)} loading={null} /> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
    </BrowserRouter>
);


