import { NextResponse } from 'next/server';
import axios from 'axios';
import data from '@/app/data/data';
import Stripe from 'stripe';

export async function GET() {
  try {
  
    const stripe = new Stripe('sk_test_51NGQlkDN9XLOVjsUk82M8raD35RyGiL9RceWr4bjDlfYx3iRzqeQNsjLfyldxI6GTQbaS4GOv514JxG08loz9ALW004PyrZFFl');  
    const productArray=[];
   const listProducts = async() => {
    let products = await stripe.products.list({
      limit:100
    })
    return products.data.reverse()
   }
 var reverseProducts =  await listProducts();

if(reverseProducts.length ===0) {
  for(var i =0;i<data.length;i++) {
    let product =await stripe.products.create({
      name:data[i].title,
      images:[data[i].image],
      default_price_data:{currency:'usd', unit_amount_decimal:data[i].price*100}
  })
  productArray.push(product);
  reverseProducts = await listProducts();
  }
}else {

    for(var j=0;j<data.length;j++) {
        if(reverseProducts[j] === undefined) {
           let product =await stripe.products.create({
          name:data[j].title,
          images:[data[j].image],
          default_price_data:{currency:'usd', unit_amount_decimal:data[j].price*100}
          })
          productArray.push(product)
      
           console.log("Added new product: "+ data[j].title)
         
          }else if(data[j].title === reverseProducts[j].name ) {
            console.log("Product Already Created")
          }
        }
  
        reverseProducts = await listProducts();
        console.log("Shop now has " + reverseProducts.length + ' products')
      
     
  }
  




    
return NextResponse.json(
  {
    products:reverseProducts,
    productArray:productArray
  })
  } catch (error) {
    
  }
}