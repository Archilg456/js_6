"use strict";


let burgerBar = document.getElementById("burger_bar");
let ul__item = document.querySelector(".ul-item");


burgerBar.addEventListener("click", function(){
    
    ul__item.classList.toggle("newMenuBar");
} )



let ul = document.querySelector('.ul__item');
let inputItem = document.querySelector('.input-form');
let addbtn = document.querySelector('.item-add');
let deleteall = document.querySelector('.clearbtn');
let formElement = document.querySelector('.form-wrapper');

formElement.addEventListener('submit', function(event){
    event.preventDefault();
    let inputValue =  inputItem.value;
    if (inputValue == " "){
        return;
    }
    let li = document.createElement('li');
    let deleteBtn = document.createElement('i');
    deleteBtn.classList.add("fa-solid", "fa-trash");
    deleteBtn.addEventListener('click', function(){
        li.remove();
    })
    
    li.textContent = inputValue;
    li.appendChild(deleteBtn)
    ul.appendChild(li);
    inputItem.value = ' ';
})

deleteall.addEventListener('click', function(){
    ul.innerHTML = " ";
})