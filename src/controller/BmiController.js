"use strict"
const BaseController = require("./BaseController")
const BmiService = require("../service/BmiService")
const ErrorResponse = require("../utils/ErrorResponse")
const lodash = require("lodash");
const _ = require("underscore");
class BmiController extends BaseController{
    constructor(request) {
        super(request);
    }

    calculateBmi(callback){
        let req = this.request;
        let self = this;
        let service = "CALCULATE_BMI";
        let bmiRequest = lodash.get(req, "body", '{}');
        console.log("Request to calculate BMI ");
        return new BmiService(req).calculateBmi(bmiRequest, (err, response) =>{
            if(err){
                return callback(ErrorResponse.create(service,err,bmiRequest,"400"), null );
            }
            return callback(null, response);
        });
    }

}
module.exports = BmiController
