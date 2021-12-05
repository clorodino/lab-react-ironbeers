import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Switch, Route } from 'react-router-dom';
import AddBeerPage from './pages/AddBeerPage';
import BeersListPage from './pages/BeersListPage';
import BeerDetailsPage from './pages/BeerDetailsPage';
import RandomBeer from './pages/RandomBeer';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/new-beer" component={AddBeerPage}/>
        <Route exact path="/beers" component={BeersListPage}/>
        <Route exact path="/beers/:id" component={BeerDetailsPage}/>
        <Route exact path="/beers/random" component={RandomBeer}/>
      </Switch>
    </div>
  );
}

export default App;
