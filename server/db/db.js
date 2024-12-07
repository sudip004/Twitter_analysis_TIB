const mongoose = require('mongoose');

 const dbConncetion = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODBURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = { dbConncetion }