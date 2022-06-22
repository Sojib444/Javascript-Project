
"use strict";
 const sum= (a,b)=>
{
    console.log(this)
    return a+b;
}
console.log(sum(10,20));