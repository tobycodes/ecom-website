import React from 'react';
import './_category-preview.styles.scss'
import CategoryItem from '../CategoryItem/category-item.component';

const CategoryPreview = ({title, items}) => {

    return (
        <div className='category__preview'>
            <h3 className='category__preview-title'>{title.toUpperCase()}</h3>
            <div  className='category__preview-body'>
                {items.filter((item, index) => index < 4)
                    .map(item =>  (
                        <CategoryItem key={item.id} item={item} />
                    )
                )}
            </div>
            
        </div>
        
    );
}

export default CategoryPreview;