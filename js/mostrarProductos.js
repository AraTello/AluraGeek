import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");

function crearItem(nombre, precio, imagen){
    const producto = document.createElement("li");

    producto.className="listado__item"

    producto.innerHTML = `<img class="listado__item__imagen" src="${imagen}">
                        <p class="listado__item__titulo">${nombre}</p>
                        <div>
                            <p class="listado__item__precio">$${precio}</p>
                            <button class="boton__eliminar"><i class="fa-regular fa-trash-can"></i></button>
                        </div>`
    return producto;
}

async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos();

        listaAPI.forEach(producto=>lista.appendChild(crearItem(producto.nombre, producto.precio, producto.imagen)));
    }catch{
        lista.innerHTML = `<span>No se han agregado productos <i class="fa-solid fa-heart-crack"></i></i></span>`
    }
    
}

listarProductos();