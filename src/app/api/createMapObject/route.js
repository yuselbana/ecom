import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import data from "@/app/data/data";
export async function GET() {
const stripe = new Stripe('sk_test_51NGQlkDN9XLOVjsUk82M8raD35RyGiL9RceWr4bjDlfYx3iRzqeQNsjLfyldxI6GTQbaS4GOv514JxG08loz9ALW004PyrZFFl');
const prices = await stripe.prices.list({
    limit:100
})

const rawPrices = prices.data.reverse();
const mapObject = data.map((product,index) => {
    return {id:product.id, title:product.title, image:product.image, price:product.price,category:product.category, description:product.description, priceId: rawPrices[index].id}
})

return NextResponse.json(mapObject)
}