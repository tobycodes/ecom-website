import React from 'react';
import SHOP_DATA from './shopdata';
import './_shop.styles.scss'
import CategoryPreview from '../../components/CategoryPreview/category-preview.component';


class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: SHOP_DATA
        }
    }

    render() {
        const { categories } = this.state;
        return (
            <div className='shop'>
                <h1 className='title'>Collections</h1>
                {categories.map(({id, title, items}) => (<CategoryPreview key={id} title={title} items={items} /> ))}
                 
            </div>
        );
    }
}

export default ShopPage;