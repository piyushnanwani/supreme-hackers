import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

const HomePage = lazy(() => import('pages/home'))

const renderLoader = () => <></>;

export default function RouterApp() {
  return (
    <>
    <Router>
    
      <Suspense fallback={renderLoader()}>
        <Switch>
        {/* dynamic app route */}
        <Route path="/" exact component={HomePage} />

        {/* Redirect to homepage when url is invalid */}
        <Route render={() => <Redirect to ={{ pathname: '/'}} /> } />
        </Switch>
      </Suspense>
    </Router>

    </>
  )
}