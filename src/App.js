import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <FirstPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
