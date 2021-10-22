const Router = require("express");
const userController = require("../controllers/UserController");
const validationService = require("../services/ValidationService");

const router = Router();

router.get("/", userController.getUsers);
router.get("/:id", userController.getUser);
router.put(
  "/edit/:id",
  validationService.userValidation(),
  userController.editUser
);
router.delete("/delete/:id", userController.deleteUser);
router.post("/add", validationService.userValidation(), userController.addUser);

module.exports = router;
