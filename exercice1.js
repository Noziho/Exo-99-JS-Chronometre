// Make it count up on a timer, calling this function
let counter = 0;
let seconds = document.getElementById("seconds");
let countUp = function() {
    counter+=1;
    document.getElementById("seconds").innerHTML = counter;
    setTimeout(function () {
        countUp();
    },1000)
};

// How can you make it stop counting?
let stopCountUp = function() {
};
let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);

