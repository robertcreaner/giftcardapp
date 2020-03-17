import {
    fromLeft,
    fromRight,
    fromTop,
    fromBottom,
} from 'react-navigation-transitions';

export default handleCustomTransition = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2];
    const nextScene = scenes[scenes.length - 1];
    // if (
    //     prevScene &&
    //     prevScene.route.routeName === 'HomeScreen' &&
    //     nextScene.route.routeName === 'SettingsScreen'
    // ) {
    //     return fromLeft();
    // } else if (
    //     prevScene &&
    //     prevScene.route.routeName === '' &&
    //     nextScene.route.routeName === ''
    // ) {
    //     return fromTop();
    // }
    return fromRight();
};
