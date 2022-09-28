const theme = document.querySelector('.change-theme');
const mode = document.querySelector('.text');
let cont = 1;

theme.addEventListener('click', (evento) => {
    theme.classList.toggle('dark-mode');
    document.body.classList.toggle('dark-mode');
}) 

// card[posicao].style.cssText =  ' opacity: 1;' + 
//         'height: auto;'  + 
//         'transition: opacity 0.5s ease-in;';
