import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  // life cycle method
  // react will pull this method when ever a componenet is about to be
  // render for the first time. called only once.
  componentWillMount() {
    // calling the action creator to fecth the posts.
    // the connect function only gave us access to this function.
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id} >
          <Link to={`posts/${post.id}`}>
            <span className="float-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="float-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          { this.renderPosts() }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}
// a shortcut for the mapDispatchToProps and bindActionCreators =>
// { fetchPosts: fetchPosts } just pass it as an object to PostsIndex;
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
// null is instead of mapStateToProps
