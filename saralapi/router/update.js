module.exports = (router, knex) => {
    router
        .put("/courses_update/:id", (req, res) => {
            var id = req.params.id
            knex.select("*").from("courses").where("id", id)
                .then((data) => {
                    if (data.length > 0) {
                        knex.from("courses").update(req.body).where("id",id)
                            .then((data) => {
                                res.send("Updated course")
                            
                                

                            }).catch((err) => {
                                console.log(err);

                            })
                    } else {
                        console.log("please enter correct courses id");

                    }

                }).catch((err) => {
                    console.log(err);

                })
        })

        .put("/excercise_update/:id", (req, res) => {
            var id = req.params.id
            knex.select("*").from("submission").where("id", id)
                .then((data) => {
                    // res.send(data)                    
                    if (data.length>0) {

                        knex("submission").update(req.body).where("id",id)
                            .then((data) => {
                                res.send("updated Excercise")
                            }).catch((err) => {
                                console.log(err);   

                            })
                    } else {
                        console.log("please enter correct excercise id");

                    }
                }).catch((err) => {
                    console.log(err);

                })
        })
        .put("/usersummision_update/:email/:id", (req, res) => {
            var id = req.params.id
            var email = req.params.email
            knex.select("*").from("usersummision").where("username", email)
                .then((data) => {
                    // res.send(data)
                    for (value of data) {
                        if (value.username == email && value.courseid == id) {
                            // res.send(value)
                            // console.log(value);

                            //         knex("usersummision").where(value).update(req.body)
                            //             .then((data) => {
                            //                 res.send("usersummion updated")


                            //             }).catch((err) => {
                            //                 console.log(err);

                            //             })
                        }
                    }
                }).catch((err) => {
                    console.log(err);

                })
        })
}