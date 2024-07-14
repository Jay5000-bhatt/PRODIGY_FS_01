const { body, validationResult } = require("express-validator");

const validateRegister = [
  body("name", "Name is required").trim().notEmpty(),
  body("email", "Email is not valid").isEmail().normalizeEmail(),
  body("password", "Password must be at least 6 characters long").isLength({
    min: 6,
  }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateRegister };
