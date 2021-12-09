module.exports = {
    host: '127.0.0.1',
    username: 'docker',
    password: 'docker',
    database: 'device_manager_db',
    dialect: 'postgres',
    logging: false,
    define:{
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
}