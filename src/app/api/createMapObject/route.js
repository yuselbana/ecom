import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
import data from "@/app/data/data";
export async function GET() {
const stripe = new Stripe('sk_test_51NHVvrFNO59KTQh9guEsuWHUfurXw4mZKh8RVeKUj0eqF9CP0Weanx6Ei0yXMBSGHpe507MwXc3X4g9cLkat52j300MCj53zQY');
const prices = await stripe.prices.list({
    limit:100
})

const rawPrices = prices.data.reverse();
const mapObject = data.map((product,index) => {
    return {id:product.id, title:product.title, image:product.image, price:product.price,category:product.category, description:product.description, priceId: rawPrices[index].id}
})

return NextResponse.json(mapObject)
}