import React from 'react';

const months = [
    'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'
]

let isDateBelowZero = (dateNum) => {
    if(dateNum < 10) {
        let modDateNum = String('0' + dateNum);
        return modDateNum;
    }    
}


export default function NewsletterBox({date}) {
    return (
        <div className='newsletter-box'>
            <div className='newsletter-box__day'>{isDateBelowZero(date.getDate())}</div>
            <div className='newsletter-box__month-year'>{months[date.getMonth()]} {date.getFullYear()}</div>
            <div className='newsletter-box__point'></div>
        </div>
    )
}