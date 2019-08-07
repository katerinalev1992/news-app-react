import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Router } from "react-router-dom";

import { firebase } from '../../firebase';
import { Navigation } from '../Navigation/Navigation';
import history from '../../constants/history';
import { AppRoutes, AppRoute } from '../../routes/appRoutes';
import { withAuthentication } from '../../firebase/withAuthentification';

class AppComponent extends Component {
  constructor(props: any) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  public componentDidMount() {
    firebase.auth.onAuthStateChanged((authUser: any) => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }

  public render() {
    return (
      <Router history={history}>
        <div>
          <Navigation />
          <hr />
          <Switch>
            {
              AppRoutes.map((route: AppRoute) => (
                <Route exact={route.exact} 
                       path={route.path} 
                       component={route.component}
                       key={route.path} />))
            }
          </Switch>
        </div>
      </Router>
    );
  }
}

export const App = withAuthentication(AppComponent);
