import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput } from '../formFields';

class SigninForm extends Component {
    render() {
        return (
            <form className='sign-in-form'>
                <FormTitle className='sign-in-form__title' text='Login'/>
                <Field
                    className='sign-in-form__email'
                    placeholder='Enter Email'
                    component={FormInput}
                    name='email'
                    type='email'
                    title="Email"
                />
                <Field
                    className='sign-in-form__passwrod'
                    placeholder='Enter Password'
                    component={FormInput}
                    name='password'
                    type='password'
                    title="Password"
                />
            </form>
        )
    }
}

SigninForm = reduxForm({
    form: 'signin'
})(SigninForm);

export default SigninForm;