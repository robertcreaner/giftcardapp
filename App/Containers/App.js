import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import createStore from '../Redux';
import { PersistGate } from 'redux-persist/integration/react';

import RootContainer from './RootContainer';

const { store, persistor } = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator size="large" color="red" />}
                    persistor={persistor}
                >
                    <RootContainer />
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
