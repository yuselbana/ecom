'use client';
import { useSearchParams } from "next/navigation";
import { useState, useEffect,useLayoutEffect } from "react";
import data from "@/app/data/data";
import styles from './page.module.css'
import axios from "axios";
import Image from "next/image";
import * as Unicons from '@iconscout/react-unicons';
import Link from "next/link";
export default function ProductModal () {
    const [product,setProduct] = useState({})
    const [icon,setIcon ] = useState()
  
   const iconHandler = ()=> {
    if(product.category === 'Electronics') {
        setIcon( <Unicons.UilMobileAndroid color='#3898EC'/>)
    }else if(product.category ==='Furniture') {
        setIcon( <Unicons.UilLamp color='#3898EC'/>)
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
                   
                 <div  className={styles.modal_grid}>
                 <div className={styles.back_image}>

               
                <section className={styles.flex_row}>
                <Link href={{pathname:`/${product.category}`, query:{products:`${product.category}`}}}>
              
                 <h3> {icon} / Back to {product.category}</h3>
                 </Link>
                 </section>
           

                 <section className={styles.image_container}>
              <Image src={product.image} fill={true}/>
              </section>


                 </div>
                

                    <div className={styles.flex_col}>

                   <div className={styles.desc_pricing}>
                   <p>{product.description}</p>

                    <section className={styles.price_button}>
                     <h3> ${product.price}</h3>
                     <button onClick={handlePurchase}>Buy Now</button>
                <Unicons.UilShoppingCart color='#3898EC' size='40'/>
           
                    </section>
                    <section className={styles.in_stock}>
                        <p>In-stock</p>
                    </section>
                   </div>

                    {/* <div>
                        <p><strong>Shipping and Returns</strong></p>
                        <p>Standard shipping: 3 - 5 working days. Express shipping: 1 - 3 working days. <br/>
                        Shipping costs depend on delivery address and will be calculated during checkout. <br/>
                        Returns are subject to terms. Please see the returns page for further information.</p>
                    </div> */}
                    </div>
                 </div>

                    </div>
            )
}