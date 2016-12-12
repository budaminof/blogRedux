import React from 'react';
import { Route, IndexRoute} from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';

// Greeting is a child component of App and is being passed to App
// as this.props.children
export default (
  <Route path="/" component={App} >
    <IndexRoute component={PostsIndex} />
  </Route>
);
