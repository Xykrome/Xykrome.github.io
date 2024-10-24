# 原生JS

JavaScript是一种动态的编程语言，广泛应用于网页开发中，主要用于增强网页的交互性和动态性。

## 第一题  parseInt 遇上 map

````md
```js{4}
 ["1", "2", "3"].map(parseInt)

// A. ["1", "2", "3"]
// B. [1, 2, 3]
// C. [0, 1, 2]
// D. other
```
````

答案是D。实际上返回的结果是 [1, NaN, NaN] ，因为 parseInt 函数只需要两个参数 parseInt(value, radix) ，而 map 的回调函数需要三个参数 callback(currentValue, index, array)。

MDN文档中指明 parseInt 第二个参数是一个2到36之间的整数值，用于指定转换中采用的基数。如果省略该参数或其值为0，则数字将以10为基础来解析。

如果该参数小于2或者大于36，则 parseInt 返回 NaN。此外，转换失败也会返回 NaN。

现在来分析问题。parseInt("1", 0) 的结果是当作十进制来解析，返回 1；parseInt("2", 1) 的第二个参数非法，返回 NaN；parseInt("3", 2) 在二进制中，"3" 是非法字符，转换失败，返回 NaN。
## 第二题  神鬼莫测之变量提升

```js
var name = 'World!';
(function () {
if (typeof name === 'undefined') {
var name = 'Jack';
console.log('Goodbye ' + name);
} else {
console.log('Hello ' + name);
}
})();
```

答案是A。看如下MDN官方文档的解释：

在 JavaScript中， functions 和 variables 会被提升。变量提升是JavaScript将声明移至作用域 scope (全局域或者当前函数作用域) 顶部的行为。

这意味着你可以在声明一个函数或变量之前引用它，或者可以说：一个变量或函数可以在它被引用之后声明。

所以，上面的代码与下面这段代码是等价的：

````js
var name = 'World!';
(function () {
var name;
if (typeof name === 'undefined') {
name = 'Jack';
console.log('Goodbye ' + name);
} else {
console.log('Hello ' + name);
}
})();
````

## 第三题  构造函数的函数
````
function f() {}
var a = f.prototype;
var b = Object.getPrototypeOf(f);
a === b;

// A. true
// B. false
// C. null
// D. other
````
答案是B。这个解释起来有点绕口，我们先来看另外一段代码：

````
function Person() {}
var p = new Person();

var a = p.__proto__;
var b = Object.getPrototypeOf(p);
var c = Person.prototype;
console.log(a === b, a === c, b === c);
// true, true, true

var d = Person.__proto__;
var e = Object.getPrototypeOf(Person);
var f = Function.prototype;
console.log(d === e, d === f, e === f);
// true, true, true
````
首先你要明白，任何函数都是 Function 的实例，而p是函数 Person 的实例，Object.getPrototypeOf 会获取构造当前对象的原型。所以 Object.getPrototypeOf(p) === Person.prototype，而 Object.getPrototypeOf(Person) === Function.prototype，所以答案就很明显了。

## 待续