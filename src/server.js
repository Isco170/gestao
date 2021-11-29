const express = require('express');
const cors = require('cors');
const userRoutes = require('./route/usuario.route');
const authRoutes = require('./route/auth.route');
const cursoRoutes = require('./route/curso.route');
const cadeiraRoutes = require('./route/cadeira.route');
const cursocadeiraRoutes = require('./route/cursocadeira.route');

const app = express();

app.use(cors({
    origin: "*",
    methods: ["READ, GET, HEAD, PUT, PATCH, POST, DELETE"],
    preflightContinue: true,
    optionsSuccessStatus: 204
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sequelize = require('./database');

app.use('/api', userRoutes);
app.use('/api', authRoutes);
app.use('/api', cursoRoutes);
app.use('/api', cadeiraRoutes);
app.use('/api', cursocadeiraRoutes);

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