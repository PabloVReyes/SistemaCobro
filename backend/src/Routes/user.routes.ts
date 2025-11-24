import { Router } from "express";
import { getUsersController } from "../Controllers/user.controller";

const router: Router = Router()

router.get('/', getUsersController)

export default router