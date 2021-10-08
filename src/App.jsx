import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import ContactPage from './components/contact/ContactPage';
import NewsPage from './components/news/NewsPage';
import { pages } from "./components/common/Header";
import './App.scss';

function PageRoute(props) {
  const { path, exact, children} = props;

  return (
      <Route exact={exact} path={path}>
          {children}
      </Route>
  );
}

function App() {
  const { HOME, NEWS, CONTACT } = pages;

  return (
    <Router>
      <Switch>
        <PageRoute path={HOME.path} exact={HOME.exact}>
          <HomePage/>
        </PageRoute>
        <PageRoute path={NEWS.path} exact={NEWS.exact}>
          <NewsPage/>
        </PageRoute>
        <PageRoute path={CONTACT.path} exact={CONTACT.exact}>
          <ContactPage/>
        </PageRoute>
      </Switch>
    </Router>
  );
}

export default App;
