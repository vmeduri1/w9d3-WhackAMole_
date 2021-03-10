function popUpRandomMole() {
    let moleheads = document.querySelectorAll(".wgs__mole-head");
    
    let i = Math.floor(Math.random() * Math.floor(7));
    moleheads[i].classList.remove("wgs__mole-head--hidden");
    console.log(moleheads[i]);
    setTimeout(() => hideMole(moleheads[i]), 1000);
}

function hideMole(element) {
    element.classList.add("wgs__mole-head--hidden");
    setTimeout(popUpRandomMole, 1000);

}

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(popUpRandomMole, 0);

})