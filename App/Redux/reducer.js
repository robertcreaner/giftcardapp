const MERCHANTS_PENDING = 'MERCHANTS_PENDING';
const MERCHANTS_SUCCESS = 'MERCHANTS_SUCCESS';
const MERCHANTS_ERROR = 'MERCHANTS_ERROR';
const UPDATE_MERCHANTS = 'UPDATE_MERCHANTS';
const UPDATE_SELECTED_MERCHANTS = 'UPDATE_SELECTED_MERCHANTS';

export const fetchMerchantsRequest = () => ({
    type: MERCHANTS_PENDING,
});

export const fetchMerchantsSuccess = data => ({
    type: MERCHANTS_SUCCESS,
    payload: data,
});

export const fetchMerchantsError = data => ({
    type: MERCHANTS_ERROR,
    payload: data,
});

export const updateMerchants = data => ({
    type: UPDATE_MERCHANTS,
    payload: data,
});

export const updateSelectedMerchants = data => ({
    type: UPDATE_SELECTED_MERCHANTS,
    payload: data,
});

const defaultState = {
    merchants: [],
    initialMerchants: [],
    selectedMerchants: [],
    fetchMerchantsPending: false,
    fetchMerchantsSuccess: false,
    fetchMerchantsError: false,
    fetchMerchantsErrorStr: null,
};

const reducer = (state = defaultState, { type, payload } = {}) => {
    switch (type) {
        case MERCHANTS_PENDING:
            return {
                ...state,
                fetchMerchantsPending: true,
                fetchMerchantsSuccess: false,
                fetchMerchantsError: false,
            };
        case MERCHANTS_SUCCESS:
            return {
                ...state,
                merchants: payload,
                initialMerchants: payload,
                fetchMerchantsPending: false,
                fetchMerchantsSuccess: true,
                fetchMerchantsError: false,
            };
        case MERCHANTS_ERROR:
            return {
                ...state,
                fetchMerchantsPending: false,
                fetchMerchantsSuccess: false,
                fetchMerchantsError: true,
                fetchMerchantsErrorStr: payload,
            };
        case UPDATE_MERCHANTS:
            return {
                ...state,
                merchants: payload,
            };
        case UPDATE_SELECTED_MERCHANTS:
            return {
                ...state,
                selectedMerchants: payload,
            };
        default:
            return state;
    }
};

export default reducer;
