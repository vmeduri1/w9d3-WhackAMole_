function popUpRandomMole() {
    let str = `.wgs__mole-head:not(.wgs__mole-head--whacked)`;
    let moleheads = document.querySelectorAll(str);
    if (!moleheads.length) {
        console.log("You have won!");
        return;
    }
    let i = Math.floor(Math.random() * Math.floor(moleheads.length));

    console.log(moleheads);
    moleheads[i].classList.remove("wgs__mole-head--hidden");
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
