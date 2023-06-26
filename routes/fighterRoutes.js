import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

// TODO: Implement route controllers for fighter

router.get("/", (req, res) => {
  return res.send(fighterService.getAll());
});

router.get("/:id", (req, res) => {
  return res.json(fighterService.getOne({ id: req.params.id }));
});

router.post("/", createFighterValid, (req, res) => {
  const fighter = fighterService.createOne(req.body);
  if (!fighter) {
  }
  res.json();
});

router.put("/:id", updateFighterValid, (req, res) => {
  res.json(fighterService.updateOne(req.params.id, req.body));
});

router.delete("/:id", (req, res) => {
  res.send(fighterService.delteOne(req.params.id));
});

export { router };
