import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ products,colors, sizes}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} colors={colors}  sizes={sizes}/>
      ))}
    </div>
  );
};

export default ProductList;