import { Router } from "express";
import {
	deleteUser,
	getUser,
	getUsers,
	postUser,
	putUser,
} from "../controllers/user-controller";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUser);

//Body has name and email
//If exists user with same email, throw error
router.post("/", postUser);

router.put("/:id", putUser);

router.delete("/:id", deleteUser);

export default router;
