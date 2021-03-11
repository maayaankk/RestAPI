const mongoose = require('mongoose');

mongoose.connect( 'mongodb+srv://admin:mayankaayushi@531@cluster0.ooryu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Database connected successfully...')
}).catch((err) => {
    console.log(err);
})