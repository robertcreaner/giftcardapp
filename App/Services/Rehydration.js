import ReduxPersist from '../Config/ReduxPersist';
import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

const updateReducers = (store: Object) => {
    const reducerVersion = ReduxPersist.reducerVersion;

    // Check to ensure latest reducer version
    AsyncStorage.getItem('reducerVersion')
        .then(localVersion => {
            if (localVersion !== reducerVersion) {
                persistStore(store, null).purge();
                AsyncStorage.setItem('reducerVersion', reducerVersion);
            } else {
                persistStore(store, null);
            }
        })
        .catch(() => {
            persistStore(store, null);
            AsyncStorage.setItem('reducerVersion', reducerVersion);
        });

    return persistStore(store, null);
};

export default { updateReducers };
