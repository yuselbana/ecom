'use client';
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';
import laptop from '/public/electronics/laptop.jpg'
import { useState,useEffect } from 'react';
import ProductComponent from './ProductComponent';
export default function Home() {
  const [products,setProducts] = useState([])
  const [category,setCategory] = useState('');
useEffect(() => {

  createProduct()


}, []);

const createProduct = async()=>{
await axios.get('/api/createProduct')
    const data = await axios.get('/api/createMapObject')
    setProducts(await data.data)
}
  return (
   <main className={styles.main}>
    {products?.map(product => {
      return (
     <ProductComponent category={category} key={product.id} product={product}/>
      )
    })}

    <div onClick={(e)=>setCategory(e.target.innerHTML)} style={{backgroundColor:'red'}}>
      <h1>Electronics</h1>
    </div>
    
    <div onClick={(e)=>setCategory(e.target.innerHTML)} style={{backgroundColor:'red'}}>
      <h1>Furniture</h1>
    </div>
   </main>
  )
}
