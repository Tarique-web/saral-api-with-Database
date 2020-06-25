const fs = require('fs');

module.exports = function (router, knex) {



    router
        .post('/courese_create/insert', (req, res) => {
            var data = JSON.parse(fs.readFileSync('/home/md-tarique/Desktop/saralapi/course.json'));

            for (value of data) {
                var dict = {}
                dict.id = value.id;
                dict.name = value.name;
                dict.description = value.description;

                knex("courses").insert(dict)
                    .then((result) => {
                        console.log({ "result": result });
                        if (result) {
                            console.log("Data inserted!")
                            res.send("Data Created")
                        } else {
                            res.send('Didn\'t created')
                        }
                    }).catch((err) => {
                        console.log(err);
                    })
            
            }

        })
        .post("/submission_create/insert", (req, res) => {
            var data = JSON.parse(fs.readFileSync('/home/md-tarique/Desktop/saralapi/course.json'));
            for (value of data) {
                // if (id == value.id) {
                var list=[]
                for (list_value of value.submission) {
                    // res.send(list_value)
                    var dict_sub = {}
                    dict_sub.id = list_value.id;
                    dict_sub.courseid=list_value.courseid;
                    dict_sub.name = list_value.name;
                    dict_sub.description = list_value.description;
                    list.push(dict_sub)
                    
                }
                knex("submission").insert(list).then((results)=>{
                        res.send(results)
                    }).catch((err)=>{
                        console.log(err);
                        
                    })
                    
                
                // res.send(list)
            
        }
        })
};
