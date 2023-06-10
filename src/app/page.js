'use client';
import Image from 'next/image'
import styles from './page.module.css'
import axios from 'axios';

import { useState,useEffect } from 'react';
import CategoryPage from './Components/CategoryPage/CategoryPage';
import ProductComponent from './Components/ProductComponent/ProductComponent';
import Hero from './Components/Hero/Hero';
import NavBar from './Components/NavBar/NavBar';
export default function Home() {

  return (
   <main className={styles.main}>

   <Hero/>
  <CategoryPage/>

   </main>
  )
}
