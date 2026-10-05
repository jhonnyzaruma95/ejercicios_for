function generarTablas(){
    let contenedor = document.getElementById("txtTabla");
    contenedor.innerHTML ="<h1>PROBANDO</h1>";

    let contenido ="";
    let numero = 5;
    for(let i=1; i<=10; i++){
        contenido +='<div class="fila">';
        contenido +=' <span>5*' + i +'</span>';
        contenido +=' <strong>' + (numero * i) +'</strong>';
        contenido +=' </div>';

    }
    contenedor.innerHTML = contenido;
}