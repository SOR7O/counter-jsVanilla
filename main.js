import './style.css';
function main(){

    const counterElement= document.getElementById("counter");
    const btnIncrement = document.getElementById("increment");
    const btnDecrement = document.getElementById("decrement");
    let counter=0;
    
    
    btnIncrement.addEventListener("click", () =>handleCounter("increment"));
    btnDecrement.addEventListener("click", () =>handleCounter("decrement"));
    
    function handleCounter(type){
        console.log(type)
        if(type === "increment"){
            counter++;
        }else{
            counter--;
        }
        counterElement.innerHTML = counter;
    }
}
document.addEventListener("DOMContentLoaded", main());