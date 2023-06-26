import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

// TODO: Implement route controllers for user

router.get("/", (req, res) => {
  res.json(userService.getAll());
});

router.get("/:id", (req, res) => {
  const user = userService.search({ id: req.params.id });
  if (!user) {
    return res.status(404).json({ error: true, message: "Not found" });
  }
  return res.send(user);
});

router.post("/", createUserValid, (req, res) => {
  return res.json(userService.createOne(req.body));
});

router.put("/:id", updateUserValid, (req, res) => {
  return res.json(userService.updateOne(req.params.id, req.body));
});

router.delete("/:id", (req, res) => {
  return res.json(userService.deleteOne(req.params.id));
});

export { router };
