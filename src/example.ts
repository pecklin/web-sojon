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
import {sum, sub, multiply, divide} from "./calculator"
console.log(sum(3, 4), sub(4, 3), multiply(2, 2), divide(3, 2));
