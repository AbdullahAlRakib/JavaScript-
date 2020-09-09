//NAN=Not a Number 

//Printing Hello World
//alert('Hello world');
//console.log('Hello World');
//document.write('Hello World);
//console.error('This is an error');
//console.warn('This is an warning')


// variable
/*
let age=25;
age=26;
console.log(age); // using var and let variable will be conflict

const age =30;
age=32;
console.log(age);  //but in const will not conflict 

const a =10;
const b=10
const c=a+b
console.log(c);
*/



//DataTypes
//strings,Number,Boolean,Null,Symbol,undefined
/*
const name='john'
const age=30
const isTrue=true
const c=null
const x =undefined
//const  x; // also undefined 
//console.log(typeof name);
//console.log(typeof age);
//console.log(typeof isTrue);
//console.log(typeof c);
//console.log(typeof x);
*/

//concatanation
/*
const name ='John'
const age=30
//console.log('His name is '  +name+  'and age '+age);

//template string
//console.log(`his name is ${name} and age ${age}`);
*/

// string properties & Methods
/*
const s='hello world';
//console.log(s.length);
//console.log(s.toUpperCase());
//console.log(s.toLowerCase());
//console.log(s.substring(0,5)); // index number 0-5 so 0-5 is hello so it will print hello 
//console.log(s.substring(0,5).toUpperCase());
//console.log(s.split(''));// if want to make an array with index number 
*/


//Arrays -variables that holds multiple values 

//const numbers=new Array(1,2,3,4,5,6); // constructor array
//console.log(numbers );

/*
const fruits=['Apples','Oranges','Mango'];
console.log(fruits);// printing array
console.log(fruits[0]);//printing 0 number index element
fruits[3]='Grapes'   // added new value
fruits.push('Jackfruits'); //adding
fruits.pop();//remove last element
fruits.unshift('Strawberry')//adding at first 
console.log(fruits);
console.log(Array.isArray('hello')) // we can judge if this element which i search for (true /false)!!!!
*/


//Object Literals //how to make object
/*
const person={
    name:'John',
    age:30,
    hobbies:['Drawing','Gardening','Playing'],
    address:{
        city:'Booston',
        road:30
    }
}
person.email='info@gmail.com'
console.log(person);
console.log(person.name);
console.log(person.address.city);
*/


// arrays of objects & JSON 
/*
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true

    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompleted:true

    },
    {
        id:3,
        text:'Going to Gym',
        isCompleted:false 

    }
]
//console.log(todos);
//console.log(todos[1]);
//console.log(todos[1].text);

// convert to JSON and how we send data to server 
const todoJson=JSON.stringify(todos)
console.log(todoJson);
*/



// Loops

/*
for(let i=0;i<=10;i++){
    console.log(i); 
}
*/
/*
let i=0;
while (i<=15) {
    console.log(i);
    i++;  
}
*/
/*
const todos=[
    {
        id:1,
        text:'Take out trash',
        isCompleted:true

    },
    {
        id:2,
        text:'Meeting with Boss',
        isCompleted:true

    },
    {
        id:3,
        text:'Going to Gym',
        isCompleted:false 

    }
]
/*
for(todo of todos){
    //console.log(todo.text); // simple for loop 
    //console.log(todo); 
}
*/
/*
todos.forEach(function (todo) {
    //console.log(todo); // foreach loop
    console.log(todo.text);
    
    
})
*/
/*
todos.map(function(todo){
    //console.log(todo);
    //console.log(todo.text);    
})
*/
/*
todos.filter(function(todo){
    console.log(todo);
    console.log(todo.text);
    console.log(todo.text[0]);      
})
*/


//conditional
/*
let marks=10;
if(marks<=10){
    console.log('FAIL!!!!!');
    
}
else{
    console.log('PASS');
    
}
*/
/*
let color ='green';
switch (color) {
    case red:
        console.log('color is red');
        break;
        case black:
            console.log('color is black');
            break;
    default:
        console.log('no color is integrated');
         break;
}
*/

// functions
/*
function addition(n1,n2) {
    return n1+n2;
}
total=addition(5,5);
console.log(total);
*/

//Arrow Function
/*
const addition=(n1,n2)=>
    console.log(n1+n2);

addition(10,10)
*/




















