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
          validators: [handleValidator],
        }
      },
      alias: {
        type: "text",
        rule: {
          required: true,
          validators: [aliasValidator],
        }
      },
      email: {
        type: "text",
        rule: {
          required: true,
          validators: [emailValidator],
        }
      },
      avatar: {
        type: "text",
        rule: {
          required: true,
          validators: [avatarValidator],
        }
      },
      registration: {
        type: "timestamp",
        rule: {
          required: true,
          validators: [registrationValidator],
        }
      },
      password: {
        type: "text",
        rule: {
          required: true,
          validators: [passwordValidator],
        }
      },
  },
  key:["handle"]
};