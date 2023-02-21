const {RuntimeError} = require("./exceptions/RuntimeError");

class SourceClass
{
    errors:{}
    source:any
    constructor() {
        this.errors = { };
    }

    setSource(source)
    {
        this.source = source;
    }

    fetch()
    {
        return this.errors;
    }

    sync()
    {
        let errors = this.source ? this.source() : { };
        if (!errors) throw new RuntimeError("Errors can not be null");

        this.errors = errors;
    }

    get(code)
    {
        return this.errors[code];
    }
}

module.exports = {
    Source: SourceClass,
};




