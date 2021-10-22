const ErrorService = require("./ErrorService");
const { validationResult } = require("express-validator");
const { body, param } = require("express-validator");
const UserModel = require("../models/UserModel");

class ValidationService {
  checkErrors(req) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new ErrorService(400, errors.array()[0].msg);
    }
  }

  userValidation() {
    let oldUsername = "";
    let oldEmail = "";

    return [
      param("id").custom(async (id) => {
        if (id) {
          const user = await UserModel.findById(id);

          oldUsername = user.username;
          oldEmail = user.email;
        }
      }),

      body("username")
        .trim()
        .notEmpty()
        .withMessage("Имя пользователя не может быть пустым")
        .isLength({ min: 3 })
        .withMessage("Минимальная длина имени пользователя - 3 символа")
        .isLength({ max: 30 })
        .withMessage("Максимальная длина имени пользователя - 30 символов")
        .custom(async (username) => {
          const user = await UserModel.findOne({
            username,
          });

          if (user) {
            if (oldUsername !== user.username) {
              throw new ErrorService(
                400,
                "Пользователь с таким именем уже существует"
              );
            }
          }
        }),

      body("email")
        .trim()
        .notEmpty()
        .withMessage("Почта не может быть пустой")
        .isEmail()
        .withMessage("Введенная почта некорректна")
        .custom(async (email) => {
          const user = await UserModel.findOne({
            email,
          });

          if (user) {
            if (oldEmail !== user.email) {
              throw new ErrorService(
                400,
                "Пользователь с такой почтой уже существует"
              );
            }
          }
        }),
    ];
  }
}

module.exports = new ValidationService();
