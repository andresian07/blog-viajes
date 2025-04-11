/* Estilos generales */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: #90a8b3; /* Fondo claro */
    color: #333; /* Color de texto oscuro */
}

/* Estilo para la lista de destinos */
ul {
    list-style-type: none;
    padding: 0;
    background-color: #007BFF; /* Color de fondo del menú */
    display: flex;
    justify-content: center;
    margin: 0;
}

li {
    margin: 0 15px;
}

a {
    text-decoration: none;
    color: white; /* Color de texto en el menú */
    font-weight: bold;
    padding: 10px 15px;
    transition: background-color 0.3s;
    cursor: pointer;
}

a:hover {
    background-color: #0056b3; /* Color de fondo al pasar el ratón */
    border-radius: 5px;
    color: #fff; /* Color de texto al pasar el ratón */
    text-decoration: none;

}

/* Contenedor principal */
.contenedor {
    max-width: 800px;
    margin: 20px auto;
    padding: 20px;
    background: white; /* Fondo blanco para el contenedor */
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
}

/* Títulos */
#titulo {
    font-size: 2.5em;
    color: #007BFF; /* Color del título */
    text-align: center;
    margin-bottom: 10px;
}

#subtitulo {
    font-size: 1.5em;
    color: #555; /* Color del subtítulo */
    text-align: center;
    margin-bottom: 20px;
}

/* Párrafo */
#parrafo {
    font-size: 1.1em;
    line-height: 1.8;
    text-align: justify;
    color: #333; /* Color del texto del párrafo */
}

/* Estilo de fondo */
body {
    background-image: url('ruta/a/tu/imagen_de_fondo.jpg'); /* Cambia la ruta a tu imagen de fondo */
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}

/* Estilo para el contenedor de texto */
.contenedor {
    background-color: rgba(255, 255, 255, 0.9); /* Fondo blanco con opacidad */
}

/* Estilo de enlaces dentro del párrafo */
#parrafo a {
    color: #007BFF; /* Color de los enlaces */
    text-decoration: underline;
}

#parrafo a:hover {
    text-decoration: none;
    color: #0056b3; /* Color de los enlaces al pasar el ratón */
}

@media (max-width: 600px) {
    ul {
        flex-direction: column; /* Cambia la dirección de la lista a columna */
        align-items: center; /* Centra los elementos */
        background-color: #007BFF; /* Mantiene el color de fondo */
    }

    li {
        margin: 10px 0; /* Espaciado vertical entre los elementos de la lista */
    }

    a {
        padding: 10px; /* Ajusta el padding para que sea más fácil de tocar en pantallas táctiles */
        font-size: 1.2em; /* Aumenta el tamaño de la fuente para mejor legibilidad */
    }
}
