const express = require('express');
const app = express();
const port = 8080;
const dotenv = require('dotenv');
dotenv.config();

const contentStoragesRoute = require('./src/routes/contentStorage.routes');
const contentTypesRoute = require('./src/routes/contentTypes.routes');
const authTokenValidator = require('./src/middlewares/authTokenValidation.middleware');

app.use(express.json());
app.use(authTokenValidator);
app.use(contentStoragesRoute);
app.use(contentTypesRoute);
app.listen(port, () => console.log(`app running on port ${port}!`));
