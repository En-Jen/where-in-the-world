import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import CountriesList from './components/CountriesList';
import CountryPage from './components/CountryPage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={CountriesList} />
        <Route exact path="/:id" component={CountryPage} />
      </Switch>
    </div>
  );
}

export default App;
