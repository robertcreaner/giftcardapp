import { Platform } from 'react-native';

const fonts =
    Platform.OS === 'ios'
        ? {
              OpenSans: require('../../Assets/Fonts/OpenSans-Regular.ttf'),
              OpenSansSemiBold: require('../../Assets/Fonts/OpenSans-SemiBold.ttf'),
              OpenSansBold: require('../../Assets/Fonts/OpenSans-Bold.ttf'),
          }
        : {
              OpenSans: require('../../Assets/Fonts/OpenSans-Regular.ttf'),
              OpenSansSemiBold: require('../../Assets/Fonts/OpenSans-SemiBold.ttf'),
              OpenSansBold: require('../../Assets/Fonts/OpenSans-Bold.ttf'),
          };

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 20,
    h6: 19,
    input: 18,
    large: 17,
    medium: 16,
    normal: 14,
    small: 12,
    tiny: 8.5,
    largeModal: 24,
};

export default {
    fonts,
    size,
};
