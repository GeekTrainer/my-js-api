const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB connected...');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
}

module.exports = connectDB;