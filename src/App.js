import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";
import ShopPage from "./pages/ShopPage/shop.component";
import Navigation from "./components/Navigation/navigation.component";
import SignInPage from "./pages/SignInPage/signinpage.component";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import CheckoutPage from "./pages/CheckoutPage/checkout.component";
import MainPage from "./pages/MainPage/MainPage.component";

class App extends React.Component {
	unsubscribeFromAuth = null;
	componentDidMount() {
		const { checkUserSession } = this.props;

		checkUserSession();
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
					<Route exact path="/" component={MainPage} />
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
	checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
