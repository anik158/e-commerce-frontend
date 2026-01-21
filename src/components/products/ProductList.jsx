import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
    return (
        <div className="ProductList">
            {products?.map((product) => {
                return <ProductItem key={product.id} product={product} />;
            })}
        </div>
    );
};

export default ProductList;