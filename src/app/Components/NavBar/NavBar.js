'use client';
import styles from './NavBar.module.css'
import * as Unicons from '@iconscout/react-unicons';
import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const NavBar = () => {
    const [sideBar,setSideBar] = useState(false)
const SideBar = () => {
 
    return (

        <motion.div className={styles.sidebar_container}
          key={sideBar}
        initial={{x:300,opacity:0.5}}
        animate={{x:0,opacity:1 }}
        exit={{x:300,opacity:0}}
        transition={{
        duration:0.5
        }}
        >
            <div onClick={()=>{setSideBar(!sideBar)}} className={styles.flex_col}>
            <Link href='/'><Unicons.UilFlower size='120' color='pink'/></Link>
                <Link  href={{pathname:'/Electronics', query:{products:'Electronics'}}}><h3>Electronics</h3></Link>
           <Link href={{pathname:'/Furniture', query:{products:'Furniture'}}}><h3>Furniture</h3></Link>
               <Link href={{pathname:'/Appliances', query:{products:'Appliances'}}}><h3>Appliances</h3></Link>
                <Link href={{pathname:'/Footwear', query:{products:'Footwear'}}}><h3>Footwear</h3></Link>
              <Link href={{pathname:'/Sports', query:{products:'Sports'}}}><h3 >Sports</h3></Link>
           <Link  href={{pathname:'/Decor', query:{products:'Decor'}}}><h3>Decor</h3></Link>
            </div>
            <div className={styles.socials}>
            <Unicons.UilInstagram size='25' color='white'/>
            <Unicons.UilFacebookF size='25' color='white'/>
            <Unicons.UilTwitter size='25' color='white'/>      
            </div>
        </motion.div>
        
    )
}




    return (
        
        <motion.nav className={styles.navbar_container}
        initial={{opacity:0.5}}
        animate={{opacity:1}}   
        transition={{duration:0.25}}  
        >

<div className={styles.flex_row}>
    <div><Link href='/'><Unicons.UilFlower color='pink'/></Link></div>
    <div style={{cursor:'pointer'}} onClick={()=>{setSideBar(!sideBar)}}>
    <Unicons.UilBars />
    </div>
   
</div>
<AnimatePresence>
    {sideBar ?  <SideBar/> : ''}
    </AnimatePresence>
</motion.nav>
        

        
       
    )
}
export default NavBar