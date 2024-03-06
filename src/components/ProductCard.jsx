import { Link } from "react-router-dom";
import styles from "../styling/Navbar.module.css"

const ProductCard = ({ productInfo }) => {
    return (
        <div>
            <img src={productInfo.image} width={200} alt="placeholder" />
            <p>{productInfo.title}</p>
            <p>Price: {productInfo.price}</p>

            <button>+</button>
            <input type="text" />
            <button>-</button>
            <button>Add to Cart</button>
        </div>
    )
}

export default ProductCard