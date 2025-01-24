let list=document.getElementById("menu-list");
let open=document.getElementById("nav-icon");
let close=document.getElementById("nav-close");



open.addEventListener('click',()=>{
    list.style.display='block';
    close.style.display='block';
    open.style.display='none';
});

close.addEventListener('click',()=>{
    list.style.display='none';
    open.style.display='block';
    close.style.display='none';
});

/*let slide = document.querySelectorAll('.projet-box');


var start = 0;
slide.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
);


let goprev = () => {
    start--
    slideimg()
}
let gonext = () => {
    start++
    slideimg()
}
let slideimg = () => {
    slide.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${start* 100}%)`
        }
    )
};*/

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween:50,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });






/*let scrollContainer=document.querySelector('.project-info');
let backBtn=document.getElementById('back-photo');
let nextBtn=document.getElementById('next-photo');



nextBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior ='smooth';
scrollContainer.scrollLeft += 350;
});

backBtn.addEventListener('click',()=>{
    scrollContainer.style.scrollBehavior ='smooth';
    scrollContainer.scrollLeft -= 350;
    });*/


/*function Odd(number){
    let rem = number % 2;
    let Odd=rem==1;
    return Odd;
}
console.log(Odd(5));
console.log(Odd(8));
function OddEven(number){
    if(number %2 ==0){
        return 'Even'
    }else{
        return'odd'
    }
}
console.log(Odd(10));
console.log(Odd(5));


let product={
    cumpany:'Amazon.in',
    item:'Laptop',
    price:35000,
    displyPrice(){
        console.log(`this is the price of your chosen iten ${this.price}`);
    }
};
product.displyPrice();



let a={num:8};
let b={rum:8};
console.log(num==rum);


D structureing---->
let product={
    cumpany:'maicrosoft',
    item:'software',
    price:800,
}
console.log(product);
let{cumpany,item,price}=product;
console.log(cumpany);
console.log(item);
console.log(price); */


/*---function create and delete also---
let india={
    cuntery:'Bharat',
    capital:'Delhi',
    gdp:'4 Trillion',
    rank:'3',
    popliction:'1.4 billions',
printDtls(){
    console.log(`cuntery name:${this.cuntery}`);
    
}
};
console.log(india.rank);
//india.printDtls();
delete india.rank;
console.log(india.rank);
console.log(india);*/

/*----whoudth decler value get (scince)
let empire={
    cuntery:'india',
    capital:'delhi',
    gdp:'88 trillions',
    'scince':'0.1'
  
}
console.log(empire['scince']);
//jeson//
let product={
    cumpany:'Amazon',
    item:'phone',
    price:55,

rating:{
    stars:5.5,
    review:800,
},

};
console.log(product);
console.log( typeof product);
//to covert into string//
let str=JSON.stringify(product);
console.log(str);
console.log( typeof str);
//convert into an object//
let obj=JSON.parse(str);
console.log(obj);
console.log( typeof obj);*/
//local storage :local storege use to save key and value when you refress the page or somthing happng still your data will be save parmanantely//

//localStorage.setItem('Name','rudra');

//localStorage.setItem('age','78 yr');
//console.log(localStorage.getItem('Name'));
//console.log(localStorage.getItem('age'));
/*let product={
    color:'green',
    outfit:'shose',
    rating:{
        stars:5,
        price:800,
    },
};
//console.log(product);
localStorage.setItem('product',JSON.stringify(product));
console.log(localStorage.getItem('product'));
let product2=JSON.parse(localStorage.getItem('product'));
console.log(product2);*/
/*let product={
    item:'phone',
    brand:'apple',
    price:'30000$',
    rating:{
        review:5000,
        lunch:2027,
        model:'i pone 20|pro max',
    },
};
localStorage.setItem('product',JSON.stringify(product));
console.log(localStorage.getItem('product'));
let product2=JSON.parse(localStorage.getItem('product'));
console.log(product2);
/*indivisul remove from localstroge
localStorage.removeItem('price');
localStorage.clear();*/
let mydate= new Date();
console.log(mydate);
