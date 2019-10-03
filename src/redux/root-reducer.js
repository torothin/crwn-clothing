import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from '../redux/directory/directory.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], // dont need user cause handled by auth
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);