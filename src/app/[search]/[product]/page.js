'use client';
import { useSearchParams } from "next/navigation";
import { useState, useEffect,useLayoutEffect } from "react";
import data from "@/app/data/data";
import styles from './page.module.css'
import axios from "axios";
import Image from "next/image";
import * as Unicons from '@iconscout/react-unicons';
import Link from "next/link";
import { motion } from "framer-motion";
import { MoonLoader } from "react-spinners";
export default function ProductModal () {
    const [product,setProduct] = useState({})
    const [icon,setIcon ] = useState()
    const [loading,setLoading] = useState(false)
  
   const iconHandler = ()=> {
    if(product.category === 'Electronics') {
        setIcon( <Unicons.UilMobileAndroid color='#3898EC'/>)
    }else if(product.category ==='Furniture') {
        setIcon( <Unicons.UilLamp color='#3898EC'/>)
    }else if(product.category ==='Appliances') {
        setIcon( <Unicons.UilRestaurant color='#3898EC'/>)
    }else if (product.category === 'Footwear') {
        setIcon(<Unicons.UilStore color='#3898EC'/>)
    }else if (product.category === 'Sports') {
        setIcon(<Unicons.UilFootball color='#3898EC'/>)
    }else if (product.category === 'Decor') {
        setIcon(<Unicons.UilPagelines color='#3898EC'/>) 

    }

   }
    const searchParams = useSearchParams()
    const prod = searchParams.get('product')
   
    const getProduct = async() => {
        const data = await axios.get('/api/createMapObject')
        const products = await data.data
        for (var i =0; i< await products.length;i++) {
            if( await products[i].title === prod) {
                setProduct( await products[i])
                setLoading(!loading)
            }
        }
    }

    const handlePurchase = async(e) => {
        e.preventDefault()
        const {data} = await axios.post('/api/Payment',
        {priceId:product.priceId},
        {headers:{'Content-Type': 'application/json'}}
        )
        window.location.assign(data);
    }
    useEffect(() => {
            getProduct();
            
    }, []);
    useEffect(()=>{
        iconHandler();
    },[product])

            return (
                    <div className={styles.modal_container}> 
                   
                {loading?   <div  className={styles.modal_grid}>
                 <div className={styles.back_image}>

               
                <section className={styles.flex_row}>
                <Link href={{pathname:`/${product.category}`, query:{products:`${product.category}`}}}>
              
                 <p> {icon} / Back to {product.category}</p>
                 </Link>
                 </section>
           

                 <section className={styles.image_container}>
              <motion.img src={product.image} fill={true}
                initial={{x:-50,opacity:0.25}}
                animate={{x:0,opacity:1}}
                transition={{duration:1}}  

              />
              </section>


                 </div>
                

                    <motion.div className={styles.flex_col}
                    initial={{x:50,opacity:0.5}}
                    animate={{x:0,opacity:1}}   
                    transition={{duration:1}}  
                    >

                   <div className={styles.desc_pricing}>
                   <p>{product.description}</p>

                    <section className={styles.price_button}>
                     <h3> ${product.price}</h3>
                     <button onClick={handlePurchase}>Buy Now</button>
                    </section>

                  <div className={styles.price_button}>
                  <section className={styles.prod_id}>
                    <p>ID: {product.prodId}</p>
                    </section>
                    <section className={styles.in_stock}>
                        <p>In-stock</p>
                    </section>
                  </div>
                   </div>

                    
                    </motion.div>
                    

               

                 </div>: <MoonLoader color='#3898EC'/>}

                    </div>
            )
}