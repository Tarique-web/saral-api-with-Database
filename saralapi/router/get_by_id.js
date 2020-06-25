module.exports = (router, knex) => {
    router
        .get("/getallcourses/:id", (req, res) => {

            var id = req.params.id;
            knex.select("*").from("courses").where("id", id).then((data) => {

                if (data.length > 0) {
                    knex.select("*").from("submission").where("id", id).then((excercise) => {

                        knex.select("*").from("usersummision").where("id", id).then((usersub) => {


                            var all_list = []
                            var dict = {}
                            for (data_course of data) {
                                if (id == data_course.id) {
                                    dict.Courses = data_course
                                    all_list.push(dict)
                                    // console.log(all_list);

                                    // console.log(all_list)

                                    var sub_list = []
                                    var dict = {}
                                    for (data_excercise of excercise) {
                                        if (id == data_excercise.id) {
                                            dict.Excercise = data_excercise
                                            sub_list.push(dict)

                                            var dict = {}
                                            var usersub_list = []
                                            for (data_usersub of usersub) {
                                                if (id == data_usersub.id) {
                                                    dict.UsersFeedback = data_usersub
                                                    usersub_list.push(dict)
                                                    // console.log(usersub_list);


                                                }
                                            }

                                        }
                                    }

                                }
                                all_list.push(sub_list);
                                all_list.push(usersub_list)

                            }
                            res.send(all_list)

                        }).catch((err) => {
                            console.log(err);

                        })

                    }).catch((err) => {
                        console.log(err);

                    })
                }


            }).catch((err) => {
                console.log(err);

            })

        })
}
// select*from submission inner join courses on submission.id=courses.id