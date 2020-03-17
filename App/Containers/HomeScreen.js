import React, { Component } from 'react';
import P from 'prop-types';
import {
    View,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';

import App_Text from '../Components/Shared/App_Text';
import App_Header from '../Components/Shared/App_Header';
import App_Button from '../Components/Shared/App_Button';
import { Images } from '../Themes';
import { screenWidth, isIos } from '../Utils/deviceInfo';
import { removeMerchant } from '../Utils/merchants';
import { updateSelectedMerchants } from '../Redux/reducer';

const cardOriginalWidth = 640;
const cardOriginalHeight = 480;
const widthChange = screenWidth / cardOriginalWidth;
const cardHeight = cardOriginalHeight * widthChange;

class Home extends Component {
    constructor(props) {
        super(props);
        const {} = this.props;
    }

    renderSelectedMerchants = () => {
        const { selectedMerchants } = this.props;
        return (
            <FlatList
                data={selectedMerchants}
                ref={ref => {
                    this.flatListRef = ref;
                }}
                style={{ flex: 1 }}
                keyboardShouldPersistTaps="always"
                showsVerticalScrollIndicator={false}
                keyExtractor={item => item.item.id.toString()}
                removeClippedSubviews={!isIos}
                renderItem={this.renderMerchant}
            />
        );
    };

    renderMerchant = merchant => {
        const {
            item: { image, id },
        } = merchant.item;
        const { selectedMerchants, updateSelectedMerchants } = this.props;
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
                activeOpacity={0.5}
            >
                <Image
                    source={{ uri: image }}
                    style={{ height: 75, width: 75 }}
                />
                <App_Text
                    value="Remove"
                    onPress={() => {
                        const merchants = removeMerchant(
                            merchant,
                            selectedMerchants,
                        );
                        updateSelectedMerchants(merchants);
                    }}
                    color="#8b0000"
                    style={{ marginLeft: 10 }}
                />
            </View>
        );
    };

    render() {
        const { navigation, selectedMerchants } = this.props;
        return (
            <View style={{ flex: 1, backgroundColor: '#f5f5f5' }}>
                <App_Header center={<App_Text value="Home Screen" />} />
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                            source={Images.card}
                            resizeMode="contain"
                            style={styles.cardStyle}
                        />
                    </View>
                    <View
                        style={{
                            marginTop: 40,
                            marginHorizontal: 30,
                        }}
                    >
                        {selectedMerchants && selectedMerchants.length > 0 ? (
                            <View style={{ marginBottom: 30 }}>
                                <App_Text
                                    value="Selected Merchants"
                                    isBold
                                    size={16}
                                    style={{ marginBottom: 20 }}
                                />
                                {this.renderSelectedMerchants()}
                            </View>
                        ) : (
                            <View style={{ marginBottom: 30 }}>
                                <App_Text
                                    value="Select Merchant"
                                    isBold
                                    size={16}
                                />
                                <App_Text
                                    value="Recipient will choose any partner merchant."
                                    style={{
                                        marginVertical: 20,
                                    }}
                                />
                            </View>
                        )}
                        <View>
                            <App_Button
                                text="SELECT MERCHANT"
                                onPress={() =>
                                    navigation.navigate({
                                        key: 'MerchantsScreen',
                                        routeName: 'MerchantsScreen',
                                    })
                                }
                                style={styles.btnStyle}
                            />
                        </View>
                    </View>
                    <View style={{ height: 40, width: screenWidth }} />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        height: cardHeight,
        width: screenWidth,
    },
    btnStyle: {
        borderColor: '#222',
        borderWidth: 1,
        width: screenWidth - 60,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
});

const mapStateToProps = ({ reducer: { selectedMerchants } }) => ({
    selectedMerchants,
});

const mapDispatchToProps = dispatch => ({
    updateSelectedMerchants: data => dispatch(updateSelectedMerchants(data)),
});

export default ConnectedHomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(Home);
