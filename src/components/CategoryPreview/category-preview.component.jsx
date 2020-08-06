import React from "react";
import "./_category-preview.styles.scss";
import CategoryItem from "../CategoryItem/category-item.component";
import { withRouter } from "react-router-dom";

const CategoryPreview = ({ title, items, history, match }) => {
	return (
		<div className="category__preview">
			<h2
				className="category__preview-title"
				onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
			>
				{title.toUpperCase()}
			</h2>
			<div className="category__preview-body">
				{items
					.filter((item, index) => index < 4)
					.map((item) => (
						<CategoryItem key={item.id} item={item} />
					))}
			</div>
		</div>
	);
};

export default withRouter(CategoryPreview);
