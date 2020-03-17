import React, { Component } from 'react';
import { View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { connect } from 'react-redux';

import AppNavigation from '../Navigation/AppNavigation';
import { imagesArray } from '../Themes/Images';
import fonts from '../Themes/Fonts';

console.disableYellowBox = true;

class RootContainer extends Component {
    state = {
        isReady: false,
    };

    appSetup = async () => {
        const {} = this.props;
        await Promise.all([
            Font.loadAsync(fonts.fonts),
            Asset.loadAsync(imagesArray),
        ]).then(() => {
            this.setState({ isReady: true });
        });
    };

    render() {
        const { isReady } = this.state;
        const {} = this.props;

        if (!isReady) {
            return (
                <AppLoading
                    startAsync={this.appSetup}
                    onFinish={() => this.setState({ isReady: true })}
                    onError={console.warn}
                />
            );
        }
        return (
            <View style={{ flex: 1 }}>
                <AppNavigation />
            </View>
        );
    }
}

const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => ({});

export default ConnectedRootContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootContainer);
