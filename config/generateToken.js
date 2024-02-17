const jwt = require("jsonwebtoken")
const jwtSecretKey = "pBroGSULZX"
const generateToken = (id) => {
    const token = jwt.sign({id},jwtSecretKey)
    return token
}

module.exports = generateToken