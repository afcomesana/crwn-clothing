import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IShYNLXyXWwDkxpnqE9oYXolyeyT2dS2zBkqQ3HiTQwxzAVgkpMfgvf5fMVXOkXwAm4xn3PmUoSxnpFHZuQtZu8000uCdgBgn';

    const onToken = token => {
        console.log(token);
        alert('Payment successfull');
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