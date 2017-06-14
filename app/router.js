const Router = require('koa-router');
const router = new Router();

var caesarCodeClass = require('./caesar-code');
const caesarCode = new caesarCodeClass();

router.post('/get-offset', (ctx, next) => {
    ctx.body = {
        offset: caesarCode.getOffsetByString(ctx.request.body)
    };
});

module.exports = router;