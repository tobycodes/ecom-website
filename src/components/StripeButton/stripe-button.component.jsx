import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceInCents = price * 100;
	const publishableKey = "pk_test_Lekw2cwM1kjxg8WkKbM6cXHI";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successful!");
	};

	return (
		<StripeCheckout
			name="Tooshwear Collections"
			label="Pay Now"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total order amount is $${price}`}
			amount={priceInCents}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;
