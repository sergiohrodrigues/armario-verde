let ativar = document.querySelector('#arrowPrincipal')
let mostrar = document.querySelector('.containerActv')
let desativar = document.querySelector('#desativar')
let arrow1 = document.querySelector('.arrow-gray')
let arrow2 = document.querySelector('.arrow-white')


ativar.addEventListener('click', () =>{
    mostrar.classList.toggle('mostrar');

    for (let i = 1; i <= 2; i++){
        if(i == 1){
            arrow1.src = "./img/arrow-gray.svg";
        } else if (mostrar.classList.contains('mostrar')){
            arrow1.src = "./img/arrow-white.svg";
        }
    }
})

desativar.addEventListener('click', () => {
    mostrar.classList.toggle('mostrar');
    arrow1.src = "./img/arrow-gray.svg";
})