const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Import endpoints
const userRouter = require('./users/user');
const emailRouter = require('./email/email');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      'http://localhost:4200', 
      'https://mango-market-frontend.herokuapp.com', 
      'https://experiencemango.com',
      'https://www.experiencemango.com'],
    optionsSuccessStatus: 200 // Some legacy browsers (e.g., IE11) choke on status 204
  })
);

// Register endpoints
app.use('/users', userRouter);
app.use('/email', emailRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});