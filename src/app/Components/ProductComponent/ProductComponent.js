import styles from './ProductComponent.module.css'
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
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

      <Link href={{pathname:`/Products/${props.product.title}`, query:{product:`${props.product.title}`}}}>
    
        
            <div className={styles.product_component}>   
       <div className={styles.img}>
       <Image src={props.product.image}  fill={true} />
       </div>
     <div className={styles.flex_row}>
     <section className={styles.name_price}>
     <h3>{props.product.title}</h3>
     <h3>${props.product.price}</h3>
     </section>
     <button onClick={handlePurchase}>Buy Now</button>
     </div>
           
        </div>
        </Link>
        :
        ''
        }
    
      </>
    )
}
export default ProductComponent