import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductList from './components/products/ProductList';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       const fectchProducts = async () => {
           try{
               const response = await axios.get('http://e-commerce-laravel.test/api/products');
                setProducts(response.data.data);
                setColors(response.data.colors);
                setSizes(response.data.sizes);

                console.log(response.data.data);

           }catch(e){
               console.log(e);
           }
       }

       fectchProducts();
    })


    return (
        <>
            <div className="Home">
                <ProductList products={products}/>
            </div>
        </>
    )
}

export default Home;