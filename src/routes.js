const userRouter = require('./user');

exports.routes = app => {
    app.use('/loginapi/user', userRouter);
}
