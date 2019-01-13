import React, { Component } from 'react';

const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

class NewsletterBox extends Component {
    render() {
        const { date } = this.props;
        if(!date) {
            return <div>...fetching newsletters</div>
        }
        const parseDate = new Date(date);
        return (
            <div className='newsletter-box'>
                <div className='newsletter-box__day'>{parseDate.getDate()}</div>
                <div className='newsletter-box__month-year'>{months[parseDate.getMonth()]} {parseDate.getFullYear()}</div>
                <div className='newsletter-box__point'></div>
            </div>
        )
    }
}



export default NewsletterBox;