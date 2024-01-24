const quotes = document.querySelectorAll('.quote');
let current = 1;

function slideLeft() {
    let initialCurrent = current;
    current = current - 1;
    if (current < 1) {
        current = quotes.length;
    }
    updateQuoteClasses(initialCurrent, current);
}

function slideRight() {
    let initialCurrent = current;
    current = current + 1;
    if (current > quotes.length) {
        current = 1;
    }
    updateQuoteClasses(initialCurrent, current);
}

function updateQuoteClasses(initial, updated) {
    quotes[initial - 1].classList.remove("active");
    quotes[updated - 1].classList.add("active");
}
