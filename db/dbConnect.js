import mongoose from 'mongoose'

// const db = mongoose.connect('mongodb://127.0.0.1:27017').then(()=>{
//     console.log("DB is connected");
// })

const mongoDB = async ()=>{

    await mongoose.connect('mongodb://127.0.0.1:27017/new').then(()=>{console.log("DB connected");})
    // const db = mongoose.connection




}


export default mongoDB