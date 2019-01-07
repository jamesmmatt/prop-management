import React, { Component } from 'react';

import Button from '../button';

class RequestsGrid extends Component {

    handleRequests = () => {
        this.props.history.push('/request/new')
    }

    render() {
        return (
            <div className='requests-grid'>
                <Button className='requests-grid__button' icon='fas fa-plus' callback={() => this.handleRequests()}/>
            </div>
        )
    }
}

export default RequestsGrid;