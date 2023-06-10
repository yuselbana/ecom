
import styles from './CategoryPage.module.css'
import axios from 'axios';
import { useState,useEffect } from 'react';
import ProductComponent from '../ProductComponent/ProductComponent';
import Link from 'next/link';
import Image from 'next/image';
import electronics from '/public/categories/electronics.jpeg'
import furniture from '/public/categories/furniture.jpeg'
import appliances from '/public/categories/appliances.jpg'
import plants from '/public/categories/plants.jpeg'
import footwear from '/public/categories/footwear.jpg'
import sports from '/public/categories/sports.jpeg'
export default function CategoryPage() {
 

  return (

    <div className={styles.category_page_container}>
    <div className={styles.title}>
    <h2>Shop by category</h2>
    </div>
    <div className={styles.shop_category}>
    
 
            <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
            <section className={styles.category}>
                <h1>Electronics</h1>
                <Image src={electronics}/>
            </section>
            </Link>

            <Link href={{pathname:'/Furniture', query:{products:'Furniture'}}} >
              
            <section className={styles.category}>
                <h1>Furniture</h1>
                <Image src={furniture}/>
            </section>
            </Link>

            
            <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
            <section className={styles.category}>
                <h1>Appliances</h1>
                <Image src={appliances}/>
            </section>
            </Link>

            
            <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
             <section className={styles.category}>
                <h1>Plants</h1>
                <Image src={plants}/>
            </section>
            </Link>

            
            <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
            <section className={styles.category}>
                <h1>Footwear</h1>
                <Image src={footwear}/>
            </section>
            </Link>

            
            <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
            <section className={styles.category}>
                <h1>Sports</h1>
                <Image src={sports}/>
            </section>
            </Link>

            {/* <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
              <section className={styles.category}>
                  <h1>Something</h1>
                  <Image src={}/>
              </section>
              </Link>

              <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
              <section className={styles.category}>
                  <h1>Something</h1>
                  <Image src={}/>
              </section>
              </Link>

              <Link href={{pathname:'/Electronics', query:{products:'Electronics'}}} >
              
              <section className={styles.category}>
                  <h1>Something</h1>
                  <Image src={}/>
              </section>
              </Link>
     */}
        
    




    </div>
   
   </div>
  )
}
