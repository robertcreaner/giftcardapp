import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../Containers/HomeScreen';
import MerchantsScreen from '../Containers/MerchantsScreen';
import Transitions from './Transitions';

const AppNav = createStackNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            },
        },
        MerchantsScreen: {
            screen: MerchantsScreen,
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        headerMode: 'screen',
        initialRouteName: 'HomeScreen',
        transitionConfig: nav => Transitions(nav),
    },
);

export default AppNav;
