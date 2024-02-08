import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js'

dotenv.config();


// albertolance2080
// F3MCqKhIRULDozRD
mongoose.connect(process.env.MONGO).
then(() => {
    console.log('MongoDb is connected');
}).catch(err => {
    console.log(err);
});
const app = express();

app.listen(3000, () => {
    console.log('Server is running on part 3000');
});


//Creating Routes

app.use('/api/user', userRoutes)