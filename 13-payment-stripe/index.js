const express = require('express');
const stripe = require('stripe')('sk_test_your_stripe_secret_key');

const PORT = 8000;
const app = express();

app.get('/', (req,res) => {
    res.send("Server Started Running")
});

app.post('/process-payment', async (req, res) => {
    const { amount, currency, token } = req.body;
  
    try {
      // Create a payment intent using the Stripe API
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency,
        payment_method: token,
        confirm: true,
      });
  
      // Return the payment intent status to the client
      res.json({ status: paymentIntent.status });
  
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while processing the payment.' });
    }
});


app.listen(PORT, () => console.log(`Server running at Port: ${PORT}`))