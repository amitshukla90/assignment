"use strict";
const BaseService = require("../service/BaseService");
let map = new Map();
class BmiService extends BaseService {
    constructor(request) {
        super(request);
        map.set("1", {"BmiCategory": "Underweight", "HealthRisk": "Malnutrition risk"})
        map.set("2", {"BmiCategory": "Normal weight", "HealthRisk": "Low risk"})
        map.set("3", {"BmiCategory": "Overweight", "HealthRisk": "Enhanced risk"})
        map.set("4", {"BmiCategory": "Moderately obese", "HealthRisk": "Medium risk"})
        map.set("5", {"BmiCategory": "Severely obese", "HealthRisk": "High risk"})
        map.set("6", {"BmiCategory": "Very severely obese", "HealthRisk": "Very high risk"})
    }


    calculateBmi(data, callback) {
        let req = this.request;
        let service = "CALCULATE_BMI_SERVICE";
        let response = {};
        let responseData = [];
        var key;
        var overWeightCount =0;
        data.forEach(bmiValue => {
            var heightVal = bmiValue.HeightCm / 100;
            const height = heightVal * heightVal;
            const weight = bmiValue.WeightKg;
            const bmi = weight / height;
            if (bmi >= 0.0 && bmi <= 18.4) {
                key = "1";
            } else if (bmi >= 18.5 && bmi <= 24.9) {
                key = "2";
            } else if (bmi >= 25.0 && bmi <= 29.9) {
                key = "3";
                overWeightCount++;
            } else if (bmi >= 30.0 && bmi <= 34.9) {
                key = "4";
                overWeightCount++
            } else if (bmi >= 35.0 && bmi <= 39.9) {
                key = "5";
                overWeightCount++
            } else {
                key = "6";
                overWeightCount++
            }
            bmiValue.Bmi = bmi.toFixed(2);
            bmiValue.BmiCategory = map.get(key).BmiCategory;
            bmiValue.HealthRisk = map.get(key).HealthRisk;
            responseData.push(bmiValue);
            response.overWeightCount = overWeightCount;
            response.data = responseData;
        });
        return callback(null, response);
    }
}

module.exports = BmiService
