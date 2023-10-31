import express from "express";
import Stripe from "stripe";

const stripe = Stripe('sk_test_51O6R9XHNMAlOqD53mJGIgJMXwhBHkX1wcLqnFmNrFmgXhrLVbFH7Ikz1qmRLujxp5zf9pN22BhMTbbz28SBOkJKf00SnU6cxqx');

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {

  const line_items = req.body.cart.map((item) => {
    return{
        price_data: {
            currency: 'cad',
            product_data: {
              name: item.Name,
              metadata:{
                id: item._id
              }
            },
            unit_amount: item.Price * 100,
          },
          quantity: item.quantity,
    }
  }) 
  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: 'payment',
    success_url: `http://localhost:3001/checkout-success`,
    cancel_url: `http://localhost:3001/checkout`,
  });

  res.send({url: session.url});
});

export default router;
