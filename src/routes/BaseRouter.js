"use strict"
let express = require("express");
let Router = express.Router;
class BaseRouter extends Router{
    constructor(props) {
        super(props);
    }
}
module.exports = BaseRouter;
