module.exports = (router, knex) => {
    router
        .get("/getall", (req, res) => {
            knex.select("*").from("courses").then((courses) => {
                knex.select("*").from("submission").then((submission) => {
                    knex.select("*").from("usersummision").then((usersummision) => {
                        var all_list = []
                        for (value_courses of courses) {
                            // all_list.push(value_courses)

                            var sub_list = []
                            // res.send(submission)
                            for (value_submission of submission) {
                                if (value_courses.id == value_submission.id ) {
                                    // sub_list.push(value_submission)


                                    var user_list = []
                                    for (value_user of usersummision) {
                                        if (value_courses.id == value_user.id && value_user.courseid==value_submission.courseid) {
                                            user_list.push(value_user)

                                        }
                                    }
                                    value_submission.submission=user_list
                                    sub_list.push(value_submission)

                                }

                            }
                            value_courses.courses=sub_list
                            all_list.push(value_courses)
                            
                            
                            
                        }
                    res.send(all_list)



                    }).catch((err) => {
                        console.log(err);

                    })
                }).catch((err) => {
                    console.log(err);

                })

                }).catch((err) => {
                    console.log(err);
                })
            
        })
}