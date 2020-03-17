import React from 'react';
import P from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';

import { Metrics, Colors } from '../../Themes';
import App_Text from './App_Text';

const propTypes = {
    type: P.string.isRequired,
    text: P.string,
    textColor: P.string,
    image: P.number,
    icon: P.string,
    iconColor: P.string,
    imageColor: P.string,
    onPress: P.func,
};

const defaultProps = {
    text: '',
    textColor: Colors.text,
    image: null,
    icon: '',
    iconColor: '#fff',
    imageColor: Colors.buttonText,
    onPress: () => {},
};

export default App_HeaderButton = ({
    type,
    text,
    textColor,
    image,
    imageColor,
    onPress,
    style,
}) => {
    if (type === 'text') {
        return (
            <TouchableOpacity onPress={onPress} style={{ padding: 5 }}>
                <App_Text value={text} color={textColor} style={style} />
            </TouchableOpacity>
        );
    }
    if (type === 'image') {
        return (
            <TouchableOpacity onPress={onPress} style={{ padding: 5 }}>
                <Image source={image} style={{ tintColor: imageColor }} />
            </TouchableOpacity>
        );
    }
};

App_HeaderButton.propTypes = propTypes;
App_HeaderButton.defaultProps = defaultProps;
