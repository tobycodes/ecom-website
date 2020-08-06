import userActionTypes from "./user.types";

const INITIAL_STATE = {
	currentUser: null,
	error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case userActionTypes.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: "",
			};
		case userActionTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: "",
			};
		case userActionTypes.SIGN_IN_FAILURE:
		case userActionTypes.SIGN_OUT_FAILURE:
			return {
				...state,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default userReducer;
