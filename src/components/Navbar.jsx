import { Link } from "react-router-dom";
import styles from "../styling/Navbar.module.css"

const Navbar = ({handleToggleCart, qty, hasCart = false}) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                {hasCart&&(
                    <li>
                        <button onClick={handleToggleCart}>Cart ({qty})</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar