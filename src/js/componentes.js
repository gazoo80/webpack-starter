//importamos el archivo css con el que vamos a trabajar
import "../css/componentes.css";

//export: Para que la función pueda ser importada desde el archivo .js que la requiera
export const saludar = (nombre) => {
    console.log("Creando etiqueta h1");

    const h1 = document.createElement("h1");
    h1.innerText = `Hola, ${nombre}, cómo estás??`;

    document.body.append(h1);
};