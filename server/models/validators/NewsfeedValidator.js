const dateValidator = {
  validator: date => new Date(date).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0),
  message: `Registration date must be before current date`
}

module.exports = {
  dateValidator
}