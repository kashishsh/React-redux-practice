import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }
  onSubmit(values) {
    console.log(values);
  }
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name= "title"
          label="Title"
          component= {this.renderField}
        />
        <Field
          name= "categories"
          label="Categories"
          component= {this.renderField}
        />
        <Field
          name= "content"
          label="Post content"
          component= {this.renderField}
        />
        <button type="btn btn-primary">Submit</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title = "Enter a title !";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories";
  }
  if(!values.content) {
    errors.content = "Enter some content!";
  }

  // Validate the inputs from the value object

  // If error is empty, the form is fine to submit
  // If error has any property, redux form assumes form is invalid

  return errors;
}


export default reduxForm({
  validate,
  form: 'PostNewForm'
})(PostNew);
