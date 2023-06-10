import hero from '/public/hero.jpg'
import hero2 from '/public/hero2.jpg'
import Image from 'next/image'
import styles from './Hero.module.css'
import * as Unicons from '@iconscout/react-unicons';
const Hero =  () => {
    return (
        <div className={styles.hero}>
        <div className={styles.img_container}>
        <Image src={hero}/>
        </div>
            <div className={styles.flex_row_col}>
           
            <section className={styles.center_content}>
            <section className={styles.hero_text}>
            <h1>Ecommerce Shop</h1>
            <h3>Ecommerce shop built with next.js & stripe</h3>
            </section>
            <section className={styles.circle}>
                <h1><Unicons.UilArrowDown size='120'/></h1>
               
            </section>

            </section>
           
            </div>
        </div>
    )
}
export default Hero