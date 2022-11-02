"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const createDb = (dataBasePath) => __awaiter(void 0, void 0, void 0, function* () {
    dataBasePath = dataBasePath || "./db/dataBasePath.json";
    if (fs_1.default.existsSync(dataBasePath))
        return console.log('Database exists');
    fs_1.default.writeFile(dataBasePath, JSON.stringify([], null, "  "), 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Database was created succesfully');
        }
    });
});
exports.default = createDb;
