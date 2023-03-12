const User = require("../../models/user");
const createError = require("http-errors");
const { authSchema } = require("../../helpers/validationSchema");
const registerController = () => {
  return {
    async getRegister(req, res, next) {
      try {
        const users = await User.find();
        if (!users || users.length === 0) {
          console.log("No users found. DB is empty.");
          //   return res.status(404).send("No users found.");
          next(createError.NotFound("this is the notfound message"));
        }

        console.log(users);
        res.send(users);
      } catch (error) {
        console.error(error);
        next(error);
      }
    },

    async register(req, res, next) {
      try {
        console.log(req.body);
        const result = await authSchema.validateAsync(req.body);

        const doesExist = await User.findOne({ email: result.email });

        if (doesExist) {
          throw createError.Conflict(`${result.email} already taken`);
        }

        const user = new User({
          email: result.email,
          password: result.password,
        });
        const data = await user.save();

        res.send(data);
      } catch (error) {
        console.error(error);
        next(error);
      }
    },
  };
};

module.exports = registerController;
