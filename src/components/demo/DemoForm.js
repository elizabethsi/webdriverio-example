import React, { Component } from 'react';
import './DemoForm.scss';
import Input from './Input';

class DemoForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputs: {},
      errors: {}
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onValChange = this.onValChange.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { inputs } = this.state;
    const errors = this.validateInputs(inputs);

    if (Object.keys(errors).length > 0) {
      this.setState({
        errors
      });
      return;
    }

    console.log('success!');
  }

  onValChange(name, value) {
    const { inputs } = this.state;

    inputs[name] = value;
    this.setState({
      inputs
    });
  }

  validateInputs(inputs) {
    const expectedInputs = [
      'firstName', 'lastName', 'email', 'companyName', 'companyType', 'phone'
    ];

    return expectedInputs.map(
        name => {
          if (inputs.hasOwnProperty(name) && typeof inputs[name] === 'string' && inputs[name].trim().length > 0) {
            return null;
          }

          return name;
        }
      ).filter(val => val != null)
      .reduce((acc, name) => {
        acc[name] = `Please fill in this field.`;
        return acc;
      }, {});
  }

  renderInput(name, label, type = 'text') {
    const { errors } = this.state;

    return (
      <Input name={name} label={label} type={type} onChange={this.onValChange} error={errors[name]} />
    )
  }

  render() {
    return (
      <form className="demo-form" onSubmit={this.onSubmit}>
        {this.renderInput('firstName', 'First Name')}
        {this.renderInput('lastName', 'Last Name')}
        {this.renderInput('email', 'Email')}
        {this.renderInput('companyName', 'Company Name')}
        {this.renderInput('companyType', 'Company Type')}
        {this.renderInput('phone', 'Phone')}
        <button className="button is-primary is-medium is-fullwidth">Submit</button>
      </form>
    );
  }
}

export default DemoForm;
