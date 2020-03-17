import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    Keyboard,
    StyleSheet,
} from 'react-native';
import { Linking } from 'expo';

import App_Text from '../Shared/App_Text';

const getShoppingOptionDisplay = shoppingOption => {
    switch (shoppingOption) {
        case 'STORE': {
            return 'In-store';
        }
        case 'STORE_AND_ONLINE': {
            return 'In-store & Online';
        }
        case 'ONLINE': {
            return 'Online';
        }
        default: {
            return '';
        }
    }
};

export default ({ merchant, isHighlighted, highlightMerchant }) => {
    const {
        item: { name, image, minAmount, maxAmount, shoppingOption, website },
    } = merchant;
    return (
        <TouchableOpacity
            onPress={() => {
                Keyboard.dismiss();
                highlightMerchant(merchant);
            }}
            activeOpacity={0.8}
            style={[
                styles.cardContainer,
                {
                    backgroundColor: isHighlighted
                        ? 'rgba(139, 0, 0, 0.2)'
                        : '#f5f5f5',
                },
            ]}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={{ height: 80, width: 80, borderRadius: 5 }}
                />
            </View>
            <View style={{ flex: 9, marginLeft: 15 }}>
                <App_Text value={name} isBold size={16} />
                <App_Text value={getShoppingOptionDisplay(shoppingOption)} />
                <App_Text value={`$${minAmount} - $${maxAmount}`} />
                <App_Text
                    value={`View Website`}
                    color="#8b0000"
                    onPress={() => Linking.openURL(website)}
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 10,
    },
    imageContainer: {
        flex: 3,
        justifyContent: 'center',
    },
});
