const Koa  = require('koa');
const koaStatic = require('koa-static');
const dotenv = require('dotenv');
const koaViews = require('koa-views');
const Router = require('@koa/router');

dotenv.config();

const rootDir = __dirname + '/public';

const app = new Koa();
app.use(koaStatic(rootDir));
app.use(koaViews(`${__dirname}/views`, {
  extension: 'pug'
}));

const router = new Router();
router.get('/', ctx => ctx.render('index'));
router.get('/foo', ctx => ctx.render('foo'));

app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}.`));
