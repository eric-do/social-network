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

const rejectExistingUser = async (req, res, next) => {
  const { handle } = req.body;

  try {
    const data = await models.instance.UsersByHandle.findAsync({ handle });
    if (data.length > 0) {
      res.status(409).send({ message: "Handle is unavailable" });
    } else {
      next();
    }
  } catch (e) {
    res.status(400).send({ message: "Something went wrong" });
  }
}

const validateAtrributes = async (req, res, next) => {
  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send({ message: error })
  } else {
    next();
  }
}

module.exports = {
  rejectExistingUser,
  validateAtrributes
}