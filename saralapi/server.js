const express = require('express');
const router = express.Router();
const bodyparser= require('body-parser')
const app = express();
// knex = require("./data")
// const mysql = require("mysql")
// const knex = require("./knex")

app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({extended:true}));

const mysql = require("mysql")

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'tarique',
        database: 'saral'
    }
});
app.use("/",router);
require('./router/insert')(router,knex);

app.use("/",router);
require('./data')(router,knex);

app.use("/",router);
require('./router/usersb')(router,knex);

app.use("/",router);
require("./router/create_api")(router,knex);

app.use("/",router);
require("./router/get_by_id")(router,knex);

app.use("/",router);
require("./router/getall")(router,knex);

app.use("/",router);
require("./router/update")(router,knex);

app.use("/",router);
require("./router/delete")(router,knex);





app.listen(3333,()=>{
    console.log("Sarver is working");
    
})
