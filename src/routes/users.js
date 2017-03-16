import Router from 'koa-router';
const router = new Router({
    prefix: '/api/v1/users'
});

import * as user from './../controllers/user.controller';

router.get('/',user.getAllUsers);
router.post('/',user.creatNewUser);

export default router;