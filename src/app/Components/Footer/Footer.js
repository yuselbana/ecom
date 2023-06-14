import styles from './Footer.module.css'
import Image from 'next/image'

import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';
const Footer = () => {
    return (
        <div  className={styles.footer_container}>

            <section className={styles.logo_socials}>
           <Link href='/'> <Unicons.UilFlower size='120' color='pink'/></Link>
            <section className={styles.socials}>
            <Unicons.UilInstagram size='25' color='white'/>
            <Unicons.UilFacebookF size='25' color='white'/>
            <Unicons.UilTwitter size='25' color='white'/>
            </section>
            </section>       
                 
            <div className={styles.bottom}>
                <p>All Rights Reserved &copy; 2023</p>
            </div>


       
        </div>
    )

}
export default Footer