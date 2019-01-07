import {
    SET_NEWSLETTERS
} from './types';



export function fetchNewsletters() {

    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holidays people',
                body: 'this is different text ipsum dolor sit amet, consectetur adipiscing elit. Integer sed quam nibh. Etiam ac tellus imperdiet, vestibulum nibh vitae, lobortis tellus. Nunc gravida efficitur nulla id ullamcorper. Vivamus at leo interdum, rhoncus nisi at, malesuada lacus. Quisque semper non augue a iaculis. Quisque a nisl velit. Nulla magna urna, laoreet sit amet lorem non, porttitor congue justo. Phasellus fermentum vulputate sem, pharetra tristique neque auctor at. Aliquam eleifend nibh ut mattis dignissim. Sed tempus nec tellus quis porta. Mauris id egestas massa. Etiam fringilla, est egestas ultrices vestibulum, ligula metus cursus massa, vitae imperdiet purus nunc id urna. Duis ipsum odio, iaculis eu viverra a, rhoncus posuere dui. Nulla quam nisl, pulvinar malesuada finibus et, rutrum in diam. Sed viverra eros quis hendrerit convallis.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: 'et, da fasdfd fconsectetur adipiscing elit. Integer sed quam nibh. Etiam ac tellus imperdiet, vestibulum nibh vitae, lobortis tellus. Nunc gravida efficitur nulla id ullamcorper. Vivamus at leo interdum, rhoncus nisi at, malesuada lacus. Quisque semper non augue a iaculis. Quisque a nisl velit. Nulla magna urna, laoreet sit amet lorem non, porttitor congue justo. Phasellus fermentum vulputate sem, pharetra tristique neque auctor at. Aliquam eleifend nibh ut mattis dignissim. Sed tempus nec tellus quis porta. Mauris id egestas massa. Etiam fringilla, est egestas ultrices vestibulum, ligula metus cursus massa, vitae imperdiet purus nunc id urna. Duis ipsum odio, iaculis eu viverra a, rhoncus posuere dui. Nulla quam nisl, pulvinar malesuada finibus et, rutrum in diam. Sed viverra eros quis hendrerit convallis.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }

        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}