import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import P from 'prop-types';

import App_Text from './App_Text';
import { Fonts, Colors } from '../../Themes';

const propTypes = {
    type: P.string,
    text: P.string.isRequired,
    onPress: P.func,
    style: P.shape({}),
};

const defaultProps = {
    onPress: () => {},
    style: {},
    disabled: false,
    color: '#222',
};

export default App_Button = ({
    text,
    onPress,
    style,
    textStyle,
    disabled,
    color,
    isPending,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ ...buttonStyle, ...style }}
            activeOpacity={0.5}
            disabled={disabled}
        >
            {isPending ? (
                <ActivityIndicator color="#fff" size="small" />
            ) : (
                <App_Text value={text} style={textStyle} color={color} isBold />
            )}
        </TouchableOpacity>
    );
};

App_Button.propTypes = propTypes;
App_Button.defaultProps = defaultProps;

const buttonStyle = {
    alignItems: 'center',
    justifyContent: 'center',
};
