//home results function
let homeEl = document.getElementById("homeResults");
count = 0;

function home1() {
    count++
    homeEl.textContent = count;
}

function home2() {
    count += 2;
    homeEl.textContent = count;
}

function home3() {
    count += 3;
    homeEl.textContent = count;
}

// guest results function

let guestEl = document.getElementById("guestResults");
result = 0;
function add1() {
    result++
    guestEl.textContent = result;
}

function add2() {
    result += 2;
    guestEl.textContent = result;
}

function add3() {
    result += 3;
    guestEl.textContent = result;
}

// resetting the game to zero

function reset() {
    homeEl.textContent = 0;
    guestEl.textContent = 0;
    count = 0;
    result = 0;
}