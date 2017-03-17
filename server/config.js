exports.DATABASE_URL = process.env.DATABASE_URL ||
    global.DATABASE_URL ||
    (process.env.NODE_ENV = 'mongodb://ducktivity:ducktivity123@ds045882.mlab.com:45882/ducktivty');
exports.PORT = process.env.PORT || 8080;
