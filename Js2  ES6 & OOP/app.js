/*
const s1='Hello World';
console.log(typeof s1);

const s2= new String('Hello World')
console.log(typeof s2);
*/

//Dom Object
/*
console.log(window);
window.alert('Hello ')
*/
//console.log(navigator.appVersion);


//object literals
/*
const bookInfo={
        title:'Book One',
        author:'Rakib',
        year:2020,
        getSummary:function(){
            return `${this.title} was written by ${this.author} at ${this.year}`
        }
}
//console.log(bookInfo.getSummary());
//console.log(Object.values(bookInfo));
//console.log(Object.keys(bookInfo));

*/

//constructor
/*
function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year
    this.getSummary=function(){
        return `${this.title} was written by ${this.author} at ${this.year}`
    }

}
//instatiate an object
const book1=new Book('BookOne','Rakib',2020)  
const book2=new Book('BookTwo','Shihab',2021)

//console.log(book1);
//console.log(book1.getSummary());
//console.log(book1.title);

*/

//prototype
/*
function Book(title,author,year){
    this.title=title
    this.author=author
    this.year=year
}
//getSummaryPrototype
Book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} at ${this.year}`      //ex-1
}

// getAgePrototype
//its give us just a number of years that have passed since the book was created
Book.prototype.getAge=function(){
    const years = new Date().getFullYear() - this.year
    return `${this.title} is ${years} years old`
}

//Revise // Change the Year
//Manipulate The data
Book.prototype.revise=function(newYear){
    this.year=newYear
    this.revised=true
}





//istitiate the object
const book1=new Book('BookOne','Rakib',2020)
const book2=new Book('BookTwo','Shihab',2010)

//console.log(book1.getSummary());
//console.log(book2);

//console.log(book2.getAge());


//console.log(book2);
//book2.revise(2010)
//console.log(book2);

*/


//Inheritance
/*
function book(title,author,year){
        this.title=title
        this.author=author
        this.year=year
}
//get summary
book.prototype.getSummary=function(){
    return `${this.title} was written by ${this.author} at ${this.year}`
}

//Magazine constructor
function magazine(title,author,year,month){     
        book.call(this,title,author,year,month)
        this.month=month
}
//if we want to print summary in megazine
magazine.prototype=Object.create(book.prototype)

//use magazine constructor
magazine.prototype.constructor=magazine;
//instiate the obj
const mag1=new magazine('MagOne','Rakib','2020','jan')

console.log(mag1);
*/


//object.create()

//object of protos
/*
const bookProtos={
    getSummary:function(){
        return `${this.title} was written by ${this.author} at ${this.year}`
    },
    getAge:function(){
        const years=new Date().getFullYear-this.year
        retrun `${this.title} is ${years} old`
    }
}
const book1=Object.create(bookProtos)
book1.title='Book One'
book1.author='Rakib'
book1.year='2020'

console.log(book1);
*/



//ES6 classes
/*
class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    //method declaration
    getSummary(){
        return `${this.title} was written by ${this.author} at ${this.year}`
    }
    getAge(){
        const years=new Date().getFullYear()-this.year
        return `${this.title} is ${years} old`
        
    }
    revise(newYear){
        this.year=newYear
        this.revise=true  
    }
}
const Book1=new Book('BookOne','Rakib',2020)
console.log(Book1);
Book1.revise('2010')
console.log(Book1);
*/

//subclasses
/*
class Book{
    constructor(title,author,year){
        this.title=title
        this.author=author
        this.year=year
    }
    //method declaration
    getSummary(){
        return `${this.title} was written by ${this.author} at ${this.year}`
    }
    
    class Magazine extends Book{
        constructor(title,author,year,month){
            super(title,author,year)
                this.month=month 
            }
        
    }
    //institate magazine 
    const mag1=new Magazine('MagOne','Rakib','2010','Jan')
    console.log(mag1);
    */