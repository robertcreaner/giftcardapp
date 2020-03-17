export const addMerchant = (merchant, selectedMerchants) => {
    const isMerchantAlreadySelected = selectedMerchants.find(
        item => item.id === merchant.item.id,
    );
    if (!isMerchantAlreadySelected) {
        return [...selectedMerchants, merchant];
    }
    return selectedMerchants;
};

export const removeMerchant = (merchant, selectedMerchants) => {
    return selectedMerchants.filter(item => {
        return item.item.id !== merchant.item.item.id;
    });
};
