const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const app=express()
const cors=require('cors')
require('./DBconn/conn')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.json("home");
})
app.use('/api/genre',require('./routes/genreRoute'))
app.use('/api/movie',require('./routes/movieRoute'))
app.use('/api/producer',require('./routes/producerRoute'))
app.use('/api/actor',require('./routes/actorRoute'))
app.use('/api/user',require('./routes/userRoute'))
app.use('/api/cinema',require('./routes/cinemaRoute'))
app.use('/api/screen',require('./routes/screenRoute'))
app.use('/api/current-movie',require('./routes/currentMovieRoute'))


app.listen(5000,()=>{
    console.log("run server on http://localhost:4000");
})