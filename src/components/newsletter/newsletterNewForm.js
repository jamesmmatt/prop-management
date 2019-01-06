import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import { FormTitle } from '../formTitle';
import { FormInput, FormButton, FormTextArea, FormImage } from '../formFields';
import TextLink from '../textLink';

class NewsletterNewForm extends Component {
    render() {

        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit}  className='new-newsletter-form'>
                <FormTitle className='new-newsletter-form__title' text='New Newsletter'/>
                <Field
                    className='new-newsletter-form__newsletter-title'
                    placeholder='Newsletter Title'
                    component={FormInput}
                    name='title'
                    type='text'
                    title="Newsletter Title"
                />
                <Field
                    className='new-newsletter-form__body'
                    placeholder='Newsletter Body'
                    component={FormTextArea}
                    name='body'
                    type='text'
                    title="Body"
                />
                <Field
                    className='new-newsletter-form__submit'
                    small={true}
                    danger={true}
                    component={FormButton}
                    name='submit'
                    type='submit'
                    title="Submit"
                />
                <Field
                    className='new-newsletter-form__cancel'
                    small={true}
                    component={FormButton}
                    name='cancel'
                    title="Cancel"
                    type="button"
                    onClick={this.props.onCancel}
                />
                <Field
                    className='new-newsletter-form__image'
                    small={true}
                    component={FormImage}
                    name='image'
                    title="Image"
                    type="file"
                />
            </form>
        )
    }
}

NewsletterNewForm = reduxForm({
    form: 'newsletternewForm'
})(NewsletterNewForm);

export default NewsletterNewForm;