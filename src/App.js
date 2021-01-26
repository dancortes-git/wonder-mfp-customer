import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';

const generateClassName = createGenerateClassName({
  productionPrefix: 'cus',
});

export default ({ history, isSignedIn, onSignOut, user }) => {

  console.log('Rendering customer...', 'user:', user, 'isSignedIn:', isSignedIn);

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/">
            <Header isSignedIn={isSignedIn} onSignOut={onSignOut} user={user}/>
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
};
