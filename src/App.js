import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/homepage.component';
import { Switch, Route } from 'react-router-dom'
import ShopPage from './pages/ShopPage/shop.component';
import Navigation from './components/Navigation/navigation.component';

function App() {
  return (
    <div>
       <Navigation />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
