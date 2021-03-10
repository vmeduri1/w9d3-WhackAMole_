function popUpRandomMole() {
    let moleheads = document.querySelectorAll(".wgs__mole-head:not(.wgs__mole-head--whacked)");

    let i = Math.floor(Math.random() * Math.floor(7));
    moleheads[i].classList.remove("wgs__mole-head--hidden");
    console.log(moleheads);
    setTimeout(() => hideMole(moleheads[i]), 3000);
}

function hideMole(element) {
    element.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);

}

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(popUpRandomMole, 0);
    let moleheads = document.querySelectorAll(".wgs__mole-head");
    moleheads.forEach((mole) => {
        mole.addEventListener("click", () => {
            mole.classList.add("wgs__mole-head--hidden");
            mole.classList.add("wgs__mole-head--whacked");
        })
    })
})
