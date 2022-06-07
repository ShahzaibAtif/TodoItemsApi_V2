"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SEED_DATA_LIMIT = exports.Task_Pagination_Limit = exports.NGROK_URI = exports.GOOGLE_CLIENT_SECRET = exports.GOOGLE_CLIENT_ID = exports.JWT_SECRET = exports.port = void 0;
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
exports.port = port;
const JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_SECRET = JWT_SECRET;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
exports.GOOGLE_CLIENT_ID = GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
exports.GOOGLE_CLIENT_SECRET = GOOGLE_CLIENT_SECRET;
const NGROK_URI = process.env.NGROK_URI;
exports.NGROK_URI = NGROK_URI;
const Task_Pagination_Limit = process.env.Task_Pagination_Limit;
exports.Task_Pagination_Limit = Task_Pagination_Limit;
const SEED_DATA_LIMIT = process.env.SEED_DATA_LIMIT;
exports.SEED_DATA_LIMIT = SEED_DATA_LIMIT;
//# sourceMappingURL=Config.js.map