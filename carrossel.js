let vslides = document.querySelectorAll('.efect-slide');
let vcarrossel = document.getElementById('carrossel');
let vleft = document.getElementById('left');
let vright = document.getElementById('right');

const SLIDES_COUNT = vslides.length; /*Recebendo a quantidade de divs que tem dentro do carrossel (SLIDES_COUNT significa -> Contar slides)*/

let current_slides = 0; // slide atual

vright.addEventListener("click", () => {
    current_slides--;
    if(current_slides < 0){
        current_slides = SLIDES_COUNT - 1;
    }

    carrosselUpdate();
});


vleft.addEventListener("click", () => {
    current_slides++;
    if(current_slides > SLIDES_COUNT - 1){
        current_slides = 0
    }
    carrosselUpdate()
})


function carrosselUpdate(){

    vcarrossel.style.transform = `translateX(${-current_slides * vslides[0].offsetWidth}px)`;
    document.body.style.background = `${vslides[current_slides].getAttribute("data-bg")}`;
}