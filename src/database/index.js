const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestao', 'root', '', {
    repositoryMode: true,
    host: 'localhost',
    dialect: 'mysql'
});

// const sequelize = new Sequelize('de20kjd3gtflj5', 'fprsqkzcofhrdn', '15d3d0a200a4cbee7e0693f087e91c475a3c76b631e99fe93015bd53e4638a17', {
//     repositoryMode: true,
//     port: 5432,
//     host: 'ec2-18-210-159-154.compute-1.amazonaws.com',
//     dialect: 'postgres',
//     "dialectOption":{
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// });



module.exports = sequelize;