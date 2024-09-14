import React from 'react'; // Remove useState import
import axios from './axiosConfig'; 
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('your_stripe_publishable_key'); // Replace with your Stripe publishable key

const CheckoutForm = ({ clientSecret, membershipId }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) return;

        const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Customer Name', // Update as needed
                },
            },
        });

        if (error) {
            console.error('Payment failed:', error);
            // Optionally update the payment status to failed
        } else if (paymentIntent.status === 'succeeded') {
            console.log('Payment succeeded:', paymentIntent);
            // Optionally update the payment status to succeeded
            await axios.post('/payments/update-payment-status', {
                paymentId: paymentIntent.id,
                status: 'succeeded'
            });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay</button>
        </form>
    );
};

const PaymentForm = ({ clientSecret, membershipId }) => (
    <Elements stripe={stripePromise}>
        <CheckoutForm clientSecret={clientSecret} membershipId={membershipId} />
    </Elements>
);

export default PaymentForm;
