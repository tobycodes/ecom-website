import React from "react";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./_shop.styles.scss";

import CollectionView from "../../components/CollectionView/collection-view.component";
import CollectionPage from "../CollectionPage/collection.component";

import { connect } from "react-redux";
import WithSpinner from "../../components/WithSpinner/with-spinner.component";
import {
	selectIsFetching,
	selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selectors";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const CollectionViewWithSpinner = WithSpinner(CollectionView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStart } = this.props;
		fetchCollectionsStart();
	}

	render() {
		const { match, isFetching, isCollectionsLoaded } = this.props;

		return (
			<div className="shop">
				<Route
					exact
					path={`${match.path}`}
					render={(props) => (
						<CollectionViewWithSpinner isLoading={isFetching} {...props} />
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={(props) => (
						<CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

const mapStateToProps = createStructuredSelector({
	isFetching: selectIsFetching,
	isCollectionsLoaded: selectIsCollectionsLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
