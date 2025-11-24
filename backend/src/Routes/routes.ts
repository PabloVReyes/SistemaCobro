import { Router } from "express";
import user from "../Routes/user.routes";
import neighbor from "../Routes/neighbor.routes";
import collection from "../Routes/collections.routes";

const router: Router = Router();

router.get('/', (req, res) => {
    try {
        res.json({ message: 'Api funcionando' });
    } catch (error) {
        res.status(500).json({ error: 'Error del servidor' });
    }
}); 

router.use('/api/users', user);
router.use('/api/neighbor', neighbor);
router.use('/api/collection', collection);

module.exports = router;