const user = require('../model/userModel')

exports.createUser = (req,res)=>{
    const users = new user(req.body)
    users.save((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}

exports.getAllUser = (req,res)=>{
    users.find((err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}

exports.getUserById = (req,res)=>{
    user.findById(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.updateUser = (req,res)=>{
    users.findByIdAndUpdate(req.params.id,req.body,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.deleteUser = (req,res)=>{
    users.findByIdAndDelete(req.params.id,(err,data)=>{
        if(err){
            res.status(500).send({
                message:err.message
            })
        }else{
            res.send(data)
        }
    })
}
exports.login = (req,res)=>{
    user.findOne({email:req.body.email,password:req.body.password},(err,data)=>{
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })

}
