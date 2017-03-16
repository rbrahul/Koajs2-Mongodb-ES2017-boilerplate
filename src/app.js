import Koa from 'koa';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import cors from 'kcors';
const app = new Koa();

import users from './routes/users';
import config from './config';
mongoose.Promise = global.Promise;
mongoose.connect(config.database)

app.use(cors());
app.use(bodyParser());
app.use(users.routes());

app.use(async (ctx, next) => {
    const requestStartedAt = new Date();
    console.log(`${ctx.request.method} - URL:${ctx.request.url} at ${requestStartedAt.toString()}`);
    await next();
    const requiedMs = new Date() - requestStartedAt;
    console.log(`Exucation Time : ${requiedMs} ms | ${ctx.status}`);
});

export default app;