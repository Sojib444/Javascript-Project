




function generate()
{
    let number=Math.floor(Math.random()*10+1);
    return number;
    
}

let High_score=0;

document.querySelector(".check").addEventListener("click",function()
{
    let Score=0;
    let result=Number(document.querySelector(".guess").value);
    let generate_random=generate();
    if(result==generate_random)
    {
        
        document.querySelector(".number").textContent=generate_random;
        document.querySelector('body').style.backgroundColor="rgb(142, 177, 77)";
        document.querySelector(".message").textContent="Congrats, Your value is matching....";
        Score=10;
        document.querySelector(".get").textContent=Score;
        
        High_score+=10;
        document.querySelector(".highscore").textContent=High_score;
    }
    else
    {
        
        document.querySelector(".message").textContent="Opps, Your value  doesn't matching....";
        document.querySelector(".get").textContent=Score;
    }

})