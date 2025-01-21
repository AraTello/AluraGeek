import { conexionAPI } from "./conexionAPI.js";

const form = document.querySelector("[data-form]");

async function agregarProducto(evento){
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try{
        await conexionAPI.agregarProducto(nombre,precio,imagen);
    }catch(e){
        alert(e);
    }
    
}

form.addEventListener("submit", evento=>agregarProducto(evento));