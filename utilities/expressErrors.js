class ExpressError extends Error{
    constructor(message, statusCode){
        super();// this calls the constructor of the parent error class
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;