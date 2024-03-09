import { useState } from "react";
import styles from "../styling/ProductCard.module.css"
import PropTypes from 'prop-types';


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
                        onChange={(e) => setQuantity(e.target.value)} value={quantity}/>

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

ProductCard.propTypes ={
    productInfo: PropTypes.shape({
        id: PropTypes.number,
        price: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
    }),
    handleAddToCart: PropTypes.func,
}

export default ProductCard