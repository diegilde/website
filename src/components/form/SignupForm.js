import React, { Component } from "react"
import postForm from '../../services/mailchimpService';
import "./SignupForm.css"
import Input from './Input';
import Select from './Select';

class SignupForm extends Component {
  state = {
    fields: {},
    error: {},
    isSignupCompleted: false
  }

  onChange = ({ target }) => {
    this.setState(({ fields }) => ({
      fields: { ...fields, [target.name]: target.value }
    }));
  }

  clearError = ({ target: { name } }) => {
    this.setState(({ error }) => ({
      error: { ...error, [name]: null }
    }));
  }

  submitForm = async () => {
    this.setState({ error: {} });
    const { result, message } = await postForm(this.state.fields);

    if (result === 'error') {
      if(message.fieldName) {
        this.setState({ error: { [message.fieldName]: message.content } });
      } else {
        this.setState({ error: { generic: message.content } });
      }
    }

    if (result === 'success') {
      this.setState({ isSignupCompleted: true });
    }
  }

  renderOtherProfession() {
    return this.state.fields.PROF === 'Other' ? (
      <Input
        name="ADDPROF"
        value={this.state.fields.ADDPROF}
        placeholder="Enter your profession"
        onChange={this.onChange}
        onFocus={this.clearError}
        errorMessage={this.state.error.ADDPROF}
      />
    ) : null;
  }

  render() {
    const { fields } = this.state;

    if(this.state.isSignupCompleted) {
      return (
        <div id="signup_form" className="signupForm thankYouMessage" >
          <div>
            <h4>Thank you {fields.NAME} for signing up!</h4>
            <p>Your guild is still under development in your city. We will get in touch with you once we are ready to launch.</p>
          </div>
        </div>
      )
    }

    return (
      <div id="signup_form" className="signupForm" >
        <form onSubmit={e => e.preventDefault()} >
          <h4 >Join your guild today</h4 >

          <Select
            name="PROF"
            value={fields.PROF}
            placeholder="Select profession"
            options={[
              { value: 'Data Scientists', label: 'Data Scientists' },
              { value: 'Executive Assistants', label: 'Executive Assistants' },
              { value: 'HR', label: 'HR' },
              { value: 'Product Manager', label: 'Product Manager' },
              { value: 'Nutritionists', label: 'Nutritionists' },
              { value: 'Social Support Professionals', label: 'Social Support Professionals' },
              { value: 'Other', label: 'Other – please specify below' },
            ]}
            onChange={this.onChange}
            onFocus={this.clearError}
            errorMessage={this.state.error.PROF}
          />

          {this.renderOtherProfession()}

          <Input
            name="NAME"
            value={fields.NAME}
            placeholder="Name"
            onChange={this.onChange}
            onFocus={this.clearError}
            errorMessage={this.state.error.NAME}
          />

          <Input
            name="EMAIL"
            value={fields.EMAIL}
            placeholder="Email"
            onChange={this.onChange}
            onFocus={this.clearError}
            errorMessage={this.state.error.EMAIL}
          />

          <Input
            name="CITY"
            value={fields.CITY}
            placeholder="City"
            onChange={this.onChange}
            onFocus={this.clearError}
            errorMessage={this.state.error.CITY}
          />

          {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true" >
            <input
              type="text"
              value={fields['b_8139f4826471cfd00539f64b7_d94c5e191e']}
              name="b_8139f4826471cfd00539f64b7_d94c5e191e"
              tabIndex="-1"
              onChange={this.onChange}
              onFocus={this.clearError}
            />
          </div >

          <p className="error"><small dangerouslySetInnerHTML={{ __html: this.state.error.generic }} /></p>

          <button
            type="submit"
            onClick={this.submitForm}
          >
            Sign up now
          </button>
        </form >
      </div >
    )
  }
}

export default SignupForm
