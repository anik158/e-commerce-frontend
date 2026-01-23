import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductList from './components/products/ProductList';
import { axiosRequest } from './helpers/config';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       const fectchProducts = async () => {
           try{
               const response = await axiosRequest.get('products');

                console.log(response.data);
        
                setProducts(response.data.data);
                setColors(response.data.colors);
                setSizes(response.data.sizes);
           }catch(e){
               console.log(e);
           }
       }

       fectchProducts();
    },[])


    return (
        <>
            <div className="Home">
                <ProductList products={products} colors={colors} sizes={sizes}/>
            </div>
        </>
    )
}

export default Home;