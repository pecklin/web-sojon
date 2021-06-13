"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 일반 라이브러리 import 방법
const lodash_1 = __importDefault(require("lodash"));
const arr = lodash_1.default.fill(Array(10), 4);
console.log(arr);
// export 방식을 이용한 module import 방법
// import {debug, error, log}  from "./logger"
const logger_1 = require("./logger");
logger_1.debug("This is debug!");
logger_1.log("This is log!!");
logger_1.error("This is error!!!");
// export default 방식을 이용한 module import 방법
const calculator_1 = require("./calculator");
console.log(calculator_1.sum(3, 4), calculator_1.sub(4, 3), calculator_1.multiply(2, 2), calculator_1.divide(3, 2));
