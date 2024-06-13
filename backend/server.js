const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routing/UserRouting');
const paymentRouter = require('./routing/PaymentRouting');
const pickupRouter = require('./routing/PickupRouting');
const unregisUserRouter = require('./routing/UnregisteredUserRouting');
const unregisPaymentRouter = require('./routing/UnregisteredPaymentRouting');
const unregisPickupRouter = require('./routing/UnregisteredPickupRouting');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const baseUrl = '/api';

app.use(`${baseUrl}/user`, userRouter);
app.use(`${baseUrl}/payment`, paymentRouter);
app.use(`${baseUrl}/pickup`, pickupRouter);
app.use(`${baseUrl}/unreguser`, unregisUserRouter);
app.use(`${baseUrl}/unregpayment`, unregisPaymentRouter);
app.use(`${baseUrl}/unregpickup`, unregisPickupRouter);

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'uploads')))
// app.use('/', (req, res) => {
//     res.send('Welcome to API ZeroWaste');
// });

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});