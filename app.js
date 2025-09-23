// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let friends=[];


function AddFriend() {
    let input = document.getElementById("amigo");
    let name=input.value.trim();
    if(name.length>0){
        friends.push(name);
        ShowFriends();

        // Limpiamos el input
        input.value = "";
    }else{
        alert("Please enter a valid name.");
    }
}

function ShowFriends() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiamos la lista antes de mostrar

    friends.forEach(friend => {
        let li = document.createElement("li");
        li.textContent = friend;
        lista.appendChild(li);
    });
}

// function ChooseSecretFriend() {
//     if (friends.length < 2) {
//         alert("Please add at least two friends to perform the draw.");
//         return;
//     }

//     // Realizamos el sorteo
//     let resultados = [];
//     let amigosRestantes = [...friends];

//     for (let i = 0; i < friends.length; i++) {
//         let amigo = friends[i];
//         let indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
//         let amigoSorteado = amigosRestantes[indiceSorteado];

//         // Nos aseguramos de que nadie se saque a sí mismo
//         while (amigo === amigoSorteado) {
//             indiceSorteado = Math.floor(Math.random() * amigosRestantes.length);
//             amigoSorteado = amigosRestantes[indiceSorteado];
//         }

//         resultados.push(`${amigo} -> ${amigoSorteado}`);
//         amigosRestantes.splice(indiceSorteado, 1);
//     }

//     // Mostramos los resultados
//     let listaResultados = document.getElementById("resultado");
//     listaResultados.innerHTML = ""; // Limpiamos resultados anteriores

//     resultados.forEach(resultado => {
//         let li = document.createElement("li");
//         li.textContent = resultado;
//         listaResultados.appendChild(li);
//     });
// }



function ChooseSecretFriend() {
    if (friends.length < 2) {
        alert("Please add at least two friends to perform the draw.");
        return;
    }

    // Doing the draw
    let indiceSorteado = Math.floor(Math.random() * friends.length);
    let amigoSorteado = friends[indiceSorteado];


    // Showing the result
    let listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = ""; // Limpiamos resultados anteriores

   
    let li = document.createElement("li");
    li.textContent = "The secret friend is: " + amigoSorteado;

    listaResultados.appendChild(li);
}