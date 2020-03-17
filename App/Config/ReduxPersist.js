// import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform';
import { AsyncStorage } from 'react-native';
import {
    createFilter,
    createBlacklistFilter,
} from 'redux-persist-transform-filter';

// store only a subset of your state of reducer one
const filter = createFilter('reducer', ['selectedMerchants']);

// remove some keys before you save
// const saveUserBlacklistFilter = createBlacklistFilter('userReducer', [
//     'account',
// ]);

// More info here:  https://shift.infinite.red/shipping-persistant-reducers-7341691232b1
// https://blog.reactnativecoach.com/the-definitive-guide-to-redux-persist-84738167975
const REDUX_PERSIST = {
    active: true,
    reducerVersion: '1',
    storeConfig: {
        key: 'primary',
        storage: AsyncStorage,
        // whitelist: [],
        transforms: [filter],
    },
};

export default REDUX_PERSIST;
