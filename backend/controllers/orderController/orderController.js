// // controllers/orderController.js
// const paypal = require("@paypal/checkout-server-sdk");
// const Order = require("../../models/order");
//
// const environment = new paypal.core.SandboxEnvironment(
//     process.env.PAYPAL_CLIENT_ID,
//     process.env.PAYPAL_CLIENT_SECRET
// );
// const paypalClient = new paypal.core.PayPalHttpClient(environment);
//
// // Create order
// exports.createOrder = async (req, res) => {
//     try {
//         const { productName, amount, quantity } = req.body;
//
//         // Create PayPal order
//         const request = new paypal.orders.OrdersCreateRequest();
//         request.prefer("return=representation");
//         request.requestBody({
//             intent: "CAPTURE",
//             purchase_units: [
//                 {
//                     amount: {
//                         currency_code: "INR", // Change if you use a different currency
//                         value: amount.toString(),
//                     },
//                     description: productName,
//                 },
//             ],
//         });
//
//         const order = await paypalClient.execute(request);
//         const newOrder = new Order({
//             productName,
//             amount,
//             quantity,
//             paypalOrderId: order.result.id,
//         });
//
//         await newOrder.save();
//
//         res.status(201).json({ orderId: order.result.id });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Failed to create PayPal order" });
//     }
// };
//
// // Capture and verify payment
// exports.capturePayment = async (req, res) => {
//     const { orderID } = req.body;
//
//     try {
//         // Capture the order
//         const request = new paypal.orders.OrdersCaptureRequest(orderID);
//         request.requestBody({});
//         const capture = await paypalClient.execute(request);
//
//         // Update the order status
//         const order = await Order.findOne({ paypalOrderId: orderID });
//         order.paypalPaymentId = capture.result.purchase_units[0].payments.captures[0].id;
//         order.status = "paid";
//         await order.save();
//
//         res.status(200).json({ success: true });
//     } catch (error) {
//         console.error(error);
//         res.status(400).json({ error: "Payment verification failed" });
//     }
// };
