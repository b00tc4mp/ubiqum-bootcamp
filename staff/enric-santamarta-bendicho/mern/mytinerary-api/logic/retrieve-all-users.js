const userModel = require('../models/userModel')

module.exports = () => userModel.find({})