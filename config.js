module.exports = {
    host: process.env.HOST || '127.0.0.1',
    port: process.env.PORT || 3000,
    dbase: process.env.MONGODB || 'mongodb://localhost:27017/d2(r2)-project'    
}