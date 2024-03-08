import { Link } from "react-router-dom";
import styles from "../styling/Navbar.module.css"

const Navbar = () => {
    return (
        <nav>
            <ul className={styles.navbarList}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar