const quotes = document.querySelectorAll('.quote');
let current = 1;

function slideLeft() {
    let initialCurrent = current;
    current = current - 1;
    if (current < 1) {
        current = quotes.length;
    }
    updateQuoteClasses(initialCurrent, current);
    const activeDiv = document.querySelector(".active");

    // Apply animation to children
    for (let child of activeDiv.children) {
        child.style.animation = "slideAnimationLeft 0.5s ease forwards";
    }

    // Remove the animation after it's done
    activeDiv.addEventListener("animationend", () => {
        for (let child of activeDiv.children) {
            child.style.animation = "";
        }
    });
}

function slideRight() {
    let initialCurrent = current;
    current = current + 1;
    if (current > quotes.length) {
        current = 1;
    }
    updateQuoteClasses(initialCurrent, current);
    const activeDiv = document.querySelector(".active");

    // Apply animation to children
    for (let child of activeDiv.children) {
        child.style.animation = "slideAnimationRight 0.5s ease forwards";
    }

    // Remove the animation after it's done
    activeDiv.addEventListener("animationend", () => {
        for (let child of activeDiv.children) {
            child.style.animation = "";
        }
    });
}

function updateQuoteClasses(initial, updated) {
    quotes[initial - 1].classList.remove("active");
    quotes[updated - 1].classList.add("active");
}
