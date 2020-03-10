// This file is used to import data from a file to database(bootcamps.json to Atlas)

const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv')

// load vars from env(get mongo URI)
dotenv.config({ path : './config/config.env'})

//load models(get bootcamps schema)
const Bootcamp = require('./models/Bootcamp')
const Course = require('./models/courses')
 

// connect to DB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false,
    useUnifiedTopology: true 
});

// parse JSON file
const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json` , 'utf-8'));
const courses  = JSON.parse(fs.readFileSync(`${__dirname}/_data/courses.json`, 'utf-8'))
// Import into DB
const importData = async () =>{
    try{
        await Bootcamp.create(bootcamps)
        await Course.create(courses);
    console.log('Data imported....')
    process.exit()
} catch(err) {
    console.log(err)
}
    
}

// Delete data 

const deleteData = async () =>{
    try{
        await Bootcamp.deleteMany()
        await Course.deleteMany();
        console.log('Data removed....');
        process.exit()
    }catch(err){
        console.log(err)
    }
}

if(process.argv[2] === '-i'){
    importData();
}
else if(process.argv[2] === '-d'){
    deleteData()
}

