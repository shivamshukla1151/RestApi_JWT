const User = require("../../models/user");
const validationSchema = require("../../helpers/validationSchema");
const createError = require("http-errors");

const loginController = () => {
  return {
    async login(req, res) {
      const result = validationSchema.authSchema(req.body);
      const user = await User.findOne({ email: result.email });
      if (!user) throw createError.NotFound("No user Found");
      const isMatch = await user.isValidPassword(result.password);
      if (!isMatch) throw createError.NotFound("No user Found");

      console.log("Milgye bro Milgye ...!!!");
      res.send("hey buddy", user.email);
    },
  };
};

module.exports = loginController;
