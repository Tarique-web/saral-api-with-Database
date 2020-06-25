module.exports=(router,knex)=>{
    router
        .delete("/course_delete/:id",(req,res)=>{
            var id = req.params.id
            knex.select("*").from("courses").where("id",id)
            .then((data)=>{
                if (data.length>0){
                    knex("courses").delete().where("id",id)
                    .then((data)=>{
                        res.send(" courses is deleted")

                    }).catch((err)=>{
                        console.log(err);
                        
                    })
                }else{
                    console.log("please enter correct course id");
                    
                }
            }).catch((err)=>{
                console.log(err);
                
            })
        })

        delete("/excercise_delete/:id",(req,res)=>{
            knex.select("*").from("submission").where("id",id)
            .then((data)=>{
                if (data.length>0){
                    knex("submission").delete().where("id",id)
                    .then((data)=>{
                        res.send("excercise is deleted")

                    }).catch((err)=>{
                        console.log(err);
                        
                    })
                }else{
                    console.log("please enter correct excercise id");
                    
                }
            }).catch((err)=>{
                console.log(err);
                
            })
            
        })
}