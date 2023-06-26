import { FIGHTER } from "../models/fighter.js";

const createFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during creation
  const { name, health, power, defense } = req.body;
  // Validate power
  if (!name) {
    return res.status(400).json({
      error: true,
      message: "Name should not be empty",
    });
  }

  if (!power || isNaN(power) || power < 1 || power > 100) {
    return res.status(400).json({
      error: true,
      message: "Invalid power. Please provide a number between 1 and 100.",
    });
  }

  // Validate defense
  if (!defense || isNaN(defense) || defense < 1 || defense > 10) {
    return res.status(400).json({
      error: true,
      message: "Invalid defense. Please provide a number between 1 and 10.",
    });
  }

  // Validate health
  if (health && (isNaN(health) || health < 80 || health > 120)) {
    return res.status(400).json({
      error: true,
      message: "Invalid health. Please provide a number between 80 and 120.",
    });
  }
  next();
};

const updateFighterValid = (req, res, next) => {
  // TODO: Implement validatior for FIGHTER entity during update
  const itemsArray = Object.keys(req.body);

  if (itemsArray.length === 0) {
    return res.status(400).json({
      error: true,
      message: "Invalid request",
    });
  }
  next();
};

export { createFighterValid, updateFighterValid };
