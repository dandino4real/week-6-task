"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const createDb_1 = __importDefault(require("../services/createDb"));
const router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    (0, createDb_1.default)(`${__dirname}/db.json`);
    res.render('index', { title: 'Express' });
});
module.exports = router;
