import styles from './NavBar.module.css'
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';
const NavBar = () => {
    return (
        <nav className={styles.navbar_container}>

            <div className={styles.flex_row}>
                <div><Link href='/'><Unicons.UilFlower color='white'/></Link></div>
                <section className={styles.links}>
                    <h3>link</h3>
                    <h3>link</h3>
                    <h3>link</h3>
                </section>
                <Unicons.UilShoppingCart />
            </div>

        </nav>
    )
}
export default NavBar