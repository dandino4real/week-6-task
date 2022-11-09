"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controllers/controller");
const authMiddleware_1 = require("../middleware/authMiddleware");
// const app = require('../app');
// import app from '../app';
const router = express_1.default.Router();
/* GET users listing. */
router.get('/', authMiddleware_1.isLoggedIn, controller_1.getProducts);
router.get('/seeproducts', controller_1.getProductsN);
router.get('/register', controller_1.getRegisterPage);
router.get('/login', controller_1.getLoginPage);
router.get('/products/delete/:id', authMiddleware_1.isLoggedIn, controller_1.getProductToDelete);
router.get('/update/', authMiddleware_1.isLoggedIn, controller_1.getUpdatePage);
router.get('/update/:id', authMiddleware_1.isLoggedIn, controller_1.getUpdatePageById);
router.get('/logout', controller_1.logout);
router.get('/add', authMiddleware_1.isLoggedIn, controller_1.getAddProductPage);
router.post('/add', authMiddleware_1.isLoggedIn, controller_1.addProduct);
router.put('/update/', authMiddleware_1.isLoggedIn, controller_1.updateProductDetails);
router.post('/register', controller_1.registerUser);
router.get('/:id', authMiddleware_1.isLoggedIn, controller_1.getProductsById);
router.delete('/delete/:id', authMiddleware_1.isLoggedIn, controller_1.deleteProductDetails);
router.post('/login', controller_1.loginUser);
exports.default = router;
//# sourceMappingURL=user.js.map