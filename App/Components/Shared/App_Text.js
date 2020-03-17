import React from 'react';
import P from 'prop-types';
import { Text } from 'react-native';

import { Fonts, Colors } from '../../Themes';

const propTypes = {
    type: P.string,
    color: P.string,
    size: P.number,
    value: P.string,
    isBold: P.bool,
    style: P.shape({}),
    numberOfLines: P.number,
    fontFamily: P.string,
    onPress: P.func,
};

const defaultProps = {
    value: '',
    type: 'default',
    isBold: false,
    style: {},
    color: Colors.buttonText,
    fontFamily: 'OpenSans',
    numberOfLines: 1,
    onPress: null,
};

export default App_Text = ({
    type,
    value,
    color,
    size,
    isBold,
    style,
    numberOfLines,
    fontFamily,
    onPress,
}) => {
    if (type === 'default') {
        return (
            <Text
                style={{
                    fontFamily: isBold ? 'OpenSansBold' : fontFamily,
                    fontSize: size ? size : 14,
                    color: color ? color : Colors.text,
                    ...style,
                }}
                onPress={onPress}
                numberOfLines={numberOfLines}
                ellipsizeMode="tail"
            >
                {value}
            </Text>
        );
    }
    if (type === 'validation') {
        return (
            <Text
                style={{
                    fontFamily: isBold ? 'OpenSansBold' : fontFamily,
                    fontSize: size ? size : 14,
                    fontSize: 14,
                    color: color ? color : Colors.bloodRed,
                    ...style,
                }}
            >
                {value}
            </Text>
        );
    }
};

App_Text.propTypes = propTypes;
App_Text.defaultProps = defaultProps;
