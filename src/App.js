import React from 'react';
import './App.css';

//Import Components
import MenuBar from './Components/MenuBar/MenuBar';
import {Home} from './Components/Home/Home';
import {StoreHome} from './Components/StoreHome/StoreHome';
import {MenStoreHome} from './Components/MenStoreHome/MenStoreHome';
import {WomenStoreHome} from './Components/WomenStoreHome/WomenStoreHome';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" component={StoreHome}/>
        <Route exact path="/men" component={MenStoreHome} />
        <Route exact path="/women" component={WomenStoreHome} />
      </Switch>
    </Router>
  );
}

export default App;
