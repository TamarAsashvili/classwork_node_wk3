module.exports = app => {
    app.use('/api/users', require('./users/index.js').routes);
    app.use('/api/posts',require('./posts/index.js').routes);
}