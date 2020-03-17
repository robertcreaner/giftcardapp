import { screenWidth } from './deviceInfo';

export const getCardHeight = (origWidth, origHeight) => {
    const widthChange = screenWidth / origWidth;
    return origHeight * widthChange;
};
