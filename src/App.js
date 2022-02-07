import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import Upload from "./components/upload.component";

function App() {


  
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
          <Link className="navbar-brand" to={"/sign-in"}>m.DataHub</Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">      
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/upload"}>Upload</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
<<<<<<< HEAD
            <Route exact path='/' component={Login} />
=======
            <Route exact path="/" component={Login} />
>>>>>>> 0a2f97226c7bfc873e0126a99523fa4e02ae86fd
            <Route path="/sign-in" component={Login} />
            <Route path="/upload" component={Upload} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
