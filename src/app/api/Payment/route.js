import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(request) {
    
    const stripe = new Stripe('sk_test_51NHVvrFNO59KTQh9guEsuWHUfurXw4mZKh8RVeKUj0eqF9CP0Weanx6Ei0yXMBSGHpe507MwXc3X4g9cLkat52j300MCj53zQY')
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