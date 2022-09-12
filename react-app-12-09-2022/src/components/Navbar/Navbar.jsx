import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            <h1>Ciao</h1>
            <Link to='/'>Home</Link>
            <Link to='gallery'>Gallery</Link>
        </div>
    )
}

export default Navbar;