import { Router } from "express";
import { getCollectionsController, postCollectionsController } from "src/Controllers/collections.controller";

const router: Router = Router()

router.get('/', getCollectionsController)
router.post('/', postCollectionsController)

export default router