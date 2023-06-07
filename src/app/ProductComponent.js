import styles from './ProductComponent.module.css'
import Image from 'next/image'
import axios from 'axios'
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
        
            <div className={styles.product_component}>   
       <div className={styles.img}>
       <Image src={props.product.image} fill={true}/>
       </div>
     <div className={styles.flex_row}>
     <p>{props.product.title}</p>
     <p>{props.product.price}</p>
     </div>
            <button onClick={handlePurchase}>Buy Now</button>
        </div>
   
        :
        ''
        }
      </>
    )
}
export default ProductComponent