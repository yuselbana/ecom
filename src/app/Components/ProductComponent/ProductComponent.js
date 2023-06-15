import styles from './ProductComponent.module.css'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { motion,AnimatePresence } from 'framer-motion'
import { MoonLoader } from 'react-spinners'
const ProductComponent = (props) => {

    const handlePurchase = async(e) => {
        e.preventDefault();
        const {data} = await axios.post('/api/Payment', 
        {priceId:props.product.priceId},
        {headers:{'Content-Type': 'application/json'}}
        )
        window.location.assign(data);
    }
    return(
      <>
            {props.category ===props.product.category ?

            <>
          {props.loading ? 
          
            <Link href={{pathname:`/Products/${props.product.title}`, query:{product:`${props.product.title}`}}}>
            <motion.div className={styles.product_component}
            initial={{opacity:0.25}}
            animate={{opacity:1}}   
            transition={{duration:0.25}}  
            >   
       <div className={styles.img}>

       <motion.img alt={props.product.title} src={props.product.image}  fill={true} 
       initial={{opacity:0.25}}
       animate={{opacity:1}}
       transition={{duration:1}}  
       />
       </div>
     <div className={styles.flex_row}>
     <section className={styles.name_price}>
     <h3>{props.product.title}</h3>
     <h3>${props.product.price}</h3>
     </section>
     <button onClick={handlePurchase}>Buy Now</button>
     </div>
           
        </motion.div>
        </Link>

        :
          <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <MoonLoader color='#3898EC'/>
          </div>
          
          }


           </>
        :
        ''
        }
    
      </>
    )
}
export default ProductComponent