import styles from './Footer.module.css'
import Image from 'next/image'

import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';
const Footer = () => {
    return (
        <div  className={styles.footer_container}>

            <section className={styles.logo_socials}>
            <h1>IMAGE HERE</h1>
            <section className={styles.socials}>
            <Unicons.UilInstagram size='25' color='white'/>
            <Unicons.UilFacebookF size='25' color='white'/>
            <Unicons.UilTwitter size='25' color='white'/>
            </section>
            </section>

            <section className={styles.footer_params}>

                <div className={styles.footer_col}>
                    <h3>Pages</h3>
                    <Link href='/'><p>Home</p></Link>
                   <Link href='/About'> <p>About</p></Link>
                    <Link href='/Reviews'>  <p>Reviews</p></Link>
                   <Link href='Contact'> <p>Contact</p></Link>
                </div>

                <div className={styles.footer_col}>
                <h3>Services</h3>
                <Link href='/Services/Detailing_Services'><p>Detailing</p> </Link>
                 <Link href='/Services/Coating_Services'><p>Ceramic Coating</p></Link>
          
                   <Link href='/Services/Paint_Services'> <p>Paint Correction</p></Link>
                    <Link href='/Services/Tint_Services'>    <p>Tints</p></Link>
                </div>

                <div className={styles.footer_col}>
                    <h3>Info</h3>
                    <p>Address: 123 Diamond Lane </p>
                </div>

            </section>

            
            <div className={styles.bottom}>
                <p>All Rights Reserved &copy; 2023</p>
            </div>


       
        </div>
    )

}
export default Footer