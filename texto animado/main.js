class TextoAnimado {
    constructor(id, objetivo){
        this.texto = document.getElementById(id);
        this.objetivo = document.getElementById(objetivo);
        this.letras= this.texto.innerText.split("");  
        
                this.texto.innerText='';

        this.letras.forEach((letra) => {
            let caracter = letra === ' ' ? '&nbsp;' : letra;
            this.texto.innerHTML = this.texto.innerHTML + `
            <div>
                <span>${caracter}</span>
                <span class="segunda-linea">${caracter}</span>
            </div>
            `;
        });

        this.objetivo.addEventListener('mouseenter', () =>{ /*cambiar activacion con "texto" */
            let cuenta = 0; 

            const intervalo = setInterval(() => {
                if(cuenta <this.texto.children.length){
                    this.texto.children[cuenta].classList.add('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo)
                }
            }, 40);
        });

        this.objetivo.addEventListener('mouseleave', () =>{ /*cambiar activacion con "texto" */
            let cuenta = 0; 

            const intervalo = setInterval(() => {
                if(cuenta <this.texto.children.length){
                    this.texto.children[cuenta].classList.remove('animacion');
                    cuenta += 1;
                } else {
                    clearInterval(intervalo)
                }
            }, 30);
        });
        
    }
}

new TextoAnimado('logo', 'logotipo');/*Duplicar esto si se quiere añadir otra animacion*/




