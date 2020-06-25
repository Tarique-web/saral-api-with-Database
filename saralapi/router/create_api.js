
module.exports = (router, knex) => {
    router
        .post('/create_courses/insert', (req, res) => {
            knex("courses").insert(req.body).then((results) => {
                res.send({ "Courses inserted": results })
            }).catch((err) => {
                res.send(err)
            })


        })
        .post("/create_excerxise/insert/:id", (req, res) => {
            // console.
            var id = req.params.id
            console.log(id);

            // console.log();
            // var user={"name":req.body.name}
            console.log(req.body)



            knex.select("*").from("courses").where('courses.id', id)
                .then((data) => {
                    for (value of data) {
                        console.log(value.id);
                        if (id == value.id) {
                            console.log("match")
                            knex("submission").insert(req.body).then((results) => {
                                res.send({ "excercise inserted": results })
                            }).catch((err) => {
                                res.send(err)
                            })
                        }

                    }






                }).catch((err) => {
                    res.send("There are some errors");
                });

        })
        .post("/create_usersummision/insert/:id", (req, res) => {
            // console.
            var id = req.params.id
            console.log(id);

            // console.log();
            // var user={"name":req.body.name}
            console.log(req.body)



            knex.select("*").from("courses").where('courses.id', id)
                .then((data) => {
                    for (value of data) {
                        console.log(value.id);
                        if (id == value.id) {
                            console.log("match")
                            knex("usersummision").insert(req.body).then((results) => {
                                res.send({ "excercise inserted": results })
                            }).catch((err) => {
                                res.send(err)
                            })
                        }

                    }






                }).catch((err) => {
                    res.send("There are some errors");
                });

        })



}