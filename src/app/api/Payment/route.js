import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(request) {
    
    const stripe = new Stripe('sk_test_51NHsuSK0bwgce0yttZmSkFHczAih2XrSLkrcDcqcexh24rnbm63afqcxouxItxu4f10pPbYsRmjfm05LCQyZaMeP00OI0dOxOZ')
    let data = await request.json();
    let priceId = data.priceId
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                price:priceId,
                quantity:1,
            }
        ],
        mode: 'payment',
        success_url:'https://localhost:3000',
        cancel_url:'https://localhost:3000'
    })
        return NextResponse.json(session.url);
}