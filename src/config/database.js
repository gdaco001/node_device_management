require('dotenv').config({
    path: process.env.NODE_ENV == 'test' ? '.env.test' : 'test'
});

module.exports = {
    host: '127.0.0.1',
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    operatorsAliases: false,
    dialect: process.env.DB_DIALECT || 'postgres',
    storage: './__tests__/database.sqlite',
    logging: false,
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};