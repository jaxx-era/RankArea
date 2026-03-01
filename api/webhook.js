module.exports = async (req, res) => {
  const webhookSecret = process.env.RAZORPAY_SECRET;
  const crypto = require('crypto');

  const signature = req.headers['x-razorpay-signature'];
  const body = JSON.stringify(req.body);
  const expectedSignature = crypto.createHmac('sha256', webhookSecret).update(body).digest('hex');

  if (signature === expectedSignature) {
    console.log("Payment verified:", req.body);
    res.status(200).send("OK");
  } else {
    res.status(400).send("Invalid signature");
  }
};
