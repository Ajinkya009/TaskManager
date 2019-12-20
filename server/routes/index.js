'use strict';
module.exports = function(app) {
    // Insert routes below
    app.use('/api/user', require('./user'));
    app.use('/api/project', require('./project'));
    app.use('/api/task', require('./task'));
};
