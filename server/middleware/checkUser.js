const models = require('../database');
const Joi = require('joi');

const schema = Joi.object({
  handle: Joi.string()
    .required()
    .pattern(new RegExp(/^[a-zA-Z0-9]{3,15}$/))
    .messages({
      'string.pattern.base': 'Handle has a 15 character limit and cannot contain special characters',
      'string.required': 'Handle is required'
    }),
  
  alias: Joi.string()
    .required()
    .pattern(new RegExp(/^[a-zA-Z0-9]{1}[a-zA-Z0-9 ]{1,23}[a-zA-Z0-9]{1}$/))
    .messages({
      'string.pattern.base': 'alias has a 15 character limit and cannot contain special characters',
      'string.required': 'Alias is required'
    }),

  email: Joi.string()
    .email({ minDomainSegments: 2 })
    .messages({
      'string.pattern.base': 'Email address is invalid',
      'string.required': 'Email is required'
    }),

  password: Joi.string()
    .messages({
      'string.required': 'Password is required'
    }),
  
  avatar: Joi.string(),
})

const validateUserProperties = async (req, res, next) => {
  const { error: message } = schema.validate(req.body);

  if (message) {
    res.status(400).send({ message })
  } else {
    next();
  }
}

const rejectExistingUser = async (req, res, next) => {
  const { handle, email } = req.body;

  try {
    const handleData = await models.instance.UsersByHandle.findAsync({ handle });
    const emailData = await models.instance.UsersByEmail.findAsync({ email });

    if (handleData.length > 0) {
      res.status(409).send({ message: "Handle is unavailable" });
    } else if (emailData.length > 0) {
      res.status(409).send({ message: "Email is unavailable" });
    } else {
      next();
    }
  } catch (e) {
    res.status(400).send({ message: "Something went wrong" });
  }
}

const checkExistingUser = async (req, res, next) => {
  const { handle } = req.body;

  try {
    const handleData = await models.instance.UsersByHandle.findAsync({ handle });

    if (handleData.length === 0) {
      res.status(400).send({ message: "Invalid login" });
    } else {
      next();
    }
  } catch (e) {
    res.status(400).send({ message: "Something went wrong" });
  }
}

module.exports = {
  rejectExistingUser,
  validateUserProperties,
  checkExistingUser
}