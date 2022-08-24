import { Routes ,Route } from 'react-router-dom';
import Header from './components/header/header';
import HomePage from './pages/homePage/homePage';
import './index.css'
import {Provider} from 'react-redux'
import { GamePage } from './pages/GamePage/GamePage';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import { setupStore } from './redux/rootReduser';
import { OrderPage } from './pages/OrderPage/OrderPage';

const store = setupStore()

function App() {

  return (
    <div className="App">
      <PersistGate persistor={persistStore(store)} loading={null} >
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/app/:title" element = {<GamePage />} />
        <Route path="/order" element = {<OrderPage />} />
      </Routes>
     </PersistGate>
    </div>
  );
}

export default App;
