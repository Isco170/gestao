const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('gestao', 'root', '', {
    repositoryMode: true,
    host: 'localhost',
    dialect: 'mysql'
});


// const sequelize = new Sequelize('du2etqic4fb1u', 'raneyhkhptuchc', 'c5cff6e4b31009d529c8cc07e17280b615746d966615f855831398382932906f', {
//     repositoryMode: true,
//     port: 5432,
//     host: 'ec2-34-200-35-222.compute-1.amazonaws.com',
//     dialect: "postgres",
//     "dialectOptions": {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     }
// });



module.exports = sequelize;