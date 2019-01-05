import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render() {
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>Title goes here</h1>
                <img className='newsletter-latest__image' src='http://via.placeholder.com/960x258'/>
                <div className='newsletter-latest__body'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed quam nibh. Etiam ac tellus imperdiet, vestibulum nibh vitae, lobortis tellus. Nunc gravida efficitur nulla id ullamcorper. Vivamus at leo interdum, rhoncus nisi at, malesuada lacus. Quisque semper non augue a iaculis. Quisque a nisl velit. Nulla magna urna, laoreet sit amet lorem non, porttitor congue justo. Phasellus fermentum vulputate sem, pharetra tristique neque auctor at. Aliquam eleifend nibh ut mattis dignissim. Sed tempus nec tellus quis porta. Mauris id egestas massa. Etiam fringilla, est egestas ultrices vestibulum, ligula metus cursus massa, vitae imperdiet purus nunc id urna. Duis ipsum odio, iaculis eu viverra a, rhoncus posuere dui. Nulla quam nisl, pulvinar malesuada finibus et, rutrum in diam. Sed viverra eros quis hendrerit convallis.</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;