
const errorHandler = (error) => {
    console.error('Error:', error);
    throw error;
};

module.exports = { errorHandler };