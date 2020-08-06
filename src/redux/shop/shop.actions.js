const { shopActionTypes } = require("./shop.types");

export const fetchCollectionsStart = () => ({
	type: shopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsObject) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsObject,
});

export const fetchCollectionsFailure = (errorMessage) => ({
	type: shopActionTypes.FETCH_COLLECTIONS_FAIL,
	payload: errorMessage,
});
