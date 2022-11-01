"use strict"

const mainTextBlock = document.querySelectorAll('.main__text-block');
const mainText = document.querySelectorAll('.main__text');
const subText = document.querySelectorAll('.main__subtext');
const arrow = document.querySelectorAll('.main__arrow');
let checkTrue = [true, true, true, true, true]


for(let i = 0; i < mainTextBlock.length; i++){
    mainTextBlock[i].addEventListener('click', (event) => {
        if(checkTrue[i]){
            mainText[i].style = "font-weight: 700"
            subText[i].style.display = "block"
            arrow[i].style.transform = 'rotate(180deg)'
            checkTrue[i] = false
        } else {
            mainText[i].style = "font-weight: 400"
            subText[i].style.display = "none"
            arrow[i].style.transform = 'rotate(0deg)'
            checkTrue[i] = true;
        }
    });
}


