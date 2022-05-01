const num= document.querySelector('.num1');
const num2= document.querySelector('.num')
const plus=document.getElementById('plus');
const minus= document.querySelector('#minus');
const plus2= document.querySelector('#plus2')
const minus2= document.querySelector('#minus2')
const total=document.getElementById("total");
const form= document.querySelector('form')

let count1= 1;
let count2= 1

plus.addEventListener('click', Add)
minus.addEventListener('click', subtract)

function subtract(){
    console.log("clicked");
    if (count1 > 1){
     count1--;
     console.log(count1);
    num.innerHTML=`${count1}`
}


}
function Add(){
    console.log("clicked");

     count1++;
     console.log(count1);
    num.innerHTML=`${count1}`
    total.innerHTML=`$${Math.round(54.99 * count1 + 74.99 * count2 + 19)}`

}
plus2.addEventListener('click', Add1)
minus2.addEventListener('click', subtract1)

function subtract1(){
    console.log("clicked");
    if (count2 > 1){
     count2--;
     console.log(count2);
    num2.innerHTML=`${count2}`
}


}
function Add1(){
    console.log("clicked");

     count2++;
     console.log(count2);
    num2.innerHTML=`${count2}`
    total.innerHTML= `$${ Math.round(54.99 * count1 + 74.99 * count2 + 19)}`

}
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    alert('thank you for shopping with us')
    
}


)
