const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://mongoDB:mongodb@cluster0.lbqkw.mongodb.net/myfoodDB?retryWrites=true&w=majority';


mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'myfoodDB' });

mongoose.connection.on('connected', () => {
    console.log(`mongoose connected to ${dbURI}`);
});

mongoose.connection.on('error', err => {
    console.log('mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose disconnected');
});


const greacfulShutdown = (msg, callback) => {
    mongoose.connection.close(() => {
        console.log(`Mongoose disconnected through ${msg}`);
    });
};

process.once('SIGUSR2', () => {
    greacfulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', () => {
    greacfulShutdown('app termination', () => {
        process.exit(0);
    });
});

process.on('SIGTERM', () => {
    greacfulShutdown('Heroku app shutdown', () => {
        process.exit(0);
    });
});

require('./food');