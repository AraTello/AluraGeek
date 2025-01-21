import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-lista]");
const form = document.querySelector("[data-form]");

//Agregar
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

//Crear item
function crearItem(nombre, precio, imagen, id){
    const producto = document.createElement("li");

    producto.className="listado__item";

    producto.innerHTML = `<img class="listado__item__imagen" src="${imagen}">
                        <p class="listado__item__titulo">${nombre}</p>
                        <div>
                            <p class="listado__item__precio">${precio}</p>
                            <button class="boton__eliminar" data-id="${id}"><i class="fa-regular fa-trash-can"></i></button>
                        </div>`;
    

    eliminarProducto(producto, producto.id);

    return producto;
}

//Eliminar
function eliminarProducto(producto, id) {

    const btn = producto.querySelector(".boton__eliminar");

    btn.addEventListener("click", async () => {
        try{
            await conexionAPI.eliminarID(id);
            producto.remove();
            console.log("producto eliminado id: ${id}");
            
        }catch(e){
            console.log("Error con ${id}");
        }
    });
    
}

//Listar productos
async function listarProductos(){
    try{
        const listaAPI = await conexionAPI.listarProductos();

        listaAPI.forEach(producto=>lista.appendChild(crearItem(producto.nombre, producto.precio, producto.imagen)));
    }catch{
        lista.innerHTML = `<span>No se han agregado productos <i class="fa-solid fa-heart-crack"></i></i></span>`
    }
    
}

listarProductos();


