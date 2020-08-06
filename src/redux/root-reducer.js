import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducers";
import cartReducer from "./cart/cart.reducers";
import { homepageReducer } from "./homepage/homepage.reducers";
import { shopReducer } from "./shop/shop.reducers";

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart", "shop"],
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: homepageReducer,
	shop: shopReducer,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

export default persistedRootReducer;
