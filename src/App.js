import React from 'react';
import './App.css';

//Import Components
import MenuBar from './Components/MenuBar/MenuBar';
import {Home} from './Components/Home/Home';
import {StoreHome} from './Components/StoreHome/StoreHome';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MenuBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/store" >
          <Route path="/" component={StoreHome} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
