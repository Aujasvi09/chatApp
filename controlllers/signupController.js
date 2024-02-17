const User = require("../models/userModel")
const generateToken = require("../config/generateToken")

const signUpController = async (req,res) => {
    const {email , password, name, pic} = req.body
    console.log(req.body)
    const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error("User Already Exists");
    }

    const token  = generateToken(email)
    const newUser = new User({
        name: name,
        email: email,
        password: password,
        pic:pic,
    })

    await newUser.save()

    res.status(200).send({"message": "New User registered successfully",newUser,token})

}

module.exports = signUpController