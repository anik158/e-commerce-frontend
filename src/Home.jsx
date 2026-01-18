import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
       const fectchProducts = async () => {
           try{
               const response = await axios.get('http://e-commerce-laravel.test/api/products');
               console.log("response is", response.data);
           }catch(e){
               console.log(e);
           }
       }

       fectchProducts();
    })
    return (
        <>
            <div className="Home">
                Home
            </div>
        </>
    )
}

export default Home;