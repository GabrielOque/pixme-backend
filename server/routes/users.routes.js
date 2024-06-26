import { Router } from "express";
import {
  createUser,
  login,
  updateUser,
  deleteUser,
  getUsers,
  getUserRecovery,
  RecoveryPassword,
  getAuthUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/login", login);
router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/recoveryemail", getUserRecovery);
router.put("/recoverypassword/:id", RecoveryPassword);
router.get("/:id", getAuthUser);

export default router;
