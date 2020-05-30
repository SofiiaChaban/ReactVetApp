import React from 'react';
import './App.css';
import Header from "./components/Header.js"
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js"
import MainPage from "./components/MainPage.js";
import UserList from "./components/UserList.js"

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route path="/info" component={UserList}/>
        <Route path="/signUp" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={MainPage}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
