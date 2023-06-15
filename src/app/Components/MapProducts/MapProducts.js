'use client';
import ProductComponent from "../ProductComponent/ProductComponent";
import styles from './MapProducts.module.css'
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import * as Unicons from '@iconscout/react-unicons'
import { motion,AnimatePresence } from "framer-motion";
import { useState, useEffect,useLayoutEffect } from "react";

const MapProducts = (props) => {
 
    const [products,setProducts] = useState([])
    const [category,setCatgory] = useState(props.category)
    const [categoryDropDown,setCategoryDropDown] = useState(false)
    const [loading,setLoading] = useState(false)

  useEffect(() => {
  
    createProduct()
    setTimeout(()=> {
      setLoading(!loading)
    },2000)
  
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

const CategoryDropDown = () => {
  return (
    <motion.section className={styles.links}
    key={categoryDropDown}
    initial={{scale:0.25,x:-1000,opacity:0.5}}
    animate={{scale:1,x:0,opacity:1}}
    exit={{scale:0.25,x:-1000, opacity:0.5}}
    transition={{
    duration:0.5,
    type:'spring'
    }}
   
    >
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
      </motion.section>
  )
}

    return (
      <div className={styles.product_page_container}>
  
      <div className={styles.flex_col}>
      
    <div className={styles.home_category}>
    <section className={styles.home_row}>
       <Link href={'/'}> <p><Unicons.UilHome color='#3898EC'/> / Home</p></Link>
      </section>

      <h1>{category}</h1> 
    </div>

      <section className={styles.categories} onClick={()=> {setCategoryDropDown(!categoryDropDown)}}>
      <div style={categoryDropDown? {borderRadius:'1rem 1rem 0rem 0rem'} : {}} className={styles.category_dropdown}>
      <h2>CATEGORIES</h2>
      <Unicons.UilAngleDown />
      </div>
    
     <AnimatePresence>
      {categoryDropDown? <CategoryDropDown/>: ''}
      </AnimatePresence>

      

      </section>
      

      </div>

    
        <div className={styles.product_container}>
        
        {products?.map(product => {
         return (
 <ProductComponent  loading={loading} key={product.id} category={category}  product={product}/>
        )
        })}


   
            
    
   
        </div>
        </div>
    )
}
export default MapProducts