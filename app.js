const texto = document.getElementById('Logo');
const letras = texto.innerText.split("");

texto.innerText = '';

letras.forEach((letra) => {
    let caracter = letra === ' ' ? '&nbsp;' : letra;

    texto.innerHTML = texto.innerHTML + `
        <div>
            <span>${caracter}</span>
            <span class="segunda-linea">${caracter}</span>
        </div>  
    `;
})

texto.addEventListener("mouseenter", () => {
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.add('animación');
            cuenta += 1;
        } else{
            clearInterval(intervalo)
        }
    }, 30);
});

texto.addEventListener("mouseleave", () => {
    let cuenta = 0;

    const intervalo = setInterval(() => {
        if(cuenta < texto.children.length){
            texto.children[cuenta].classList.remove('animación');
           cuenta  += 1;
        } else{
            clearInterval(intervalo)
        }
    }, 30);
});