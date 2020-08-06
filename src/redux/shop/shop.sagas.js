import { takeEvery, put, call } from "redux-saga/effects";
import { shopActionTypes } from "./shop.types";
import {
	firestore,
	retrieveConvertCollections,
} from "../../firebase/firebase.utils";
import {
	fetchCollectionsSuccess,
	fetchCollectionsFailure,
} from "./shop.actions";

export function* fetchCollectionsStartAsync() {
	try {
		const collectionRef = firestore.collection("collections");
		const snapshot = yield collectionRef.get();
		const collectionsObject = yield call(retrieveConvertCollections, snapshot);

		yield put(fetchCollectionsSuccess(collectionsObject));
	} catch (error) {
		yield put(fetchCollectionsFailure(error));
	}
}

export function* watchFetchCollectionsStart() {
	yield takeEvery(
		shopActionTypes.FETCH_COLLECTIONS_START,
		fetchCollectionsStartAsync
	);
}

export function* shopSagas() {
	yield all[call(watchFetchCollectionsStart)];
}
