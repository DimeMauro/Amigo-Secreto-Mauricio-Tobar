// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Obtiene el input del usuario
    const nombre = input.value.trim(); // Elimina espacios en blanco antes y después del nombre

    // Verifica si el nombre ingresado es válido
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    // Evita que se agreguen nombres duplicados
    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agrega el nombre a la lista y actualiza la visualización
    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpia el campo de entrada
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos"); // Obtiene el elemento de la lista
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla
    
    // Recorre la lista de amigos y los agrega como elementos de la lista en la interfaz
    amigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    // Verifica si hay suficientes participantes
    if (amigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear.");
        return;
    }

    let copiaAmigos = [...amigos]; // Crea una copia de la lista de amigos para evitar modificaciones directas
    let resultado = [];

    // Asigna a cada amigo un amigo secreto asegurando que no se asignen a sí mismos
    for (let i = 0; i < amigos.length; i++) {
        let opciones = copiaAmigos.filter(amigo => amigo !== amigos[i]); // Filtra las opciones válidas
        
        // Si no hay opciones válidas, muestra un error
        if (opciones.length === 0) {
            alert("No se pudo realizar el sorteo correctamente. Intenta nuevamente.");
            return;
        }
        
        // Selecciona aleatoriamente un amigo secreto
        let sorteado = opciones[Math.floor(Math.random() * opciones.length)];
        resultado.push({ amigo: amigos[i], recibe: sorteado });
        
        // Elimina al sorteado de las opciones para evitar repeticiones
        copiaAmigos = copiaAmigos.filter(a => a !== sorteado);
    }

    // Muestra el resultado en la interfaz
    mostrarResultado(resultado);
}

// Función para mostrar los resultados del sorteo en la interfaz
function mostrarResultado(resultado) {
    const listaResultado = document.getElementById("resultado"); // Obtiene el elemento donde se mostrarán los resultados
    listaResultado.innerHTML = ""; // Limpia la lista antes de actualizarla
    
    // Recorre los resultados y los agrega a la interfaz
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = `${par.amigo} → ${par.recibe}`;
        listaResultado.appendChild(li);
    }

);
}