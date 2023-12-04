class Producto{
    #codigo;
    #nombre;
    #descripcion;
    #imagen;
    #precio;
    #categoria;
    constructor(codigo, nombre, descripcion, imagen, precio, categoria){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#imagen = imagen;
        this.#precio = precio;
        this.#categoria = categoria;
    }
    get codigo(){
        return this.#codigo;
    }
    set codigo(codigo){
        this.#codigo = codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    set nombre(nombre){
        this.#nombre = nombre;
    }
    get descripcion(){
        return this.#descripcion;
    }
    set descripcion(descripcion){
        this.#descripcion = descripcion;
    }
    get imagen(){
        return this.#imagen;
    }
    set imagen(imagen){
        this.#imagen = imagen;
    }
    get precio(){
        return this.#precio;
    }
    set precio(precio){
        this.#precio = precio;
    }
    get categoria(){
        return this.#categoria;
    }
    set categoria(categoria){
        this.#categoria = categoria;
    }
    toJSON(){
        return{
            codigo: this.codigo,
            nombre: this.nombre,
            descripcion: this.descripcion,
            imagen: this.imagen,
            precio: this.precio,
            categoria: this.categoria
        }
    }
}