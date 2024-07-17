require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const config = require('config');
const logger = require('./utils/logger');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./routes/api');

const app = express();
const port = process.env.PORT || config.get('server.port') || 3001;

app.use(cors());
app.use(helmet());
app.use(express.json());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use("/api/", apiLimiter);

app.use('/api', apiRoutes);

app.use(errorHandler);

app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

module.exports = app;