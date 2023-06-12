'use client';
import ProductComponent from "../ProductComponent/ProductComponent";
import styles from './MapProducts.module.css'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'
import { useState, useEffect,useLayoutEffect } from "react";

const MapProducts = (props) => {
 
    const [products,setProducts] = useState([])
    const [category,setCatgory] = useState(props.category)

  useEffect(() => {
  
    createProduct()
  
  
  }, []);
  
  const createProduct = async()=>{
    //only need to run if adding more products can be run simateousnly, performance hinders.

    ////////
  // await axios.get('/api/createProduct')
    ///////
        //api route /api/createMapObject is what is used to map the products, passing in the priceID to create a checkout session.
      const data = await axios.get('/api/createMapObject')
      setProducts(await data.data)
  }




    return (
      <div className={styles.product_page_container}>
  
      <div className={styles.flex_col}>
      
      <section className={styles.home_row}>
       <Link href={'/'}> <h3><Unicons.UilHome color='#3898EC'/> / Home</h3></Link>
      </section>

      <h1>{category}</h1> 

      <section className={styles.categories}>
      <h3>Categories</h3>
      <section className={styles.links}>
           <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              <p>Electronics</p>
              </Link>
  
              <Link href={{pathname:'/Furniture', query:{products:'Furniture'}}} >
              <p>Furniture</p>
              </Link>
      
              <Link href={{pathname:'/Appliances', query:{products:'Appliances'}}} >
              <p>Appliances</p>
              </Link>
              <Link href={{pathname:'/Footwear', query:{products:'Footwear'}}} >
              <p>Footwear</p>
              </Link>
              <Link href={{pathname:'/Sports', query:{products:'Sports'}}} >
              <p>Sports</p>
              </Link>
              <Link href={{pathname:'/Decor', query:{products:'Decor'}}} >
              <p>Decor</p>
              </Link>
      </section>

      

      </section>
      

      </div>

    
        <div className={styles.product_container}>
        
  


    {products?.map(product => {
         return (
 <ProductComponent key={product.id} category={category}  product={product}/>
        )
        })}
            
    
   
        </div>
        </div>
    )
}
export default MapProducts