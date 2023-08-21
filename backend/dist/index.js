"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoute = require('./routes/userRoutes');
const app = (0, express_1.default)();
app.use('/user', userRoute);
mongoose_1.default.connect((process.env.MONGO_URL || ""))
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listening to port 3000');
    });
});
