const cityModel = require('../model/cityModel')

module.exports = name => cityModel.findOne({ name }) //findOne just returns ONE query object that meets the condition