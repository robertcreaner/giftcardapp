import { createStore, applyMiddleware, compose } from 'redux';
import Rehydration from '../Services/Rehydration';
import ReduxPersist from '../Config/ReduxPersist';
import createSagaMiddleware from 'redux-saga';
// import ScreenTracking from './ScreenTrackingMiddleware';

// creates the store
export default (rootReducer, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- Analytics Middleware ------------- */
    // middleware.push(ScreenTracking);

    /* ------------- Saga Middleware ------------- */

    const sagaMonitor = null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const createAppropriateStore = createStore;
    const store = createAppropriateStore(rootReducer, compose(...enhancers));
    let persistor;

    // configure persistStore and check reducer version number
    if (ReduxPersist.active) {
        persistor = Rehydration.updateReducers(store);
    }

    // kick off root saga
    let sagasManager = sagaMiddleware.run(rootSaga);

    return {
        store,
        sagasManager,
        sagaMiddleware,
        persistor,
    };
};
