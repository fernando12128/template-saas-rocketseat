"use client"

import { useStripe } from "@/app/hooks/useStripe"

export default function Pagamentos(){

    const { 
        createdPaymentStripeCheckout,
        createSubscriptionStripeCheckout,
        handleCreateStripePortal,
    } = useStripe()

    return(
        <div className="flex flex-col gap-10 items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Pagamentos</h1>
            <button className="border rounded-md px-1" onClick={() => createdPaymentStripeCheckout({
                testeId:"123",
            })}>Criar Pagemtnso Stripe</button>
            <button className="border rounded-md px-1" onClick={() => createSubscriptionStripeCheckout({
                testeId:"123",
            })}>Criar Assinatura Stripe</button>
            <button className="border rounded-md px-1" onClick={handleCreateStripePortal}>Criar Portal de pagamentos Stripe</button>
        </div>
    )
}