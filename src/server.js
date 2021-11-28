const express = require('express');
const userRoutes = require('./route/usuario.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sequelize = require('./database');

app.use('/api', userRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Listining");
    sequelize.authenticate().then(async () => {
        console.log("Conectado a base de dados");
        // await sequelize.sync({ alter: true });
    }).catch((e) => {
        console.log("Erro: " + e);
    })
});