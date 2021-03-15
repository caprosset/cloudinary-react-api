const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const origin = process.env.PUBLIC_DOMAIN || "http://localhost:3000";
// const corsConfig = { 
//   origin: [origin], 
//   credentials: true 
// };

module.exports = (app) => {
  // app.use(cors(corsConfig));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
};