import React from 'react';
import P from 'prop-types';
import { View, TextInput } from 'react-native';

import { Metrics, Colors } from '../../Themes';

const propTypes = {
    value: P.string,
    onChangeText: P.func,
    onFocus: P.func,
    onBlur: P.func,
    placeholder: P.string,
    autoCapitalize: P.string,
    autoCorrect: P.bool,
    secureTextEntry: P.bool,
    textContentType: P.string,
    keyboardType: P.string,
    returnKeyType: P.string,
    autoFocus: P.bool,
    showSecureTextEntryButton: P.bool,
};

const defaultProps = {
    value: '',
    onChangeText: () => {},
    onFocus: () => {},
    onBlur: () => {},
    placeholder: '',
    autoCapitalize: 'sentences',
    autoCorrect: false,
    textContentType: 'none',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'done',
    autoFocus: false,
    showSecureTextEntryButton: false,
};

export default App_TextInput = ({
    value,
    onChangeText,
    onChange,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    autoCorrect,
    name,
    onFocus,
    onBlur,
    borderColor,
    borderWidth,
    selectionColor,
    textContentType,
    keyboardType,
    secureTextEntry,
    toggleSecureTextEntry,
    showSecureTextEntryButton,
    clearButtonMode,
    returnKeyType,
    autoFocus,
    placeholderStyle,
    style,
}) => (
    <View>
        <TextInput
            style={{ ...inputStyle, ...style }}
            value={value}
            onChangeText={onChangeText}
            onChange={onChange}
            placeholder={placeholder}
            placeholderTextColor={
                placeholderTextColor ? placeholderTextColor : Colors.buttonText
            }
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            clearButtonMode={clearButtonMode}
            selectionColor={selectionColor}
            name={name}
            textContentType={textContentType}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry}
            returnKeyType={returnKeyType}
            autoFocus={autoFocus}
            placeholderStyle={placeholderStyle}
            style={style}
        />
    </View>
);

App_TextInput.propTypes = propTypes;
App_TextInput.defaultProps = defaultProps;

const inputStyle = {
    backgroundColor: Colors.secondaryBackground,
    color: Colors.buttonText,
    paddingHorizontal: Metrics.paddingHorizontal,
    height: 46,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: Metrics.baseMargin,
};
