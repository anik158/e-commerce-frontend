import React from "react";

const ProductItem = ({ product }) => {
    return (
        <div className="ProductItem">
            <h2>{product.name}</h2>
        </div>
    );
}

export default ProductItem;