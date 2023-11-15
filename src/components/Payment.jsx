import axios from "axios";
import React, { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    juctify-content: center;
`;

const Button = styled.button`
    border: none;
    padding: 20px;
    width: 120px;
    border-radius: 5px;
    font-weight: 600;
    background-color: teal;
    color: white;
    cursor: pointer;
`;

const REACT_APP_STRIPE_PUBLIC_KEY =
    "pk_test_51OCNFGSAvdFBrS6DReTUpiw56C7mjy2PSsi7WJRZxCrjEaUZbIp5yoSv4698cJ0cKTSrwi5blIoSxfWL3ic2vcKT00NnhNbJdC";

const Payment = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post(
                    "http://localhost:5000/api/v1/checkout/payment",
                    {
                        tokenId: stripeToken.id,
                        amount: 20,
                    }
                );
                console.log(res.data);
            } catch (error) {
                console.log(error);
            }
        };

        stripeToken && makeRequest()
    }, [stripeToken]);
    return (
        <Container>
            <StripeCheckout
                name='Shop'
                image='https://avatars.githubusercontent.com/u/1486366?v=4'
                billingAddress
                shippingAddress
                description='Your total is $20'
                currency='USD'
                amount={2000}
                token={onToken}
                stripeKey={REACT_APP_STRIPE_PUBLIC_KEY}>
                <Button>Pay now $20</Button>
            </StripeCheckout>
        </Container>
    );
};

export default Payment;
