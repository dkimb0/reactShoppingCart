import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../styling/ProductCard.module.css"

const ProductCard = ({ productInfo, handleAddToCart }) => {

    const [quantity, setQuantity] = useState(1);


    return (
        <div className={styles.productCard}>
            <div className={styles.imageContainer}>
                <img className={styles.productImage} src={productInfo.image} alt="placeholder" />
            </div>
            <div className={styles.descriptorContainer}>
                <p>{productInfo.title}</p>
                <p>${productInfo.price}</p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.qtyContainer}>

                    <button onClick={() => {
                        if(quantity > 1){
                            setQuantity(quantity - 1);
                        }
                    }}>-</button>
                    <input type="text" id="quantity" name="quantity" 
                        onChange={(e) => {setQuantity(e.target.value)
                        console.log(quantity)}} value={quantity} defaultValue={1}/>

                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button onClick={() => {
                    handleAddToCart(productInfo.id, productInfo.price, quantity, productInfo.title)
                    setQuantity(1)
                }
                }>Add to Cart</button>
            </div>

        </div>
    )
}

export default ProductCard