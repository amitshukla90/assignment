let cors = require('cors');
let express = require("express");
let bodyParser = require("body-parser");

const ErrorResponse = require("./utils/ErrorResponse");
// body parser
let app = express();
app.use(bodyParser.json({limit: '150mb'}));
app.use(bodyParser.urlencoded({limit: '150mb', extended: true}));;

app.use(cors({ origin: true, credentials: true }));
const server = app.listen(process.env.PORT || 8080, () => {
    let host, port;
    host = server.address().address;
    port = server.address().port;
});
app.get("/", function(req, res){
    return res.status(200).json({});
});
app.get("/health", function(req, res){
    let response = {};
    let service = "HEALTH_CHECK_SERVICE";
    response.app_status = "UP";
    return res.status(200).json(response);
});
var bmiRouter = require("./routes/BmiRouter")
app.use('/bmi', bmiRouter);
app.use(ErrorResponse.errorHandler());
