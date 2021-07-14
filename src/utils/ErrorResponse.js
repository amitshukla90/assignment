"use strict"

class BaseError {
    constructor(message, type) {
        this._message = message;
        this._type = type;
        Error.captureStackTrace(this, BaseError);
        this._stack = this.stack;
        delete this.stack;
    }
}
class ErrorResponse extends BaseError {e
    static errorHandler() {
        return function (err, req, res, next) {
            if (err instanceof ErrorResponse) {
                return err.handleError(req, res, next);
            } else {
                console.log({err :err}, "Unknown error");
                return next(err);

            }
        };
    }

    static create(caller, err, params, http_code) {
        var result;
        if (err === undefined) {
            return null;
        }

        result = {
            "status": "FAILURE",
            "request_type": caller,
            "reason": err,
            "timestamp": new Date()
        };
        if (params !== undefined) {
            result.data = params;
        }
        if (http_code === undefined || http_code === null || http_code === "") {
            http_code = 200;
        }

        return new ErrorResponse(http_code, result);
    }

    constructor(http_code, body) {
        super(body.reason, "HTTP Error");
        this.http_code = http_code;
        // sentry raven library looks at status code
        this.status_code = http_code;
        this.body = body;
    }

    handleError(req, res, next) {
        return res.status(this.http_code).json(this.body);
    }

    toString() {
        return `${this._message} of ${this._type} status ${this.http_code}
        caused by ${this._stack}`;
    }
}

module.exports = ErrorResponse;
