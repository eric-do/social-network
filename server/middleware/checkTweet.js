const Joi = require("joi");

const validateTweetFields = async (req, res, next) => {
  const schema = Joi.object({
    handle: Joi.string()
      .required()
      .pattern(new RegExp(/^[a-zA-Z0-9]{3,15}$/))
      .messages({
        "string.pattern.base":
          "Handle has a 15 character limit and cannot contain special characters",
        "string.required": "Handle is required",
      }),

    full_text: Joi.string()
      .required()
      .min(1)
      .max(280)
      .messages({
        "string.max":
          "Tweets have a character limit of 280. Please shorten your tweet.",
        "string.min":
          "Tweets cannot be emtpy.",
        "string.required": "Tweet text is required",
      }),
  });

  const { error: message } = schema.validate(req.body);

  if (message) {
    res.status(400).send({ message });
  } else {
    next();
  }
};



module.exports = {
  validateTweetFields
};
