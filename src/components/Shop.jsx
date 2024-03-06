import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from "./ProductCard";
import styles from "../styling/Shop.module.css"





const Shop =() => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    setProductList(json);
                    console.log(json);
                })
                .catch(err => {console.error(err)});
    },[])

    return (
        <>
            <Navbar />
            <h1>Shop</h1>
            <div className={styles.productCardContainer}>
                {productList.map((product, index) => (
                    <ProductCard productInfo = {product}></ProductCard>
                ))}
            </div>
        </>
    )
}

export default Shop