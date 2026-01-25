import React from "react";

const ProductItem = ({ product, colors, sizes }) => {
    return (
        <a className="flex flex-col bg-white border border-gray-200 shadow-md rounded-xl hover:shadow-lg overflow-hidden  focus:outline-none transition" href="#">
            <img
                className="w-full h-64 object-cover"
                src={product.first_image}
                alt={product.name}
            />

            <div className="p-4 md:p-5">
                
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
                    <h3 className="text-lg font-bold bg-red-300 p-2 rounded-2xl text-gray-800">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(product.price)}
                    </h3>
                </div>

              
                <div className="flex items-center justify-between mb-3">
                    <div className="flex gap-2">
                        {sizes?.map((s) => (
                            <span
                                key={s.id}
                                className="px-2 py-1 text-sm bg-gray-100 rounded-md"
                            >
                                {s.name}
                            </span>
                        ))}
                    </div>
                    <span
                        className={`px-2 py-1 text-sm rounded-md ${product.status === 1 ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
                            }`}
                    >
                        {product.status === 1 ? "Available" : "Unavailable"}
                    </span>
                </div>

                {/* Colors row */}
                <div className="flex gap-2">
                    {colors?.map((c) => (
                        <span
                            key={c.id}
                            className="px-2 py-1 text-sm bg-blue-100 rounded-md"
                        >
                            {c.name}
                        </span>
                    ))}
                </div>
            </div>
        </a>
    );
};

export default ProductItem;
