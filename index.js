let count = 0;

// declaring
let displayElement = document.getElementById("display");
let increaseButtonElement = document.getElementById("increment");
let decreaseButtonElement = document.getElementById("decrement");
let resetButtonElement = document.getElementById("reset");
// increment button increase by 1
// increment button decrease by 1
// no negative count in the counter

function increaseCount() {
    count++;
    displayElement.textContent = count;
}

function decreaseCount() {
    if (count !== 0){
        count--;
    }
    displayElement.textContent = count;
}

function resetCount() {
    count = 0;
    displayElement.textContent = count;
}
// Event Listeners methods takes two parameters
// for call back function
increaseButtonElement.addEventListener("click", increaseCount);
decreaseButtonElement.addEventListener("click",decreaseCount);
resetButtonElement.addEventListener("click", resetCount);

