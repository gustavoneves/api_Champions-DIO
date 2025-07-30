import { Router } from "express";
import { getPlayer, getPlayerById } from "./controllers/players-controller";

const router = Router();

router.get("/players", getPlayer);

router.get("/players/:id", getPlayerById);

export default router;
