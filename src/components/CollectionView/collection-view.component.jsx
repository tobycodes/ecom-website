import React from "react";
import { createStructuredSelector } from "reselect";

import "./_collection-view.styles.scss";

import CategoryPreview from "../CategoryPreview/category-preview.component";
import { selectOverviewCollection } from "../../redux/shop/shop.selectors";
import { connect } from "react-redux";

const CollectionView = ({ collections }) => (
	<div className="collection">
		<h1 className="title">Collections</h1>
		{collections.map(({ id, title, items }) => (
			<CategoryPreview key={id} title={title} items={items} />
		))}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectOverviewCollection,
});

export default connect(mapStateToProps)(CollectionView);
