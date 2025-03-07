// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const amigosSorteados = [];

function agregarAmigo() {
    const nombreInput = document.getElementById('amigo');
    const nombre = nombreInput.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if (amigos.includes(nombre)) {
        alert('Este nombre ya está en la lista.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();

    nombreInput.value = '';
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista. Agrega algunos nombres primero.');
        return;
    }

    if (amigosSorteados.length === amigos.length) {
        alert('Ya no hay más amigos disponibles para sortear.');
        return;
    }

    let amigoSecreto;
    do {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        amigoSecreto = amigos[indiceAleatorio];
    } while (amigosSorteados.includes(amigoSecreto));

    amigosSorteados.push(amigoSecreto);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;

    actualizarLista();
}