import {Router} from 'express';
import controller from '../controllers/projects.controllers.js'

const router = Router();

router.get("/", controller.all);

router.get("/",controller.create);

router.post("/:id",controller.one);

router.delete("/:id",controller.destroy);

router.put("/:id",controller.update);

export default router;
