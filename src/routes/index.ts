import {Router} from 'express';
import * as routes from './api/routes';

const router = Router();

router.route("/")
.get(routes.main)
.get(routes.users)
.get(routes.profile)


export default router;