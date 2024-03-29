const express = require('express');
const cors = require('cors');
const userRoutes = require('./route/usuario.route');
const authRoutes = require('./route/auth.route');
const cursoRoutes = require('./route/curso.route');
const cadeiraRoutes = require('./route/cadeira.route');
const cursocadeiraRoutes = require('./route/cursocadeira.route');
const cordRoutes = require('./route/coordenador.route');
const cordcursoRoutes = require('./route/cordcurso.route');
const profRoutes = require('./route/professor.route');
const profcadeiraRoutes = require('./route/professorcadeira.route');
const turmaRoutes = require('./route/turma.route');
const planoRoutes = require('./route/planoanalitico.routes');
const itemPlanoRoutes = require('./route/planoitem.routes');


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
app.use('/api/cord', cordRoutes);
app.use('/api', cordcursoRoutes);
app.use('/api', profRoutes);
app.use('/api', profcadeiraRoutes);
app.use('/api', turmaRoutes);
app.use('/api/plano', planoRoutes);
app.use('/api/item', itemPlanoRoutes);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Listining");
    sequelize.authenticate().then(async () => {
        console.log("⚡Conetado a base de dados");
        // await sequelize.sync({ alter: true });
    }).catch((e) => {
        console.log("❌Erro: " + e);
    })
});