const express = require('express');
const Sequelize = require('sequelize');
const app = express();
const port = 8090;
var cors = require('cors');

app.use(cors());
app.use(express.json());


const PGHOST = 'localhost';
const PGDATABASE = 'postgres';
const PGUSER = 'postgres';
const PGPASSWORD = '15Nov1998';

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
    host: PGHOST,
    dialect: 'postgres',
    define: {
        timestamps: false
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const Calculation = sequelize.define('calculation', {
    parameter1: {
        type: Sequelize.DOUBLE,
    },
    parameter2: {
        type: Sequelize.DOUBLE,
    },
    answer: {
        type: Sequelize.DOUBLE,
    },
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    }
}, {
    freezeTableName: true,
});

Calculation.sync({
    force: false
});

app.get('/', (req, res) => res.json({
    message: 'Hello World'
}));

app.post("/get-summation-result", (req, res) =>

    res.json({
        answer: Number(req.body.p1) + Number(req.body.p2)
    })
);

app.post("/create-history", (req, res) =>

    Calculation.create({
        parameter1: req.body.p1,
        parameter2: req.body.p2,
        answer: req.body.a
    }).then((result) => res.json(result))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));