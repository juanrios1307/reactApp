const mongoose=require('mongoose')

//const mongouri='mongodb+srv://Juanrios:elprimero@cluster0.lhtsk.gcp.mongodb.net/pets?retryWrites=true&w=majority'
const mongouri=process.env.DB_URI


mongoose.connect(mongouri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db=>console.log('conected prueba'))
    .catch(error=>console.log(error))

module.exports=mongoose



