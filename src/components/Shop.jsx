import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProductCard from "./ProductCard";
import styles from "../styling/Shop.module.css"
import PropTypes from 'prop-types';





const Shop =() => {
    const [productList, setProductList] = useState([]);

    const [cartArray, setCartArray] = useState(
        () => {
        const localValue = localStorage.getItem("cartArray");
        if(localValue === null) return [];
        return JSON.parse(localValue);
    })

    const [loading, setLoading] = useState(true);
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
                })
                .catch(err => {console.error(err)})
                .finally(() => setLoading(false));
    },[]);

    const handleAddToCart = (id, price, quantity, title) => {
        setCartArray(currentArray => {
            const numericQuantity = Number(quantity);
            const itemIndex = currentArray.findIndex(item => item.id === id)
            if (itemIndex === -1) return [...currentArray, {id: id, title: title, price: price, quantity: numericQuantity, }]
            
            const newQuantity = currentArray[itemIndex].quantity + numericQuantity;

            currentArray[itemIndex] = {id: id, title: title, price: price, quantity: newQuantity};
            const newArray = [...currentArray]
            return newArray;
        })
    }

    const handleToggleCart = () => {
        setCartOpen(!cartOpen);
    }

    const handleDeleteCart =(id) => {
        setCartArray(currentArray => {
            const newArray = currentArray.filter(item => item.id !== id);
            console.log(currentArray);
            console.log(newArray);
            return newArray;
        })
    }


    return (
        <>
            <Navbar handleToggleCart={handleToggleCart} qty={qty} hasCart ={true}/>
            {
                cartOpen && (
                    cartArray.length === 0 ?
                    (
                        <p>Cart is empty!</p>
                    ):(
                        <div id="cartContainer" >
                            <ul>
                                {cartArray.map(item => (
                                    <li>
                                        <p>
                                            {item.title} ${item.price} QTY: {item.quantity}
                                            <button onClick={() => handleDeleteCart(item.id)}>Delete</button>
                                        </p>
                                    </li>
                                ))}
                            </ul>
                            <button>Go to Checkout!</button>
                        </div>
                    )

                )
            }
            <h1>Shop</h1>
            {loading ? (
                <p>Loading...</p>
            ):(
                <div className={styles.productCardContainer}>
                    {productList.map((product, index) => (
                        <ProductCard
                            productInfo = {product}
                            handleAddToCart = {handleAddToCart}
                        ></ProductCard>
                    ))}
                </div>
            )
            }
        </>
    )
}

export default Shop