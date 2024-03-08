import { Link } from "react-router-dom";
import styles from "../styling/Navbar.module.css"

const ProductCard = ({ productInfo, handleAddToCart, cartArray}) => {
    return (
        <div>
            <img src={productInfo.image} width={200} alt="placeholder" />
            <p>{productInfo.title}</p>
            <p>${productInfo.price}</p>

            <button>-</button>
            <input type="text" />
            <button>+</button>
            <button onClick={() => {
                handleAddToCart(productInfo.id, productInfo.price, 1, productInfo.title)
            }
            }>Add to Cart</button>
        </div>
    )
}

export default ProductCard