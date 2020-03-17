import React, { Component } from 'react';
import P from 'prop-types';
import { View, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';

import App_Text from '../Components/Shared/App_Text';
import App_Header from '../Components/Shared/App_Header';
import App_FormInput from '../Components/Shared/App_FormInput';
import App_HeaderButton from '../Components/Shared/App_HeaderButton';
import App_Button from '../Components/Shared/App_Button';
import { Images } from '../Themes';
import { isIos, screenWidth } from '../Utils/deviceInfo';
import {
    fetchMerchantsRequest,
    updateMerchants,
    updateSelectedMerchants,
} from '../Redux/reducer';
import search from '../Utils/search';
import Card from '../Components/Merchants/Card';
import { addMerchant } from '../Utils/merchants';

class MerchantsScreen extends Component {
    static propTypes = {
        fetchMerchantsPending: P.bool,
    };
    static defaultProps = {
        fetchMerchantsPending: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            merchantInput: '',
            merchantSelected: null,
        };
        const { getMerchants } = this.props;
        getMerchants();
    }

    handleOnChangeText = text => {
        this.setState({ merchantInput: text });
        const data = search(this.props.initialMerchants, text);
        this.props.updateMerchants(data);
    };

    renderMerchant = merchant => {
        const { merchantSelected } = this.state;
        const merchantId = merchantSelected && merchantSelected.item.id;
        return (
            <Card
                merchant={merchant}
                isHighlighted={merchant.item.id === merchantId}
                highlightMerchant={merchant =>
                    this.setState({ merchantSelected: merchant })
                }
            />
        );
    };

    handleSelectMerchant = () => {
        const { merchantSelected } = this.state;
        const {
            selectedMerchants,
            updateSelectedMerchants,
            navigation,
        } = this.props;
        const merchants = addMerchant(merchantSelected, selectedMerchants);
        updateSelectedMerchants(merchants);
        navigation.goBack();
    };

    render() {
        const {
            navigation,
            getMerchants,
            merchants,
            fetchMerchantsPending,
        } = this.props;
        const { merchantInput, merchantSelected } = this.state;

        return (
            <View style={styles.bodyStyle}>
                <App_Header
                    left={
                        <App_HeaderButton
                            type="image"
                            image={Images.back}
                            onPress={() => navigation.goBack()}
                        />
                    }
                    center={<App_Text value="Merchants Screen" />}
                />
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={merchants}
                        ref={ref => {
                            this.flatListRef = ref;
                        }}
                        style={{ flex: 1 }}
                        initialScrollIndex={0}
                        keyboardShouldPersistTaps="always"
                        showsVerticalScrollIndicator={false}
                        keyExtractor={item => item.id.toString()}
                        removeClippedSubviews={!isIos}
                        renderItem={this.renderMerchant}
                        ListHeaderComponent={
                            <View style={{ marginTop: 10, marginBottom: 20 }}>
                                <App_FormInput
                                    title=""
                                    value={merchantInput}
                                    onChangeText={this.handleOnChangeText}
                                    placeholder="Search merchants"
                                    style={styles.inputStyle}
                                />
                            </View>
                        }
                        onRefresh={() => getMerchants()}
                        refreshing={fetchMerchantsPending}
                    />
                    <View style={{ width: screenWidth, height: 30 }} />
                </View>
                <View>
                    <App_Button
                        text="CANCEL"
                        onPress={() => navigation.goBack()}
                        style={{ ...styles.btnStyle, ...{ marginBottom: 15 } }}
                    />
                    <App_Button
                        text="SELECT"
                        disabled={!merchantSelected}
                        onPress={() => this.handleSelectMerchant()}
                        textStyle={{ color: '#fff' }}
                        color="#fff"
                        style={{
                            ...styles.btnStyle,
                            ...{
                                marginBottom: 30,
                                backgroundColor: '#8b0000',
                                borderWidth: 0,
                                opacity: merchantSelected ? 1 : 0.5,
                            },
                        }}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyStyle: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 15,
    },
    btnStyle: {
        borderColor: '#222',
        borderWidth: 1,
        width: screenWidth - 30,
        height: 40,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    inputStyle: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#e3e3e3',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
});

const mapStateToProps = ({
    reducer: {
        merchants,
        initialMerchants,
        fetchMerchantsPending,
        selectedMerchants,
    },
}) => ({
    merchants,
    initialMerchants,
    fetchMerchantsPending,
    selectedMerchants,
});

const mapDispatchToProps = dispatch => ({
    getMerchants: () => dispatch(fetchMerchantsRequest()),
    updateMerchants: data => dispatch(updateMerchants(data)),
    updateSelectedMerchants: data => dispatch(updateSelectedMerchants(data)),
});

export default ConnectedHomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps,
)(MerchantsScreen);
