import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    // handleSubmit is a function handed to us from redux-form
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={ handleSubmit } >
        <h3>Create A New Post</h3>

        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
        </div>

        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>

        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary" {...content} >Submit</button>
      </form>
    );
  };
};

export default reduxForm({
  // hey reduxForm, here is our configuration for the form:
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content']
})(PostsNew);
