// leave off @2x/@3x
const images = {
    logo: require('../../Assets/Images/logo.png'),
    card: require('../../Assets/Images/card.png'),
    back: require('../../Assets/Images/Icons/back.png'),
};

export default images;

export const imagesArray = Object.keys(images).map(k => images[k]);
