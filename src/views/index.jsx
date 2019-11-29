import React, { Component } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import Login from './Login';
import Exhibitions from './Exhibitions';
import Collections from './Collections';
import Tickets from './Tickets';
import Shop from './Shop';
import ExhibitionPreview from './ExhibitionPreview';
import theme from '../config/theme';
import { routes } from '../config/router';

export const Router = (
  <Switch>
    <Route exact path={routes.LOGIN.url} component={Login} />
    <Route exact path={routes.EXHIBITIONS.url} component={Exhibitions} />
    <Route exact path={routes.COLLECTIONS.url} component={Collections} />
    <Route exact path={routes.SHOP.url} component={Shop} />
    <Route exact path={routes.TICKETS.url} component={Tickets} />
    <Route exact path="/preview" component={ExhibitionPreview} />
    <Route path="*" render={() => <Redirect to={routes.LOGIN.url} />} />
  </Switch>
);

class Views extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>{Router}</ThemeProvider>
        </MuiThemeProvider>
      </HashRouter>
    );
  }
}


export default withRouter(Views);
