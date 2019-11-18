import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page404 from './components/Page404'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactsPage from './components/ContactsPage'

import './App.css';

function App() {
  return (
      <Router>
          <Header>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/contacts" exact component={ContactsPage} />
                <Route path="*" exact component={Page404} />
            </Switch>
          </Header>
          <Footer />
      </Router>
  );
}

export default App;
