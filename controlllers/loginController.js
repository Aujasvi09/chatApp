const User = require("../models/userModel")
const generateToken = require("../config/generateToken")

const loginController = async (req,res) => {
    const {email , password} = req.body
    if(!email){
        res.status(401).send({"message": "Email Missing"})
        return
    }
    if(!password){
        res.status(401).send({"message": "Password Missing"})
        return
    }

    const user = await User.findOne({email})

    const checkPass = await user.matchPassword(password)

    if(checkPass){
        const token = generateToken(user.email)
        res.status(201).json({user,token})
    }else{
        res.status(401).send({"message": "Invalid password"})
    }

}

module.exports = loginController