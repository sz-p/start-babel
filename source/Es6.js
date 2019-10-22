//类 class
class Es6Class {
  constructor(name, type) {
    this.version = 'ES2015'
    this.name = name;
    this.type = type;
  }
  sayHello() {
    console.log(`hello: ${this.name} here is ${this.version}`);
  }
}
Es6Class.prototype.transform = function (code) {
  console.log('transformed code');
}

class ES2016 extends Es6Class {
  constructor(name, type) {
    super(name, type);
    this.version = 'ES2016';
  }
}
let es6Class = new Es6Class('es6', 'test');

// 箭头函数 arrow-functions
const arrowFunctions = () => {
  console.log('arrowFunctions');
}


// 块级作用域 block-scoped-functions
function blockScopedFunctions() {
  function setPI() {
    const PI = 3.14;
    PI = 3;
    // TypeError: Assignment to constant variable.
  }
  for (let i = 0; i < 10; i++) {
    console.log(i);
  }
  console.log(PI);
  // Uncaught ReferenceError: PI is not defined
  console.log(i);
  // ReferenceError: i is not defined
}
//解构 destructur
const destructurObj = { name: 'test', value: 'es6', time: '2019-10-22', timeList: ['2019', '10', '22'] }
const { name, value } = destructurObj;
const [year, month, day] = destructurObj.timeList;
console.log(name);
console.log(value);
console.log(year);
console.log(month);
console.log(day);

// for-of
for (let key in es6Class) {
  console.log(key);
}