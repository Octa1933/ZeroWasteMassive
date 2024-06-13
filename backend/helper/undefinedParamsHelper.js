// helperFunctions.js

const handleUndefinedParams = (params) => {
    return params.map(param => (param !== undefined ? param : null));
};

module.exports = { handleUndefinedParams };