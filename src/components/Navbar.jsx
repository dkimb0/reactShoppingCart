import { Link } from "react-router-dom";
import styles from "../styling/Navbar.module.css"

const Navbar = ({handleToggleCart, qty, hasCart = false}) => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navbarList}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.centerLink}>
                    <Link to="/shop">Shop</Link>
                </li>
                {hasCart?(
                    <li>
                        <button className={styles.cart} onClick={handleToggleCart}>Cart ({qty})</button>
                    </li>
                ):(
                    <li className={styles.navbarFiller}></li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar