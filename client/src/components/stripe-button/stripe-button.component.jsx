import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IShYNLXyXWwDkxpnqE9oYXolyeyT2dS2zBkqQ3HiTQwxzAVgkpMfgvf5fMVXOkXwAm4xn3PmUoSxnpFHZuQtZu8000uCdgBgn';

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(response => {
            alert('Pago realizado con exito');
        }).catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('Hubo un problema con el pago');
        })
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;