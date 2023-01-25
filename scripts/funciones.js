/*FUNCIONES*/

//Funciones Principales
//Funcion encriptar
export const encriptar = ()=>{
    let texto = document.getElementById("text").value.toLowerCase().trim();
    let cajaMostrar= document.querySelector(".cajaMostrarTexto");
    let contenedorMuestra=document.querySelector(".contenedorInicio");

    if (texto==="") {
        alert("No se ingreso ningun texto");
    }

    else if(noPermitirAcentos(texto)==="Hay acentos"){
        alert("Debe escribir su texto sin acentos");
    }

    else{
        document.getElementById("text").value="";
        contenedorMuestra.style.display="none";
        //comprobar si se creo el nuevo div del contenedorTraducido
        if(document.querySelector(".mensajeCopiado")!==null){
            document.querySelector(".mensajeCopiado").innerHTML="";
        }
        if (document.querySelector(".contenedorTraducido")!==null && 
            document.querySelector("#copiar")!==null) {
                //resetear siempre el div para que me muestre solo el texto a traducir
                document.querySelector(".contenedorTraducido").innerHTML="";
                //usando la funcion codificarTexto
                document.querySelector(".contenedorTraducido").innerHTML=codificarTexto(texto);
                document.getElementById("copiar").onclick=()=>{copiar("traducido")};
                //console.log(cajaMostrar);
        }             
        else{
            //primera vez creando el boton copiar y el div del texto a traducir
            var divContenedor = document.createElement("div");
            var divTexto = document.createElement("div");
            var botonCopiar = document.createElement("button");
            divContenedor.setAttribute("class","containerMuestra");
            divTexto.setAttribute("class","contenedorTraducido");
            divTexto.setAttribute("id","traducido");
            botonCopiar.setAttribute("class","button");
            botonCopiar.setAttribute("id","copiar");
            //Usando la funcion codificar texto y ponerlo en divTexto
            divTexto.innerHTML=codificarTexto(texto);
            botonCopiar.textContent="Copiar";
            divContenedor.appendChild(divTexto);
            divContenedor.appendChild(botonCopiar);
            cajaMostrar.appendChild(divContenedor)
            botonCopiar.onclick=()=>{copiar("traducido")};
            //console.log(cajaMostrar);
        }
    }
};

//Funcion desencriptar
export const desencriptar = ()=>{
    let texto = document.getElementById("text").value.toLowerCase().trim();
    let cajaMostrar= document.querySelector(".cajaMostrarTexto");
    let contenedorMuestra=document.querySelector(".contenedorInicio");

    if (texto==="") {
        alert("No se ingreso ningun texto");
    }

    else if(noPermitirAcentos(texto)==="Hay acentos"){
        alert("Debe escribir su texto sin acentos");
    }

    else{
        document.getElementById("text").value="";
        contenedorMuestra.style.display="none";
        //Reiniciar el mensaje de mensajeCopiado
        if(document.querySelector(".mensajeCopiado")!==null){
            document.querySelector(".mensajeCopiado").innerHTML="";
        }
        if (document.querySelector(".contenedorTraducido")!==null && 
            document.querySelector("#copiar")!==null) {
                document.querySelector(".contenedorTraducido").innerHTML="";
                //usando la funcion decodificar texto
                document.querySelector(".contenedorTraducido").innerHTML=decodificarTexto(texto);
                document.getElementById("copiar").onclick=()=>{copiar("traducido")};
                //console.log(cajaMostrar);
        }             
        else{
            //primera vez creando el boton copiar y el div del texto a traducir
            var divContenedor = document.createElement("div");
            var divTexto = document.createElement("div");
            var botonCopiar = document.createElement("button");
            divContenedor.setAttribute("class","containerMuestra");
            divTexto.setAttribute("class","contenedorTraducido");
            divTexto.setAttribute("id","traducido");
            botonCopiar.setAttribute("class","button");
            botonCopiar.setAttribute("id","copiar");
            //usando la funcion decodificarTexto y ponerlo en el divTexto
            divTexto.innerHTML=decodificarTexto(texto);
            botonCopiar.textContent="Copiar";
            divContenedor.appendChild(divTexto);
            divContenedor.appendChild(botonCopiar);
            cajaMostrar.appendChild(divContenedor)
            botonCopiar.onclick=()=>{copiar("traducido")};
            //console.log(cajaMostrar);
        }
    }
};

//Funciones secundarias
//Funcion copiar: copia el texto del div del texto traducido 
const copiar = (id)=>{
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id).innerHTML);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
    mensajeCopiar();
};
const mensajeCopiar = ()=>{
    let contenedor = document.querySelector(".containerMuestra");
    //comprobar si se creo el nuevo div del contenedorTraducido
    if(document.querySelector(".mensajeCopiado")!==null){
        document.querySelector(".mensajeCopiado").innerHTML="Mensaje Copiado";
    }
    else{
        let mensaje = document.createElement("span");
        mensaje.setAttribute("class","mensajeCopiado");
        mensaje.innerHTML="Mensaje Copiado";
        contenedor.appendChild(mensaje);
    }

}

//Funcion noPermitirAcentos: no permite que ek texto a traducir tenga acentos, y si tiene salta la alerta
const noPermitirAcentos = (texto)=>{
    let acentos=["á","é","í","ó","ú","à","è","ì","ò","ù"];
    for (let index = 0; index < acentos.length; index++) {
        if(texto.indexOf(acentos[index])!==-1){
            return "Hay acentos";
        }
    };
    return "No hay acentos";
};

//Funcion codificarTexto
const codificarTexto = (texto)=>{
    //separo el texto en palabras y la guardo en un array
    let arrayTexto= texto.split(" ");
    //console.log(arrayTexto);
    let textoTraducido;
    let arrayTextoTraducido=[];
    arrayTexto.forEach(palabra=> {
        let palabraTraducida="";
        //serparo la palabra en letras y la guardo en un array 
        let arrayPalabra=palabra.split("");
        arrayPalabra.forEach(letra=>{
            switch (letra) {
                case "a":
                    letra="ai";
                    palabraTraducida+=letra;
                    break;
                case "e":
                    letra="enter";
                    palabraTraducida+=letra;
                    break;
                case "i":
                    letra="imes";
                    palabraTraducida+=letra;
                    break;
                case "o":
                    letra="ober";
                    palabraTraducida+=letra;
                    break;
                case "u":
                    letra="ufat";
                    palabraTraducida+=letra;
                    break;
                default:
                    letra=letra;
                    palabraTraducida+=letra;
                    break;
            }
        });
        //guardar el texto traducido en un array de palabras
        arrayTextoTraducido.push(palabraTraducida);
    });
    //volver el array del texto traducido en un string y retornarlo
    textoTraducido=arrayTextoTraducido.join(" ");
    return textoTraducido
};

//Funcion decodificarTexto
const decodificarTexto = (texto)=>{
    let textoTraducido =texto.replaceAll("ai","a").replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ufat","u");
    return textoTraducido;
}
