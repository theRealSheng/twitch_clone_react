import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamDelete from './streams/StreamDelete';
import StreamCreate from './streams/StreamCreate';
import Header from './Header';
import history from '../history'; 

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
            <Switch>
              <Route path="/streams/:id" exact component={StreamShow} />
              <Route path="/streams/delete/:id" exact component={StreamDelete} />
              <Route path="/streams/edit/:id" exact component={StreamEdit} />
              <Route path="/streams/new" exact component={StreamCreate} />
              <Route path="/" exact component={StreamList} />
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;