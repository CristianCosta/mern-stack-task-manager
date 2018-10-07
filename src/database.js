const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-stack-task';

mongoose
    .connect(URI, { useNewUrlParser: true })
    .then(database => console.log('DB is connected'))
    .catch(error => console.error(error));

module.exports = mongoose;