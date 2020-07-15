import React from 'react';
import './App.css';

//Import Components
import MenuBar from './Components/MenuBar/MenuBar';
import {Home} from './Components/Home/Home';
import {StoreHome} from './Components/StoreHome/StoreHome';
import {MenStoreHome} from './Components/MenStoreHome/MenStoreHome';
import {WomenStoreHome} from './Components/WomenStoreHome/WomenStoreHome';
import {ShopCart} from './Components/ShopCart/ShopCart';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <MenuBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/store" component={StoreHome}/>
          <Route exact path="/men" component={MenStoreHome} />
          <Route exact path="/women" component={WomenStoreHome} />
          <Route exact path="/cart" component={ShopCart} />
        </Switch>
      </GlobalProvider>
    </Router>
  );
}

export default App;
