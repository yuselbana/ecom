import hero from '/public/hero.jpg'
import hero2 from '/public/hero2.jpg'
import Image from 'next/image'
import styles from './Hero.module.css'
import * as Unicons from '@iconscout/react-unicons';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
const Hero =  () => {
    return (
        <motion.div className={styles.hero}
        initial={{opacity:0.5}}
        animate={{opacity:1}}   
        transition={{duration:0.5}}
        >
        <div className={styles.img_container}>
        <Image src={hero}/>
        </div>
            <div className={styles.flex_row_col}>
           
            <section className={styles.center_content}>
            <section className={styles.hero_text}>
            <h1>E-commerce Shop</h1>
            <h3> built with next.js & stripe</h3>
            </section>
            <section className={styles.circle}>
                <Link style={{cursor:'pointer'}} to='categories' smooth={true} duration={500} hashSpy={true} offset={-50}><Unicons.UilArrowDown size='120' color='white'/></Link>
               
            </section>

            </section>
           
            </div>
        </motion.div>
    )
}
export default Hero