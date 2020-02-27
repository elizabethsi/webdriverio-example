const Koa  = require('koa');
const koaStatic = require('koa-static');
const dotenv = require('dotenv');

dotenv.config();

const rootDir = __dirname + '/public';

const app = new Koa();
app.use(koaStatic(rootDir));

const port = process.env.APP_PORT || 3000;
app.listen(port, () => console.log(`App listening on port ${port}.`));
