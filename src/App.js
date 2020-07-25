import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import HomePage from "./pages/HomePage/homepage.component";
import ShopPage from "./pages/ShopPage/shop.component";
import Navigation from "./components/Navigation/navigation.component";
import { auth, createUserProfile } from "./firebase/firebase.utils";
import SignInPage from "./pages/SignInPage/signinpage.component";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/CheckoutPage/checkout.component";

class App extends React.Component {
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfile(userAuth);

				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}

			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		const { currentUser } = this.props;
		return (
			<div>
				<Navigation />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/signin" component={SignInPage}>
						{currentUser ? <Redirect to="/" /> : <SignInPage />}
					</Route>
					<Route exact path="/checkout" component={CheckoutPage} />
				</Switch>
			</div>
		);
	}
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
