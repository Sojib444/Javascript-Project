"use strict";




var result=document.querySelector(".para");


document.querySelector(".select").addEventListener("click",function()
{
    result.classList.remove("para");
})

document.querySelector(".button").addEventListener("click",function()
{
    result.classList.add("para");
})


