// Importamos los datos de las ciudades desde el archivo 'ciudades.js'.
// Esto nos permite usar la información de cada ciudad en este archivo.
import { barcelona, roma, paris, londres, islandia } from './ciudades.js';


// Seleccionamos todos los elementos <a> (enlaces) en la página y los guardamos en la variable 'enlaces'.   

// Esto nos permitirá agregar eventos a cada enlace.
let enlaces = document.querySelectorAll('a');
// Seleccionamos el elemento con el id 'titulo' y lo guardamos en 'tituloElemento'.
// Este elemento se usará para mostrar el título de la ciudad seleccionada.
let tituloElemento = document.getElementById('title');
// Seleccionamos el elemento con el id 'subtitulo' y lo guardamos en 'subtituloElemento'.
// Este elemento se usará para mostrar el subtítulo de la ciudad seleccionada.
let subtituloElemento = document.getElementById('subtitle');
// Seleccionamos el elemento con el id 'parrafo' y lo guardamos en 'parrafoElemento'.
// Este elemento se usará para mostrar la descripción de la ciudad seleccionada.
let parrafoElemento = document.getElementById('paragraph');
// Usamos 'forEach' para recorrer cada enlace en la lista de 'enlaces'.
// Esto nos permite agregar un evento a cada enlace.
enlaces.forEach(function(enlace) {
    // Agregamos un evento 'click' a cada enlace.
    // Cuando el usuario hace clic en un enlace, se ejecuta la función dentro de este bloque.
    enlace.addEventListener('click', function(event) {
        // 'event.preventDefault()' evita que el enlace navegue a otra página.
        // Esto es importante porque queremos manejar el clic de manera personalizada.
        event.preventDefault();

        // Usamos 'forEach' nuevamente para recorrer todos los enlaces.
        // Esto nos permite quitar la clase 'active' de todos los enlaces.
        enlaces.forEach(function(enlace) {
            // Removemos la clase 'active' de cada enlace.
            // Esto asegura que solo un enlace esté marcado como activo a la vez.
            enlace.classList.remove('active');
        });

        // Agregamos la clase 'active' al enlace que fue clicado.
        // Esto puede cambiar el estilo del enlace (por ejemplo, cambiar su color).
        enlace.classList.add('active');

        // Llamamos a la función 'obtenerContenido' y le pasamos el texto del enlace clicado.
        // 'trim()' se usa para eliminar espacios en blanco al principio y al final del texto.
        let contenido = obtenerContenido(enlace.textContent.trim());

        // Actualizamos el contenido del elemento 'tituloElemento' con el título de la ciudad.
        tituloElemento.textContent = contenido.title;

        // Actualizamos el contenido del elemento 'subtituloElemento' con el subtítulo de la ciudad.
        subtituloElemento.textContent = contenido.subtitle;

        // Actualizamos el contenido del elemento 'parrafoElemento' con la descripción de la ciudad.
        parrafoElemento.textContent = contenido.paragraph;
    });
});
// Definimos la función 'obtenerContenido' que toma el nombre de la ciudad como argumento.
// Esta función nos ayuda a obtener el contenido correspondiente a la ciudad seleccionada.
function obtenerContenido(enlace) {
    // Usamos un 'switch' para determinar qué ciudad fue seleccionada.
    // Dependiendo del valor de 'enlace', retornamos el contenido correspondiente.
    switch (enlace) {
        case "Barcelona":
            return barcelona;
        case "Roma":
            return roma;
        case "París":
            return paris;
        case "Londres":
            return londres;
        case "Islandia":
            return islandia;
    }
}
// } // Este código define un módulo que exporta objetos que contienen información sobre varias ciudades.