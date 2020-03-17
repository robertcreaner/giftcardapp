import React from 'react';
import P from 'prop-types';
import { View } from 'react-native';

import App_Text from '../../Components/Shared/App_Text';
import App_TextInput from '../../Components/Shared/App_TextInput';
import { Fonts, Colors } from '../../Themes';

const propTypes = {
    value: P.string,
    title: P.string,
    onChangeText: P.func,
    placeholder: P.string,
    autoCapitalize: P.string,
    autoCorrect: P.bool,
    secureTextEntry: P.bool,
    textContentType: P.string,
    keyboardType: P.string,
    returnKeyType: P.string,
    titleColor: P.string,
    validationText: P.string,
    borderColor: P.string,
    isValidInput: P.bool,
    autoFocus: P.bool,
    showSecureTextEntryButton: P.bool,
};

const defaultProps = {
    value: '',
    title: null,
    onChangeText: () => {},
    placeholder: '',
    autoCapitalize: 'none',
    autoCorrect: false,
    textContentType: 'none',
    keyboardType: 'default',
    secureTextEntry: false,
    returnKeyType: 'done',
    validationText: '',
    borderColor: Colors.secondaryBackground,
    titleColor: Colors.buttonText,
    isValidInput: true,
    autoFocus: false,
    showSecureTextEntryButton: false,
};

const App_FormInput = ({
    value,
    title,
    onChangeText,
    placeholder,
    placeholderTextColor,
    autoCapitalize,
    autoCorrect,
    onFocus,
    onBlur,
    isValidInput,
    borderColor,
    textContentType,
    keyboardType,
    secureTextEntry,
    toggleSecureTextEntry,
    showSecureTextEntryButton,
    clearButtonMode,
    returnKeyType,
    validationText,
    autoFocus,
    style,
    titleColor,
}) => (
    <View>
        {title !== '' && (
            <App_Text value={title} style={{ marginVertical: 12 }} isBold />
        )}
        <App_TextInput
            value={value}
            onChangeText={text => onChangeText(text)}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            autoCapitalize={autoCapitalize}
            autoCorrect={autoCorrect}
            autoFocus={autoFocus}
            borderWidth={2}
            borderColor={borderColor}
            selectionColor="#000"
            textContentType={textContentType}
            keyboardType={keyboardType}
            clearButtonMode={clearButtonMode}
            returnKeyType={returnKeyType}
            secureTextEntry={secureTextEntry}
            toggleSecureTextEntry={toggleSecureTextEntry}
            showSecureTextEntryButton={showSecureTextEntryButton}
            style={style}
        />
        {!isValidInput && (
            <App_Text
                type="validation"
                value={validationText}
                style={{ marginLeft: 5 }}
            />
        )}
    </View>
);

App_FormInput.propTypes = propTypes;
App_FormInput.defaultProps = defaultProps;

export default App_FormInput;
