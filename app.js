require("dotenv").config();
const express = require("express");
const app = express();

require("./config/db.config")();
require("./config/middleware.config")(app);
require("./config/session.config")(app);

app.use('/api', require('./routes/project.routes'));

app.listen(process.env.PORT, () => console.log("server running"));