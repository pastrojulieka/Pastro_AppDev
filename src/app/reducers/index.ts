import { applyMiddleware, combineReducers, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

import auth from '../reducers/auth';
import { productReducer } from '../reducers/product';
import rootSaga from '../sagas';

// Config
const sagaMiddleware = createSagaMiddleware();
const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['authentication'],
};

const authPersistConfig = {
  key: 'authentication',
  storage: AsyncStorage,
  whitelist: ['data'], // Only persist user data, not loading/error states
};

// Combine Reducers
const rootReducer = combineReducers({
  authentication: persistReducer(authPersistConfig, auth),
  product: productReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

// Create Store
export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

// Run Saga
sagaMiddleware.run(rootSaga);

// Persistor
export const persistor = persistStore(store);