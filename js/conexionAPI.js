const URL = "http://localhost:3001/productos";

async function listarProductos(){
    try{
        const conexion = await fetch(URL);
        const conexionConvertida = conexion.json();
    
        return conexionConvertida;
    }catch (error){
        console.error("Error al listar los productos. ", error);
    }
    
}

async function agregarProducto(nombre, precio, imagen){
    try{
        const conexion = await fetch(URL, {
            method:"POST",
            headers:{"Content-type":"application/json"},
            body:JSON.stringify({
                nombre:nombre,
                precio:`$${precio}`,
                imagen:imagen
            })
        });
    
        const conexionConvertida = conexion.json();
    
        return conexionConvertida;
    }catch(error){
        console.error("No se ha logrado agregar un nuevo producto. ", error);
    }
    
}

//Delete

const eliminarID = async (id) => {
    try{
        await fetch(`${URL}/${id}`, {
            method:"DELETE",
            headers: {
                "Content-Type":"application/json"}
        });

    }catch(error){
        console.error("Error al eliminar el producto. ", error);
    }
    
};

export const conexionAPI={
    listarProductos, agregarProducto, eliminarID
}