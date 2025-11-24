import { Router } from "express";
import { getNeighborController, postNeighborController } from "src/Controllers/neighbor.controller";

const router: Router = Router()

router.get('/', getNeighborController)
router.post('/', postNeighborController)

export default router