// 일반 라이브러리 import 방법
import _ from "lodash";

const arr = _.fill(Array(10), 4)
console.log(arr);


// export 방식을 이용한 module import 방법
// import {debug, error, log}  from "./logger"
import { debug, error, log } from "./logger";

debug("This is debug!");
log("This is log!!");
error("This is error!!!");

// export default 방식을 이용한 module import 방법
import * as calc from "./calculator"
console.log(calc.sum(3, 4), calc.sub(4, 3), calc.multiply(2, 2), calc.divide(3, 2));
