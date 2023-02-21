const globalAnyError:any = global

function _stackTrace() {
    const err = new Error();
    return err.stack;
}

function NotFoundError(code){
    this.message = "Error with code " + code + " doesn't exist";
    if ("captureStackTrace" in Error) {
        Error.captureStackTrace(this, NotFoundError);
    }
    else{
        this.stack = _stackTrace()
    }
        
}

NotFoundError.prototype = Object.create(Error.prototype);
NotFoundError.prototype.name = "ErrorNotFoundException";
NotFoundError.prototype.message = globalAnyError.message;
NotFoundError.prototype.stack = globalAnyError.stack;

module.exports = {
    ErrorNotFoundException: NotFoundError,
};
