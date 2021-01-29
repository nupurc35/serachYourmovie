import React, { Component, Fragment } from 'react'
import './App.css';
import Navbarapp from './components/layout/Appnavbar'
import Home from './components/pages/Home'
import About from './components/pages/About'
import { Container } from 'reactstrap';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch } from "react-router-dom";
import {Provider} from 'react-redux'
import store from './store'
import Movies from './components/movie/Movies'
import Search from './components/movie/Search'
import Singlemovie from './components/movie/Singlemovie'
const App = ()=> {
const history = createBrowserHistory();
  return (
    <Provider store={store}>
    <Router history={history}>
    <div className="App">
     <Navbarapp></Navbarapp> 
     <section className ="container">
      <Switch>
        <Route exact path='/' render={props=>(<Fragment>
        <Search></Search> 
         <Movies></Movies>
        </Fragment>)}
     ></Route> 
      <Route exact path = "/about" component   = {About} />
      <Route exact path = '/user/:login' render={props=>(<Fragment>
           <Singlemovie  {...props} getuser={this.getuser} loading={this.state.loading} user={this.state.user}></Singlemovie>
      </Fragment>)}></Route>
    </Switch>
    </section>
 </div>
 </Router>
</Provider>
   );
}
export default App;
