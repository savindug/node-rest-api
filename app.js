const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectMongoose = require('./config/datastore');

dotenv.config({ path: 'config/config.env' });

const app = express();
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

connectMongoose();

// Add headers
app.use(cors());
app.use(express.json());
app.use('/', require('./routes/routes'));
app.use('/products', require('./routes/products'));
app.listen(PORT, () => {
  console.log(
    'Server running on ' + process.env.NODE_ENV + ' MODE at PORT ' + PORT
  );
});
