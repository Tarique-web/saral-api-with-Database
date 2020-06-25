// const knex = require("./knex")
module.exports = (router,knex) => {

    knex.schema.hasTable('courses').then((exists) => {
        if (!exists) {
            return knex.schema.createTable('courses', function (table) {
                table.increments('id').primary();
                table.string('name', 100);
                table.string('description', 100)


            });
        } else {
            console.log('all ready exist!');
        };
    }).catch((err)=>{
        console.log(err);
        
    })
    knex.schema.hasTable("submission").then((exists) => {
        if (!exists) {
            return knex.schema.createTable("submission", function (table) {
                table.integer("id").unsigned().references('id').inTable('courses');
                table.integer("courseid")
                table.string('name',100);
                table.string('description', 100)


            });
        } else {
            console.log('all ready exist!');
        };
    }).catch((err)=>{
        console.log(err);
        
    })


    knex.schema.hasTable("usersummision").then((exists) => {
        if (!exists) {
            return knex.schema.createTable("usersummision", function (table) {
                table.integer('id');
                table.integer("courseid");
                table.string("username",100);
                table.text("usersubmissions")

            });
        } else {
            console.log('all ready exist!');
        };
    }).catch((err)=>{
        console.log(err)
    })
}

