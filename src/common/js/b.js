/**
 * Created by farben on 17/4/10.
 */
// import parent from './a.js'
// console.log(parent);
 //通过import获取a.js文件的内部变量，{}括号内的变量来自于a.js文件export出的变量标识符。
 import {echo} from "./a.js"
 console.log(echo)   // boy
 echo(sex) // boy
