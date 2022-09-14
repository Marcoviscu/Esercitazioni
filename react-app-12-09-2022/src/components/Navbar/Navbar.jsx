import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { BiFoodMenu } from 'react-icons/bi';


const Navbar = () => {
    return (
        <div className={styles.Navbar}>
            {/* <BiFoodMenu className={styles.BiFoodMenu}/> */}
            <Link className={styles.Home}to='/'><h1>Home</h1></Link>
        </div>
    )
}

export default Navbar;