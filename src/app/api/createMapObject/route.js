import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import data from "@/app/data/data";
export async function GET() {
const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY);
console.log(process.env.STRIPE_PRIAVTE_KEY)
const prices = await stripe.prices.list({
    limit:100
})

const products = await stripe.products.list({
    limit:100
})

const rawProducts = products.data.reverse();
const rawPrices = prices.data.reverse();
const mapObject = data.map((product,index) => {
    return {id:product.id, title:product.title, image:product.image, price:product.price,category:product.category, description:product.description, priceId: rawPrices[index].id,prodId: rawProducts[index].id}
})

return NextResponse.json(mapObject)
}