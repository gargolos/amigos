// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let nombreDeAmigo = document.getElementById('amigo').value;
    if (nombreDeAmigo.length == 0) {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombreDeAmigo);
        document.getElementById('amigo').value = "";
    }
    return;

}

