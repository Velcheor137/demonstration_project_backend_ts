import { Router } from "express";
import userController from "../controllers/usersControllers";
const uscont = new userController();

const router: Router = Router();

router.get("/", uscont.listUsers);
router.get("/:id", uscont.getUser);

export default router;
