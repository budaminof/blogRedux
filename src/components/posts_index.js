import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

class PostsIndex extends Component {
  // life cycle method
  // react will pull this method when ever a componenet is about to be
  // render for the first time. called only once.
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

// a shortcut for the mapDispatchToProps and bindActionCreators =>
// { fetchPosts: fetchPosts } just pass it as an object to PostsIndex;
export default connect(null, { fetchPosts })(PostsIndex);
// null is instead of mapStateToProps
