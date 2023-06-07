import axios from "axios";
import Stripe from "stripe";
import { NextResponse } from "next/server";
export async function POST(request) {
    
    const stripe = new Stripe('sk_test_51NGQlkDN9XLOVjsUk82M8raD35RyGiL9RceWr4bjDlfYx3iRzqeQNsjLfyldxI6GTQbaS4GOv514JxG08loz9ALW004PyrZFFl')
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