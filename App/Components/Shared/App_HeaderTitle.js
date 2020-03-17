import React from 'react';
import P from 'prop-types';
import { View } from 'react-native';

import App_Text from './App_Text';
import { Fonts, Colors } from '../../Themes';

const propTypes = {
    text: P.string,
    size: P.number,
    color: P.string,
};

const defaultProps = {
    text: '',
    color: Colors.buttonText,
};

export default App_HeaderTitle = ({ text, color, size }) => (
    <View style={[containerStyle]}>
        <App_Text
            value={text}
            color={color}
            size={size}
            numberOfLines={1}
            isBold
        />
    </View>
);

App_HeaderTitle.propTypes = propTypes;
App_HeaderTitle.defaultProps = defaultProps;

const containerStyle = {
    justifyContent: 'center',
    alignItems: 'center',
};
