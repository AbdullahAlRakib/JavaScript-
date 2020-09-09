//single Element 
//console.log( document.getElementById('my-form'));

//const form =document.getElementById('my-form')
//console.log(form);

//console.log(document.querySelector('.container'));
//console.log(document.querySelector('h1'));

//console.log(document.querySelectorAll('.item'));
//console.log(document.getElementsByClassName('item'));
//console.log(document.getElementsByTagName('li'));
/*
const items=document.querySelectorAll('.item')
items.forEach((item)=>console.log(item));
*/


//Dom Manipulating 
/*
const ul=document.querySelector('.items')
//ul.remove() //all items remove 
//ul.lastElementChild.remove() //last items remove 
//ul.firstElementChild.textContent='Hello' // making new text 
//ul.children[1].innerText='Rakib ' // changing text with indexing Array
//ul.lastElementChild.innerHTML='<h1>Hello World</h1>' // using html tag 
*/


//using Css
/*
const btn=document.querySelector('.btn')
btn.style.background='red'
*/


//Events 

/*
const btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{  // in click we can use mouseover for 'hover' and mouseout  
    e.preventDefault()
    //console.log('click');//click will be show in console
    //console.log(e); 
    //console.log(e.target);
   // console.log(e.target.className );// class name will be print in console 
   //document.querySelector('#my-form').style.background='#ccc' //changing form background color 
   //document.querySelector('body ').classList.add('bg-dark') //changing whole background color 
   document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello Js </h1>' // clicking btn printing in items section   
})
*/