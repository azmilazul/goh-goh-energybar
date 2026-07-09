import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || ''

export async function POST(request: Request) {
  const body = await request.text()
  const headersList = headers()
  const sig = headersList.get('stripe-signature') || ''

  let event

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as any

      // Update order status
      await supabase
        .from('orders')
        .update({ status: 'completed' })
        .eq('stripe_payment_id', session.id)

      break
    case 'checkout.session.async_payment_failed':
      const failedSession = event.data.object as any

      // Update order status
      await supabase
        .from('orders')
        .update({ status: 'failed' })
        .eq('stripe_payment_id', failedSession.id)

      break
  }

  return NextResponse.json({ received: true })
}
