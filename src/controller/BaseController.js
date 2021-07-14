"use strict"

class BaseController{
    constructor(request) {
        console.log("Request to perform operations");
        this.request = request;
    }
}
module.exports = BaseController
