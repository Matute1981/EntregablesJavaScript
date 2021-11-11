class Producto {

    constructor(producto,precio,imagen){
        this.producto = producto;
        this.precio = precio;
        this.imagen = imagen;
        this.iva = this.precio * 0,21;
    }

    //Obtener propiedades

    getPrecio () {
        return this.precio;
    }

    getProducto(){
        return this.producto;
    }

    getImagen(){
        return this.imagen;
    }

    getIva(){
        return this.iva;
    }

    getTotal(){
        return this.precio + this.iva 
    }
}


