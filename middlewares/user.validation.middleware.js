import { USER } from "../models/user.js";

const createUserValid = (req, res, next) => {
  // TODO: Implement validatior for USER entity during creation
  const {
    firstName,
    lastName,
    email,
    phoneNumber,
    password, // min 3 symbols
  } = req.body;

  if (!firstName || !lastName) {
    return res.status(400).json({
      error: true,
      message: "Invalid first or last name",
    });
  }

  // Validate email
  if (!email || !email.endsWith("@gmail.com")) {
    return res.status(400).json({
      error: true,
      message: "Invalid email. Only @gmail.com domain is allowed.",
    });
  }

  // Validate phoneNumber
  if (!phoneNumber || !phoneNumber.match(/^\+380\d{9}$/)) {
    return res.status(400).json({
      error: true,
      message:
        "Invalid phone number. Please provide a valid number in the format +380xxxxxxxxx.",
    });
  }

  // Validate password
  if (!password || password.length < 3) {
    return res.status(400).json({
      error: true,
      message:
        "Invalid password. Please provide a password with a minimum of 3 characters.",
    });
  }
  next();
};

const updateUserValid = (req, res, next) => {
  // TODO: Implement validatior for user entity during update

  const itemsArray = Object.keys(req.body);

  if (itemsArray.length === 0) {
    return res.status(400).json({
      error: true,
      message: "Invalid request",
    });
  }
  next();
};

export { createUserValid, updateUserValid };
