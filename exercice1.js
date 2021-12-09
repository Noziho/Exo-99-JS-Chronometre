// Make it count up on a timer, calling this function
let counter = 0;
let seconds = document.getElementById("seconds");
let idTimeOut = null;
let countUp = function() {
    idTimeOut = setTimeout(function () {
        countUp();
    },1000)
    counter+=1;
    seconds.innerHTML = counter;
};
countUp();

// How can you make it stop counting?
let stopCountUp = function() {
    clearTimeout(idTimeOut);
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

