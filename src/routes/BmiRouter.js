"use strict"
const BaseRouter = require("./BaseRouter");
const BmiController = require("../controller/BmiController");
const router = new BaseRouter();

router.post("/calculate-bmi", function (req, res, next) {
    return new BmiController(req).calculateBmi(function (err, data) {
        if (err != null) {
            return next(err);
        }
        return res.status(200).json(data);
    });
});
module.exports = exports = router;
