const fs = require('fs');
module.exports = (router, knex) => {

    router
        .post('/courses', (req, res) => {
            var id = req.params.id;
            var data = JSON.parse(fs.readFileSync('/home/md-tarique/Desktop/saralapi/course.json'));

            data_list = []
            // let value=data.map(x=>{
            //     res.send(x)

            // })

            for (value of data) {
                // if (id == value.id) {
                for (list_value of value.submission) {
                    for (chapter of list_value.usersummision) {

                        var dict = {}
                        dict.id = chapter.id;
                        dict.courseid = chapter.courseid;
                        dict.username = chapter.username;
                        dict.usersubmissions = chapter.usersubmissions[0];
                        // console.log(dict);
                        
                        knex("usersummision").insert(dict)
                            .then((result) => {
                                // console.log("result");
                                res.send("In Usersummision")

                            }).catch((err) => {
                                res.send(err);
                            })
                    
                    }
                }
                // }
            }
            // res.send(data_list)
        })





}