//#region 05

//Exposición del problema y necesidad del Webpack

//Necesidad de Webpack. Trabajar de una manera más eficiente. Importar módulos,
//archivos con funciones del proyecto, librerías de terceros.
//Importamos una función desde el archivo js que contiene mis funciones
import {saludar} from "./js/componentes.js";

import "./styles.css";

const nombre = "Diego";

saludar(nombre);

//#endregion

