"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
async function main() {
    await mongoose_1.default.connect('mongodb+srv://vebubechukwu:82EegrfE4hsA9KtS@cluster0.odzhwy0.mongodb.net/Users');
}
exports.main = main;
