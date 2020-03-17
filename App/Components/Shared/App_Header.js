import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';

import { headerHeight } from '../../Utils/deviceInfo';
import { Colors } from '../../Themes';

export default App_Header = ({
    backgroundColor,
    left,
    center,
    right,
    flex,
}) => (
    <View style={containerStyle} backgroundColor={backgroundColor}>
        <View style={{ flex: flex ? flex[0] : 2.25, alignItems: 'flex-start' }}>
            {left ? left : <View />}
        </View>
        <View
            style={{
                flex: flex ? flex[1] : 7.5,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            {center ? center : <View />}
        </View>
        <View style={{ flex: flex ? flex[2] : 2.25, alignItems: 'flex-end' }}>
            {right ? right : <View />}
        </View>
    </View>
);

const containerStyle = {
    flexDirection: 'row',
    height: headerHeight,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
};
