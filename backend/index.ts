require('dotenv').config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'express';
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/admin',adminRoutes);
app.use('/user',userRoutes);


mongoose.connect((process.env.MONGO_URL || ""))
.then(() => {
    app.listen(process.env.PORT,() => {
        console.log('Listening to port 3000')
    });
});
   


