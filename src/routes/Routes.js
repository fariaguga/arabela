import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Intro from '../components/intro/Intro';
import Admin from '../components/admin/Admin';

function Routes() {
  return (
    <BrowserRouter>
        <Switch>
         <Route exact path="/admin" component= { Admin } />
         <Route exact path="/" component={Intro}/>
       </Switch>
    </BrowserRouter>

  );
}
export default Routes;