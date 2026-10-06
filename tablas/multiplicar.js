function generarTablas(){
    let contenedor = document.getElementById("txtTabla");

    let numero = document.getElementById("respuesta").value;
    numero = parseInt(numero);

    let contenido ="";

    for(let i=1; i<=10; i++){
        contenido +='<div class="fila">';
        contenido +=' <span>' + numero +' * ' + i +'</span>';
        contenido +=' <strong>' + (numero * i) +'</strong>';
        contenido +=' </div>';

    }
    contenedor.innerHTML = contenido;

}