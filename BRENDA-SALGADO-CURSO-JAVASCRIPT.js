
console.log("hello from console!")
var x= 10;
var x =100;
document.write(x);
var x=100;
  console.log(x);

  x= 42;
  console.log(x);
  var x= 100;
  document.write(x);
  // this is a single line comment
      alert("this is an alert box!");
   /*this code
   creates an
   alert box*/
   alert("this is an alert box!");
var num= 42;// A number without decimals
var price = 55.55; // A number with decimals 
document.write(price);
var name = 'Brenda';
var text = "My name is Brenda Salgado";
var text = "My name is 'Brenda' ";
var sayHello= 'Hello world!/ '/' ';
document.write(sayHello);
var isActive = true;
var isHoliday = false;
var x =10 + 5;
document.write(x);
var x = 10;
var y= x + 5 + 22 + 45 + 6548;
document.write(y);
var x = 10 * 5;
document.write(x);
var x = 100/5;
document.write(x);
var myVariable = 26 % 6;
var num = 10;
// num==8 will return false
(4 > 2) (10 < 15)
variable = (condition) ? value1: value2
var isAdult =(age<18) ? "too young": "old enough";
var mystring1 = "I am learning";
var mystring2 = "JavaScript with Sololearn";
document.write(mystring1 + mystring2);
if (condition) {
    statements
}
var myNum1 =7;
var myNum2 =10;
if (myNum1< myNum2){
    alert("javaScript is easy to learn")
}
var myNum1 =7;
var myNum2 =10;
if (myNum1 > myNum2){
    alert("JavaScript is easy to Learn");
}
if (expression){
    // executed if condition is true
}
else {
    // executed if condition is false 
}
var myNum1 =7;
var myNum2=10;
if (myNum1 > myNum2){
    alert ("This is my firs condition");
}
else {
    alert ("this is my secod condition");
}
vat (course =1);
if(coursev==1) {
    document.write("<h1>HTML tutorial</h1>");
} else if (corse==2){
    document.write("<h1>CSS tutorial</h1>");
} else {
    document.write ("<h1> JavaScript tutorial</h1>");
}
var course =3;
if (course ==1) {
    document.write ("<h1>CSS tutorial</h1>");
} else if (course ==2){
    document.write("<h1>CSS tutorial</h1>");
}else {
    document.write("<h1> javaScrip Tutorial</h1>");
}
switch (expression) {
    case n1:
        statements
        break;
    case n2:
        statements
        break;
    default:
        statements
}
var day =2;
switch (day) {
    case 1:
        document.write("Monday")
        break;
    case 2:
            document.write("tuesday");
            break;
    Case 
    document.whire("wednesday");
        break;
    default:
        docyument.write("another day");
    }
var color ="yellow";
switch(color) {
    case "blue":
        document.write("this is blue");
        break;
    case "red":
        document.write("this is blue");
        break;
    case "red"
    document. write ("This is red");
        break;
    case "green":
        document.write("this is green");
        break;
    case "orange":
    document.write("this is orange");
         break;
     default:
        document.write ("color not found");
}
for (statement, statement, statement,  {
    code 
}
for (i=1; i<=5 i++) {
    document.write(i + "<br />");
}
var i = 1;
for (; i<5; i++) {
    document.write (i +"<br /> ")
}
for (i=1, text= " "; i<=5; i++) {
    text = i;
    document.write (i + "<br />");
}
var i = 0;
for (; i < 10;) {
    document.write(i);
    i++;
}
while (condition) {
    code 
}
var i=0;
while (i<=10) {
    document.write (i + "<br />");
    i++;
}
do {
    code 
}
while (condition);
var i=20;
do{
    document.write(i + "<br />");
    i ++;
}
while (i<=25);

for (i= 0; i <= 10; i++) {
    if (i==5) {
        break;
    }
    document.write(i + "<br />");
}
for (i =0; i<= 10; i++) {
    if (i ==5) {
        continue;
    }
    document.write(i + "<br />");
}
funtion (name) ()
    //code to be executed

function myFunction () {
    alert("calling a function");
}

myFunction ()
    alert("Alert box");


myFunction();
//"Alert box!"

// some other code

myFunction();
//"Alert box!"
funtionName(param1, param2, param3)
    // some code

function sayHello(name) {
    alert("hi, " + name);
}

sayHello("David");
function sayHello(name) {
    alert("hi, "+ name );
}
sayHello("David");
sayHello("Sarah");
sayHello("John");
function myFunction(x, y) {
    // some code
}
function sayHello(name, age) {
    document.write( name + "is" + age+ "years old");
}
function sayHello(name, age){
    document.write(name + "is"+ age+"years old");
}

sayHello("John", 20)
function myFunction(a,b){
    return a * b;
}

var x =myFunction(5,6);
// return value will end up in x
function addNumbers(a,b) {
    var c= a+b;
    return c;
}
document.write( addNumbers(40,2) );
alert("do you really want to leave this page?");
alert("Hello/nHow are you?");
var user = prompt("please enter your name");
alert(user);
var  result = confirm("do you really want to leave");
if(result==true) {
    alert("thanks for visiting");
}
else {
    alert("thanks for staying with us");
}
var person ={
    name: "John",age: 31,
    favColor: "green",height:183
};
ObjectName.propertyName
//or
ObjectName['propertyName']
var person ={
    name: "John", age: 31,
    favColor:"green", height: 183
};
var x =person.age;
var y =person['age'];
var course ={name:"JS",lessons: 41};
document.write(course.name.length);
ObjectName.methodName()
document.write("This is some text");
var person ={
    name: "John", age: 42, favColor: "green"
};
function person(name, age, color) {
    this.name=name;
    this.age= age;
    this.FavColor;
}
var p1=new person ("Jhon", 42,"green");
var p2=new person("amy", 21, "red");

document.write(p1.age); // outputs 42
document.write(p2.name);// outputs "amy"
function person (name, age) {
    this.name = name;
    this.age =age;
}
var Jhon =new person ("Jhon", 25);
var James= new person("James",21);
var Jhon ={name:"Jhon",age: 25};
var James={name: "James",age: 21};
var John ={
    name: "John",
    age: 25
};
var James= {
    name: "James",
    age: 21
};
document.write(Jhon.age);
menthodName=function() {code}
objectNames.methodName()
function person (name, age){
    this.name= name;
    this.age=age;
    this.changeName=function (name){
        this.name=name;
    }
}
var p= new person("David",21);
p.changeName("John");
//Now p.name equals to "John"
function person(name, age){
    this.name;
    this.age;
    this.year0fBirth = bornYear;
}
function bornYear() {
    return 2016 - this.age;
}
function person(name, age) {
    this.name= name;
    this.age= age;
    this.year0fBirth= bornYear;
}
function bornYear(){
    return 2016 - this.age;
}
var p= new person("A", 22);
document.write(p.year0fBirth());
Var = "html";
var course2="CSS";
var course3="JS";
var courses=new Array ("HTML","CSS","JS");
var courese=new Array("HTML","CSS", "JS");
var course= courses[0]; // HTML
course[1] = "C++"; //Changes the second elemnt
var courses= new Array("HTML","CSS","JS");
document.write(courses[10]);
var courses=new Array(3);
courses[0] ="HTML";
courses[1]="CSS";
courses[2]="JS";
var courses =new Array();
courses[0]="HTML";
courses[1]="CSS";
courses[2]="JS";
courses[3]="C++";
var courses =["HTML","CSS","JS"];
var courses=["HTML","CSS","JS"];
    document.write(courses.length);
var c1 =["HTML","CSS"];
var c2 =["JS","C++"];
var courses= c1.concat(c2);
var person =[];//empty array
person["name"]="John";
person["age"]=46;
document.write(personal["age"]);
var person =[]; //empty array
person["name"]="John";
person["age"]=46;
document.write (person["age"]);
document.write(Math.PI);
var number= Math.sqrt(4);
document.write(number);
var n= prompt ("enter a number", "");
var answer = Math.sqrt(n);
alert ("the square root of" + n + "is" + answer);
function myAlert(){
    alert("hi");
}
setInterval(myAlert, 3000);
var d = new Date();
//d stores the current date and time
new Date(milliseconds)
new Date(dateString)
new Date(year, month,day, hours,minutes, seconds,
 milliseconds)
 //Fri Jan 02 1970 00:00:00
var d1 = new Date(86400000); 

//Fri Jan 02 2015 10:42:00
var d2 = new Date("January 2, 2015 10:42:00");

//Sat Jun 11 1988 11:42:00
var d3 = new Date(88,5,11,11,42,0,0);
var d= new Date();
verhours=d.getHours();
// hours is equal to the current hour
function printTime(){
    var d= new Date();
    var hours = d.getHours();
    var mins =d.getMinutes();
    var secs=d.getSeconds();
    document.body.innerHTML= hours + mins+":"+ secs;
}
setInterval(printTime,1000);
document.body.innerHTML="some text";
//finds element by id
document.getElementById(id) 

//finds elements by class name
document.getElementsByClassName(name) 

//finds elements by tag name
document.getElementsByTagName(name)

var elem= document.getElementById("demo");
elem.innerHTML="hello world!";
var arr= document.getElementsByClassName("demo");
//accessing the second element
arr[1].innerHTML ="hi";

var node = document.createTextNode("Some new text");

var t= setInterval(move, 500);
// starting position
var pos = 0; 
//our box element
var box = document.getElementById("box");

function move() {
  pos += 1;
  box.style.left = pos+"px"; //px = pixels
}
var t = setInterval(move, 10);
function move() {
    if(pos >= 150) {
      clearInterval(t);
    }
    else {
      pos += 1;
      box.style.left = pos+"px";
    }
  }
  var pos =0;
  //our box elemnt
  var box = document.getElementById("box");
  var t = setInterval(move, 10);

  function move() {
      if(pos >=150){
          clearInterval(t);
      }
      else {
          pos +=1;
          box.style.left =+"px";
      }
  }
  <button onclick= ("show") > clickme <button>
  <scrip>
      function show() {
        alert("hi there")  
      }
  </scrip>

  var x=document.getElementById("demo");
  x.onclick=function() {
      document.body.innerHTML=Date();
  }
<bodyonloadm = ("doSomething)()">
 window.onload = function() {
     //some code
 }
<inputype (id=("name onchange=")(change))
<script>
function change() {
    var x= document.getElementById ("name");
    x.value= x.value.toUppercase();
}

Element.addEventListener (event, functionuseCapture);
element.addEventListener ("click", myFunction);
element.addEventListener ("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}
element.removeEventListener ("mouseover", myFunction
<button ("demo")
> Start 

<script> 
    varbtndocument.getElemntById("demo");
    btn.addEventListener("click",myFunction);
    
 function muFunction() {
    alert(Math.random())
    bnt.removeEventListener("click",myFunction);
    }
</script>

addEventListener(event, function useCapture)
//Capturing propagation
elem1.addEventListener("click", myFunction, true); 

//Bubbling propagation
elem2.addEventListener("click", myFunction, false);
<div>
    <button> prev </button>
    <img id= "slider"
src="http://www.netflix.com/uploads/slider/1.jpg"
     width="200px" height="100px"/>
     <button> next </button>
</div>
var images = [
    "http://www.netflix.com/uploads/slider/1.jpg",
    "http://www.netflix.com/uploads/slider/2.jpg",
    "http://www.netflix.com/uploads/slider/3.jpg"
];
<div>
  <button onclick="prev()"> Prev </button>
  <img id="slider" src="http://www.sololearn.com/uploads/slider/1.jpg" 
    width="200px" height="100px"/>
  <button onclick="next()"> Next </button>
</div>
var images = [
    "http://www.netflix.com/uploads/slider/1.jpg",
    "http://www.netflix.com/uploads/slider/2.jpg",
    "http://www.netflix.com/uploads/slider/3.jpg"
];
var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num++;
    if(num >= images.length) {
        num = 0;
}
slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if(num<o){
        num=images.length-1;
    }
    slider.src = images[num];
}
<form onsubmit="return validate()" method="post">
  Number: <input type="text" name="num1" id="num1" />
  <br />
  Repeat: <input type="text" name="num2" id="num2" />
  <br />
  <input type="submit" value="Submit" />
</form>
function validate () {
    var n1 = document.getElementById("num1");
    var n2 = document.getElementById("num2");
    if(n1.value != "" && n2.value != "") {
        if(n1.value==n2.value) {
            return true;
   }
}
alert("The values should be equal and not blank");
return false;
}
var a = 10;
const b = 'hello';
let c = true;
if (true) {
    let name= 'Jack';
}
alert(name); //generates an error
function varTest() {
    var x = 1;
    if (true) {
        var x = 2; // same variable
        console.log(x); //2
    }
    console.log(x);
}
function varTest() {
    var x = 1;
    if (true) {
        var x = 2 // same variable
        console.log(x); //2
    }
    console.log(x); //2
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2; // different variable
        console.log(x); //2
    }
    console.log(x); //1
}
for (let i = 0; i < 3; i++ ) {
    document.write(i);
}
const a = 'hello';
a = 'Bye';
let name = 'David';
let msg = 'welcome' + name + '!';
console.log(msg);
let name = 'David';
let msg = 'welcome $ {name}!';
console.log(msg);
let a = 8;
let b = 34;
let msg = 'the sem is ${a+b}';
console.log(msg);
let arr = [1,2,3];
for (let k= 0; k <arr.length; k++){
    console.log(arr[k]);
}
let obj ={a: 1, b: 2,c: 3};
for (let v in obj) {
    console.log(v);
}
let list = ["x","y","z"];
for (let val of list){
    console.log(val);
}
for (let ch of "hello"){
    console.log (ch);
}
function add(x, y){
    var sum = x+y;
    console.log(sum);
}
const add = (x, y)=> {
    let sum = x + y;
    console.log(sum);
}
const greet = x=> "welcome " + x;
const x =()=> alert("hi");
var arr =[2,3,7,8];

arr.forEach(function(el){
    console.log(el * 2);
});
const arr = [2,3,7,8];

arr.forEach(v =>{
    console.log(v * 2);
});
function test(a, b=3, c=42){
    return a + b + c;
}
console.log(test(5)); //50
const test= (a, b=3, c = 42)=> {
    return a + b + c;
}
console.log(test(5)); //50
let tree = {
    height: 10,
    color: 'green',
    grow() {
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height); //12
let height =5;
let health =100;

let athlete = {
    height,
    health
};
var a = {x: 1, x: 2, x: 3, x: 4};
let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop]: 'Jack',
    ['user_${id}']: '${mobile}'
};
var i= 0;
var a= {
    ['foo'+ ++i]: I,
    ['foo'+ ++i]: I,
    ['foo'+ ++i]: I
};
var param = 'size';
var config= {
    [param]: 12,
    ['mobile'+ param.charAt(0).toUpperCase() +
    param.slice(1)]: 4
};
console.log(config.mobileSize);
let person = {
    name: 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent =Object.assign({},person, student);
let person = {
    name: 'Jack',
    age: 18
};

let newPerson = person; // newPerson references person
newPerson.name = 'Bob';

console.log(person,name); // Bob
console.log(newPerson.name); //Bob
let person= {
    name: 'Jack',
    age: 18
};

let newPerson = object.assign({}, person);
newPerson.name ='Bob';

console.log(person.name); // Jack
console.log(newPerson.name); //Bob

let person ={
    name: 'Jack',
    age: 18
};

let newPerson= object.assing({}, person,{name:
'Bob'});

let arr = ['1', '2', '3'];
let [one, two, three]= arr;

console.log(one); //1
console.log(two); //2
console.log(three); //3

let a= () => {
    return [1, 3, 2];
};

let [one, , two] = a();

let a, b, c= 4, d= 8;
[a, b = 6]= [2]; // a= 2, b = 6

[c,d] = [d,c]; // c= 8, d =4

let obj = {h: 100, s: true};
let {h, s} =obj;

console.log(h); // 100
console.log(s); // true 

let a, b;
({a, b} = {a: 'hello', b: 'Jack'});

console.log(a + b); // Hello Jack

let {a, b} = {a: 'hello', b: 'Jack'};
console.log(a + b);

var o = {h: 42, s: true};
var {h: foo, s: bar} = o;

//console.log(h); //Error
console.log(foo); // 42

var obj = {id: 42, name: "Jack"};

let {id = 10, age= 20} = obj;

console.log(id); // 42
console.log(age); // 20

function containsAll(arr) {
  for (let k = 1; K < arguments.length; k++) {
    let num = arguments[K];
    if (arr.indexOf(num) === -1) {
        return false;
        }
    }
   return true;
}
let x = [2,4,6,7];
console.log(containsAll(x,2,4,7));
console.log(containsAll(x,6,4,9));

function containsAll(arr, ...nums){
    for (let num of nums){
        if (arr.idex0f(num)=== -1) {
            return false;
        }
    }
    return true;
}
function myFunction(w,x,y,z) {
    console.log(w + x + y + z);
}
var args= [1,2,3];
myFunction.apply(null, args.concat(4));

const myFunction = (w,x,y,z) => {
    console.log(w +x +y +z);
};
let args= [1,2,3];
myFunction(...args,4);

var dateFields =[1970, 0, 1]; //1 Jan 1970
var date = new Date(...dateFields);
console.log(date);

var arr = ["one","two", "five"];

arr.splice(2,0, "three");
arr.splice(3,0, "four");
console.log (arr);

let newArr = ['three','four'];
let arr= ['one','two', ...newArr, 'five'];
console.log(arr);

const obj1 = {foo: 'bar', x: 42};
const obj2 = {foo: 'baz', y: 5 };

const cloned0bj = {...obj1}; //{foo: "bar",x: 42 }
const merged0bj = {...obj1, ...obj2}; // { foo: "baz",
x: 42, y; 5 

const obj1 = { foo: 'bar', x: 42};
const obj2 = { foo: 'baz', y: 5};
const merge = (...objects) => ({...objects});

let merged0bj = merge(obj1, obj2);
// {0:{ foo: 'bar', x: 42}, 1: {foo: 'baz', y: 5}

let merged0bj2 = merge({}, obj1, obj2);
// {0: {}, 1: {foo: 'bar', x: 42}, 2:{foo: 'baz',
y: 5 

class rectangle {
    constructor(height, width){
        this.height = height;
        this.width =width;
    }
}
const square = new rectangle (5,5);
const poster = new rectangle (2,3);
var square = class rectangle {
    constructor(height,width) {
        this.height = height;
        this.width = width;
    }
};
class rectangle {
    constructor(height, width){
        this.height= height;
        this.width= width;
    }
    get area() {
        return this.calcArea();
    }
    calArea() {
        return this.height * this.width;
    }
}
const square= new rectangle(5,5);
console.log(square.area); //25
class point {
    constructor(x,y) {
        this.x = x;
        this.y =y;
    }
    static distance(a, b) {
        const dx = a.x- b.x;
        const dy = a.y- b.y;
        return Math.hypot(dx, dy);
      }
}
const p1 = new point(7,2);
const p2 = new point(3,8);

console.log(point.distance(p1, p2));

class animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(this.name + 'makes a noise');
    }
}
class dog extends animal {
    speak() {
        console.log(this,name + 'barks');
    }
}
let dog = new dog('rex');
dog.speak();
class animal {
    constructor(name) {
        this,name = name;
    }
    speak() {
        console.log(this.name + 'makes a noise');
    }
}

class dog extends animal {
    speak() {
        super.speak(); //super
        console.log(this.name + 'barks');
    }
}
let dog = new dog ('rex');
dog.speak();

let map = new map ([['k1', 'v1'],['k2','v2']]);

console.log (mao.size); //2

let map = new map();
map.set('k1','v1').set ('k2', 'v2');
console.log (map.get('k1')); // v1
console.log(map.has('k2')); //true

for (let kv of map.entries())
    console.log(kv[0] + ":" + kv[1]);

let set = new Set([1,2,4,2,59,9,4,9,1]);
console.log(set.size); //5

let set = new Set();
set.add(5).add(9).add(59).add(9);
console.log(set.has(9));
for (let v of set.values())
   console.log(v);

setTimeout(function() {
    console.log("work 1");
    setTimeout(funtion)();
       consolelog("Hola");
    }, 1000);
 1000;
console.log("End");

new Promise(function(resolve, reject) {
    // Work
    if (success)
        resolve(result);
    else
        reject(Error("failure"));
}); 

function asyncFunc(work) {
    return new Promise(function(resolve, reject){
        if (work ==="")
        reject(error("nothing"));
    setTimeout(function() {
         resolve(work);
    }, 1000);
  });
}
asyncFunc("work 1") // task 1
.then(function(result){
    console.log(result);
    return asyncFunc("work 2"); // Task 2
}, function(error) {
    console.log(error);
})
.then(function(result) {
    console.log(result);
}, function(error){
    console.log(error);
});
console.log("end");

let myIterableObj ={
    [Symbol.iterator]: function*(){
        yield 1; yield 2; yield 3;

console.log([...myIterableObj]);

function*idmaker() {
    letindex = 0;
    while(index<5)
      yield index++;
}
var gen = idMaker();
console.log(gen.next().value);

const arr =['0','1','4','a','9','c','16'];
const my_obj = {
    [symbol.iterator]: function*(){
        for(let index of arr) {
            yield '${index}';
        }
    }
};
const all = [...my_obj]
   .map(i =>parseInt(i, 10))
   .map(Math.sqrt)
   .filter((i) => i <5)
   .reduce((i, d) =>i + d);
console.log(all);

// lib/math.js
export ​let sum = (x, y) => { return x + y; }

export ​let pi = 3.14


// app.j

import * ​as math from "lib/mat"
console.log(`2p = + ${math.sum(math.pi, math.pi)}')

[4, 5, 1, 8, 2, 0].filter(function(x){
    return x > 3;
})[0];
[4, 5, 1, 8, 2, 0]find(x => x > 3);
[4, 5, 1, 8, 2, 0] findIndex(x => x > 3);
console.log(array(3 + 1))join("foo")); //foofoofoo
console.log("foo".repeat(3)); // foofoofoo
"soloLearn".indexOf("solo")=== 0; //true
"soloLearn".indexOf("Solo")===(4 - "solo".length);
// true
"soloLearn".indexOf("lole")!== -1; // true
"soloLearn".indexOf("olo", 1)!== -1; // true
"soloLearn".indexOf("olo", 2)!== -1; // false

"soloLearn".startsWith("Solo", 0); // true   
"soloLearn".endsWith("Solo", 4); // true   
"soloLearn".includes("lole"); // true   
"soloLearn".includes("olo", 1); // true  
"soloLearn".includes("olo", 2); // false

