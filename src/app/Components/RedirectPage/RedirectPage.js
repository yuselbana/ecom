'use client';
import styles from './RedirectPage.module.css'
import { MoonLoader } from 'react-spinners'
import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
const RedirectPage = (props) => {
    const [timer,setTimer] = useState(10)   
    const router = useRouter()
    useEffect(() => {
        if(timer > 0) {
            setTimeout(()=>{
                setTimer(timer-1)
                },1000)
        }
        if(timer===0) {
            router.push('/')
        }
    }, [timer]);

    return (
        <div className={styles.redirect_container}>
          {props.result ==='success' ? 
          <>
          <h1>Thank you for completing your order!</h1>
            <h3>Redirecting in {timer}</h3>
            <MoonLoader color='#3898EC'/>
            </>
            :
            <>
          <h1>There was an error in completing your order,</h1>
          <h1>Please try again later.</h1>
            <h3>Redirecting in {timer}</h3>
            <MoonLoader color='#3898EC'/>
            </>
          }
        </div>
    )   
}
export default RedirectPage


    {/* {props.result ==='success'? 
        <p>success</p>
        :
        <p>fail</p>
        } */}