import { Router } from "express";
import { deleteResidentsController, getResidentsController, getResidentsCountController, postResidentsController, putResidentsController } from "src/Controllers/residents.controller";

const router: Router = Router()

router.get('/', getResidentsController)
router.get('/count', getResidentsCountController)
router.post('/', postResidentsController)
router.delete("/:id", deleteResidentsController)
router.put("/:id", putResidentsController)

export default router