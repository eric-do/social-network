const handleValidator = {
  validator: handle => /^[a-zA-Z0-9]{3,15}$/.test(handle),
  message: `Handle has a 15 character limit and cannot contain special characters`
};

const aliasValidator = {
  validator: alias => /^[a-zA-Z0-9]{1}[a-zA-Z0-9 ]{1,23}[a-zA-Z0-9]{1}$/.test(alias) ,
  message: `Alias has a 15 character limit and cannot contain special characters`
}

const emailValidator = {
  validator: email => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.desc,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
  message: `Email address is invalid`
};

const avatarValidator = {
  validator: url => /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url),
  message: `Image URL is invalid`
}

const registrationValidator = {
  validator: date => new Date(date).setHours(0,0,0,0) <= new Date().setHours(0,0,0,0),
  message: `Registration date must be before current date`
}

const passwordValidator = {
  validator: password => password.length >= 3,
  message: `Password is of insufficient length`
}

module.exports = {
  handleValidator,
  aliasValidator,
  emailValidator,
  avatarValidator,
  registrationValidator,
  passwordValidator
}