import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(()=> {
        // blog post has been created navigate user to the index
        // we navigate by calling this.context.router.push with the new path
        this.context.router.push('/');
       })
  }

  render() {
    // handleSubmit is a function handed to us from redux-form
    const { fields: { title, categories, content }, handleSubmit } = this.props;

    return(
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help form-control-feedback">
            { title.touched ? title.error : '' }
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help form-control-feedback">
            { categories.touched ? categories.error : '' }
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help form-control-feedback">
            { content.touched ? content.error : '' }
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to='/' className="btn btn-danger">Cancel</Link>
      </form>
    );
  };
};

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title= 'Please enter a title';
  }
  if (!values.categories) {
    errors.categories= 'Please enter a category';
  }
  if (!values.content) {
    errors.content= 'Please enter a content';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxFrom: 1st is form config, 2nd is mapStateToProps, 3 mapDispatchToProps

export default reduxForm({
  // hey reduxForm, here is our configuration for the form:
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
