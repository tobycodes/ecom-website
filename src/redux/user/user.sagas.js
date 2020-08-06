import { put, takeLatest, takeEvery, all, call } from "redux-saga/effects";
import userActionTypes from "./user.types";
import {
	auth,
	googleProvider,
	createUserProfile,
	getCurrentUser,
} from "../../firebase/firebase.utils";
import {
	signInSuccess,
	signInFailure,
	signOutSuccess,
	signOutFailure,
	signUpFailure,
	signUpSuccess,
} from "./user.actions";

export function* signInWithAuth(userAuth, additionalData) {
	try {
		const userRef = yield call(createUserProfile, userAuth, additionalData);
		const userSnapshot = yield userRef.get();

		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		yield call(signInWithAuth, user);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* signInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		yield call(signInWithAuth, user);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
		yield signInWithAuth(userAuth);
	} catch (error) {
		yield put(signInFailure(error.message));
	}
}

export function* signOutUser() {
	try {
		yield auth.signOut();
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailure());
	}
}

export function* signUpUser({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);
		yield put(signUpSuccess({ user, additionalData: displayName }));
	} catch (error) {
		yield signUpFailure(error);
	}
}

export function* signInAfterSignUp({ user, additionalData }) {
	yield signInWithAuth(user, additionalData);
}

export function* watchUserAuthentication() {
	yield takeEvery(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* watchGoogleSignInStart() {
	yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* watchEmailSignInStart() {
	yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* watchSignOutStart() {
	yield takeLatest(userActionTypes.SIGN_OUT_START, signOutUser);
}

export function* watchSignUpStart() {
	yield takeLatest(userActionTypes.SIGN_UP_START, signUpUser);
}

export function* watchSignUpSuccess() {
	yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSaga() {
	yield all([
		call(watchUserAuthentication),
		call(watchGoogleSignInStart),
		call(watchEmailSignInStart),
		call(watchSignOutStart),
		call(watchSignUpStart),
		call(watchSignUpSuccess),
	]);
}
