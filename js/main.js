'use strict';

let sliderWidth = document.querySelector("#slider").clientWidth;
let sliderLength = document.querySelectorAll("#slider li").length;
let sliderUl = document.querySelector("#slider ul");
// console.log(sliderLength);
let mySlideWidth = sliderLength * sliderWidth;
// console.log(mySlideWidth);
sliderUl.style.width = mySlideWidth + "px";
let next=document.querySelector(".next")
let prev=document.querySelector(".prev")
let c = 0;
next.onclick=function(){
    clearInterval(myInt)
    myNextSlider()
    
}
prev.onclick=function(){
    myPrevSlider()
    clearInterval(myInt)

}
function myNextSlider() {
  c++;
  if (c == sliderLength) {
    c = 0
  }
  sliderUl.style.left = -(c * sliderWidth) + "px";
}
function myPrevSlider(){
    c--;
    if(c==-1){
        c=sliderLength-1;
    }
  sliderUl.style.left = -(c * sliderWidth) + "px";
    
}

 var myInt=setInterval(myNextSlider, 2000);

