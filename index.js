//INSTRUCCIONES
/*
-No mayusculas, ni acentos
Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
import { encriptar,desencriptar } from "./scripts/funciones.js";

//variables de los botones encriptar y desencriptar
let botonEncriptar= document.getElementById("encriptar");
let botonDesencriptar=document.getElementById("desencriptar");

//Cuando se aprete cualquiera de los dos botones, ejecutara su funcion respectiva
botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick= desencriptar;

