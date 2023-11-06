function cargarItem(divId){

    //Intento recuperar el listado de productos del carrito
    carrito = JSON.parse(sessionStorage.getItem('carrito'));

    //Si no hay uno creado, lo inicializo
    if(carrito == null){
        let item = new Array();
        sessionStorage.setItem('carrito', JSON.stringify(item));
        carrito = JSON.parse(sessionStorage.getItem('carrito'));
    }
    
    //Obtengo los datos del producto a partir del id del div que recibi por parametro
    let div = document.getElementById(divId)
    let divContent = div.children;

    let precio = div.getElementsByClassName("precio")[0].textContent.substring(2);
    let nombreProducto = divContent[0].textContent;

    //Busco si el producto ya existe en el carrito
    let itemIndex = carrito.findIndex( p => p.producto===nombreProducto);
    //Si no existe, lo agrego
    if(itemIndex == -1){
        let obj = {
            'producto' : nombreProducto,
            'precio': precio,
            'cantidad': 1
        }
        carrito.push(obj);
    //Si existe, sumo uno a la cantidad agregada
    } else {
        carrito[itemIndex].cantidad++;
    }
    console.log(carrito);
    sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarProductos(){
    console.log("Llegue");
    let tablaProductos = document.getElementById('tabla-productos');
    let listaProductos = JSON.parse(sessionStorage.getItem('carrito'));
    let precio = 0;
    listaProductos.forEach(producto => llenarTabla(producto, tablaProductos, precio));
    console.log(precio);
}

function llenarTabla(producto, tabla, precio){
   let fila = tabla.insertRow(-1);
   let colProducto = fila.insertCell(0);
   let colCant = fila.insertCell(1);
   let colPrecio = fila.insertCell(2);
   
    colProducto.innerHTML = producto.producto;
    colCant.innerHTML = producto.cantidad;
    colPrecio.innerHTML = producto.precio;

    precioTotal = document.getElementById('precio-total');
    precioTotal.innerHTML = parseInt(precioTotal.textContent) + (producto.precio * 1000 * producto.cantidad);
}

function gracias(){
    alert("Gracias por su compra!");
}