const {
  handleValidator,
  aliasValidator,
  emailValidator,
  avatarValidator,
  registrationValidator,
  passwordValidator
} = require('./validators/UserValidator');

module.exports = {
  fields:{
      handle: {
        type: "text",
        rule: {
          required: true,
          validator: handleValidator,
        }
      },
      alias: {
        type: "text",
        rule: {
          required: true,
          validator: aliasValidator,
        }
      },
      email: {
        type: "text",
        rule: {
          required: true,
          validator: emailValidator,
        }
      },
      avatar: {
        type: "text",
        rule: {
          required: true,
          validator: avatarValidator,
        }
      },
      registration: {
        type: "timestamp",
        rule: {
          required: true,
          validator: registrationValidator,
        }
      },
      password: {
        type: "text",
        rule: {
          required: true,
          validator: passwordValidator,
        }
      },
  },
  key:["handle"]
};