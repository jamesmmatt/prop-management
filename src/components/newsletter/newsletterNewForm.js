import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton } from '../formFields';
import TextLink from '../textLink';

class NewsletterNewForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}  className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text='Login'/>
                <Field
                    className='new-newsletter-form__email'
                    placeholder='Enter Email'
                    component={FormInput}
                    name='email'
                    type='email'
                    title="Email"
                />
            </form>
        )
    }
}

NewsletterNewForm = reduxForm({
    form: 'newsletternewForm'
})(NewsletterNewForm);

export default NewsletterNewForm;