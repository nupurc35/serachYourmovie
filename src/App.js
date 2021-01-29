import React, {Fragment } from 'react'
import './App.css';
import Navbarapp from './components/layout/Appnavbar'
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
      <Route exact path = '/singlemovie/:id' render={props=>(<Fragment>
           <Singlemovie ></Singlemovie>
      </Fragment>)}></Route>
    </Switch>
  </section>
 </div>
 </Router>
</Provider>
   );
}
export default App;
