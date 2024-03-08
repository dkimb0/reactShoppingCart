import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from "./ProductCard";
import styles from "../styling/Shop.module.css"





const Shop =() => {
    const [productList, setProductList] = useState([]);

    const [cartArray, setCartArray] = useState(
    //     () => {
    //     const localValue = localStorage.getItem("cartArray");
    //     if(localValue === null) return [];
    //     return JSON.parse(localValue);
    // }
    []
    )

    const [cartOpen, setCartOpen] = useState(false);

    let qty = cartArray.map(item => {
        return item.quantity;
    }).reduce((total, current) => {
        return total + current
    }, 0)
    
    useEffect(() => {
        localStorage.setItem('cartArray', JSON.stringify(cartArray))
    }, [cartArray]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=>{
                    setProductList(json);
                    console.log(json);
                })
                .catch(err => {console.error(err)});
    },[]);

    const handleAddToCart = (id, price, quantity, title) => {
        setCartArray(currentArray => {
            const itemIndex = currentArray.findIndex(item => item.id === id)
            if (itemIndex === -1) return [...currentArray, {id: id, title: title, price: price, quantity: quantity, }]
            
            const newQuantity = currentArray[itemIndex].quantity + quantity;
            currentArray[itemIndex] = {id: id, title: title, price: price, quantity: newQuantity};
            const newArray = [...currentArray]
            return newArray;
        })
    }

    const handleToggleCart = () => {
        if(cartOpen){
            setCartOpen(false);
            document.getElementById('cartContainer').style.display = 'none';
        }else{
            setCartOpen(true);
            document.getElementById('cartContainer').style.display = 'block';
        }
    }

    return (
        <>
            <Navbar />
            <button onClick={handleToggleCart}>Cart ({qty})</button>
            <div id="cartContainer" style={{display: "none"}}>
                <ul>
                    {cartArray.map(item => (
                        <li>
                            <p>
                                {item.title} ${item.price} QTY: {item.quantity}

                            </p>
                        </li>
                    ))}
                </ul>
            </div>
            <h1>Shop</h1>
            <div className={styles.productCardContainer}>
                {productList.map((product, index) => (
                    <ProductCard
                        productInfo = {product}
                        handleAddToCart = {handleAddToCart}
                    ></ProductCard>
                ))}
            </div>
        </>
    )
}

export default Shop