document.getElementsByClassName('botonNavegacion').addEventListener(onclick, (evento)=>{
    evento.target.style.background = 'black';
    evento.target.style.color = 'Indigo dye';
});

document.getElementById('imagen1').addEventListener("click", function(){
    this.src = this.src.includes("/img/imagen1.jpg") ? "/img/woman-2260736_640.jpg" : "/img/imagen1.jpg";
})

document.getElementById('botonMostrar1').addEventListener('click', mostrar);

function mostrar(){
    let contenedor = document.getElementById('c1mostrar');
    if(contenedor.style.visibility == 'hidden'){
        contenedor.style.visibility = 'visible';
    }else{
        contenedor.style.visibility = 'hidden';
    }
}