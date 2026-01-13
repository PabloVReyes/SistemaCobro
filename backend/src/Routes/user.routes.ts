import { Router } from "express";
import { getUsersController, loginController } from "../Controllers/user.controller";

const router: Router = Router()

router.get('/', getUsersController)
router.post("/login", loginController)

export default router