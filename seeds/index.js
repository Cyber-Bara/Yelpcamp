const mongoose = require('mongoose')
const Campground = require('../models/campground');
const cities = require('./cities');
const { descriptors,places } = require('./seedHelpers');

const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/Yelpcamp')
db.on('error',console.error.bind(console, "connection error:"));
db.once('open',()=>{
    console.log("Database connected");
})


const sample = array => array[Math.floor(Math.random()*array.length)]


const seedDB = async () =>{
    await Campground.deleteMany({});//deletes all the contents of the database
    for( let i=0;i<30;i++){
        const random20 = Math.floor(Math.random()*30)
        const price = Math.floor(Math.random()*100)+30
        const camp =new Campground({
            location: `${cities[random20].city}, ${cities[random20].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: `https://picsum.photos/400?random=${Math.random()}`,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus malesuada elit, non suscipit urna fermentum a. Donec faucibus, nunc non fermentum tincidunt, lectus purus tincidunt dolor, vitae vehicula risus dui nec orci. Quisque et orci nec sapien tincidunt sodales. Nulla facilisi. Curabitur dapibus malesuada diam, sit amet fermentum libero viverra quis. Ut aliquam libero non ante tincidunt facilisis. Etiam vel ante felis. In a nunc et turpis vestibulum tristique. Phasellus pharetra elit velit, eget scelerisque ex ultr',
            price
        })
        await camp.save();
    }
    
   
}



seedDB().then(() => {
    mongoose.connection.close()
}) //Rememnber async funcitons reutrn promise






