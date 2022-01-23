import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Main from './page/main';
function App() {
  return (
    <>
      <Switch>
        <Route path="/block/:numberTrans" component={Main} />
        <Route path="/">
          <Redirect to="/block/latest" />
        </Route>
      </Switch>
    </>
  );
  
}

export default App;
