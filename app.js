const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//@ts-ignore
const catchAsync = require('./utilities/catchAsync')
const ExpressError = require('./utilities/expressErrors')
const ejsMate = require('ejs-mate');
const Campground = require('./models/campground');
const methodOverride = require('method-override')
// const { db } = require('./models/campground');


const db = mongoose.connection;

mongoose.connect('mongodb://127.0.0.1:27017/Yelpcamp')
db.on("error",console.error.bind(console, "connection error")); //apends the string to the error
db.once("open", ()=>{
    console.log("Database Connected")
}) //works only once the database connection successfully opens

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


app.engine('ejs', ejsMate)
app.set('view engine','ejs')
app.set('views',path.join(__dirname, 'views'));

app.get('/',(req,res) =>{
    res.render('home')
})

app.get('/campgrounds',catchAsync(async (req,res)=>{
    const campgrounds = await Campground.find({})
    res.render('campgrounds/index', {campgrounds})
}) )

//new campground route
app.get('/campgrounds/new',(req,res) =>{
    res.render('campgrounds/new')
})


app.post('/campgrounds', catchAsync( async (req,res,next) =>{
        if(!req.body.campground) throw new ExpressError('Invalid Campground Data', 400) //this throw a new error which is caught 
        //by the catchAsync and passed to the next error handler   
        const campground = new Campground(req.body.campground)
    await campground.save()
    
    res.redirect(`/campgrounds/${campground._id}`)
    
    })
)

//show route
app.get('/campgrounds/:id', catchAsync(async (req,res) =>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/show', {campground})
})) 


app.get('/campgrounds/:id/edit', catchAsync(async (req,res)=>{
    const campground = await Campground.findById(req.params.id)
    res.render('campgrounds/edit', {campground})
}))

app.put('/campgrounds/:id', catchAsync(async (req,res)=>{
    const {id} = req.params;
    const campground = await Campground.findByIdAndUpdate(id, {...req.body.campground})
    res.redirect(`/campgrounds/${campground._id}`)
 }))

app.delete('/campgrounds/:id',catchAsync( async (req,res) =>{
    const {id} = req.params
    await Campground.findByIdAndDelete(id)
    res.redirect('/campgrounds')
}))

//applies for all types of requests and '*' for all paths, it triggers if none the above error handlers are triggered
app.all('*',(req,res,next) =>{
    next(new ExpressError('Page not found',404))
})


app.use((err,req,res,next) =>{
    const { statusCode = 500, message = 'Something went wrong'}=err;
    //this line extracts the properties statuscode and message from err object
    res.status(statusCode).render('error');
})

app.listen(3000, ()=>{
    console.log('Serving on port 3000')
})