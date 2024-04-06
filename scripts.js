const monthlySubs = document.getElementById("subs-monthly");
const annuallySubs = document.getElementById("subs-annually");

monthlySubs.addEventListener("click", addActiveButton)

annuallySubs.addEventListener('click', addActiveButton)

function addActiveButton(event) {

    const active = event.target.classList.contains("active");
    const className = event.target;
    
    if (className.classList.contains("subscription-monthly")) {
        if (!active) {
            className.classList.add("active");
        }

        annuallySubs.classList.remove("active");
    } else {
        monthlySubs.classList.remove("active");
        className.classList.add("active");
    }

}