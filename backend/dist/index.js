"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_2 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, express_2.default)());
app.use('/admin', adminRoutes_1.default);
app.use('/user', userRoutes_1.default);
mongoose_1.default.connect((process.env.MONGO_URL || ""))
    .then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Listening to port ', process.env.PORT);
    });
});
