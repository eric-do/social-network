const textLengthValidator = {
  validator: text => text.length <= 280,
  message: `Tweet text cannot be longer than 280 characters`
}

const createdValidator = {
  validator: date => new Date(date).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0),
  message: `Registration date must be before current date`
}

module.exports = {
  createdValidator,
  textLengthValidator
}