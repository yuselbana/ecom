import { NextResponse } from 'next/server';
import axios from 'axios';
import data from '@/app/data/data';
import Stripe from 'stripe';

export async function GET() {
  try {
  
    const stripe = new Stripe('sk_test_51NHVvrFNO59KTQh9guEsuWHUfurXw4mZKh8RVeKUj0eqF9CP0Weanx6Ei0yXMBSGHpe507MwXc3X4g9cLkat52j300MCj53zQY');  
    //Contains the products being newly added
    const productArray=[];

  //get product list 
   const listProducts = async() => {
    let products = await stripe.products.list({
      limit:100
    })
    return products.data.reverse()
   }
   //reverse list in order to match with static data.json, will also show all products in stripe array
 var reverseProducts =  await listProducts();

//if the shop products is 0, start to map data.json to the stripe products 
if(reverseProducts.length ===0) {
  for(var i =0;i<data.length;i++) {
    let product =await stripe.products.create({
      name:data[i].title,
      images:[data[i].image],
      default_price_data:{currency:'usd', unit_amount_decimal:data[i].price*100}
  })
  productArray.push(product);
  reverseProducts = await listProducts();
  console.log('Added New Product: ' + data[i].title)

  }
  console.log("Shop now has " + reverseProducts.length + ' products')
}else {
        //check if new product was added, if so populate the stripe product array with the newly added object from data.js 
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
            // console.log("Product: " + data[j].title + ", Already Created" )
          }
        }
  
        reverseProducts = await listProducts();
        console.log("Shop now has " + reverseProducts.length + ' products')
      
     
  }
  //unable to delete products in stripe if active={true}(purchasable). 




    
return NextResponse.json(
  {
    products:reverseProducts,
    productArray:productArray
  })
  } catch (error) {
    
  }
}