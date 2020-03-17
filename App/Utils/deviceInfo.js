import { Platform, Dimensions, PixelRatio } from 'react-native';

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const headerHeight = (screenHeight / 100) * 10;
export const borderWidth = 1 / PixelRatio.get();
