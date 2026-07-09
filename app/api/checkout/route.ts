import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { items, customerEmail } = body

    // Create Stripe checkout session
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: 'idr',
        product_data: {
          name: item.product.name,
          description: item.product.description,
        },
        unit_amount: Math.round(item.product.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }))

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/cancel`,
      customer_email: customerEmail,
    })

    // Store order in database
    const total_price = items.reduce(
      (sum: number, item: any) => sum + item.product.price * item.quantity,
      0
    )

    await supabase.from('orders').insert([
      {
        user_email: customerEmail,
        items: items,
        total_price,
        status: 'pending',
        stripe_payment_id: session.id,
      },
    ])

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
