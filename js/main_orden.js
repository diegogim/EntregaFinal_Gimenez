const fn_renderPedido = () => {
    const orden = fn_cargarLS("orden");
    let cantidad = orden.reduce((cant, e) => cant += e.cantidad, 0);
    let renderizado = "";

    if (cantidad > 0) {    
        renderizado = `
            <table class="table">
            <tbody>
            <tr>
                <td colspan="4" class="text-end">
                    <a href="#" class="btn" id="btnEliminarPedido" onClick="fn_eliminarPedido()">Eliminar pedido
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                        </svg>
                    </a>
                </td>
            </tr>`;

        for (let elemento of orden) {
            renderizado += `
                <tr>
                    <td>
                        <img src="./src/img/menu/${elemento.tipo}/${elemento.categoria}/${elemento.imagen}" alt="${elemento.nombre}">
                    </td>
                    <td class="align-middle">${elemento.nombre} - $${elemento.precio}</td>
                    <td class="align-middle"><button class="btn" title="Eliminar Producto" onClick="fn_eliminarProducto(${elemento.id});"> - </button> ${elemento.cantidad} <button class="btn" title="Agregar Producto" onClick="fn_agregarProducto(${elemento.id});"> + </button></td>
                    <td class="align-middle">$${elemento.cantidad * elemento.precio}</td>`;
        }

        renderizado += `<tr>
        <td colspan="3"><b>Total de tu orden</b></td>
        <td>$${fn_totalPedido()}</td>
        <td>&nbsp;</td>
        </tr>
        </tbody>
        </table>`;
    } else {
        renderizado = `<div class="alert alert-danger text-center" role="alert">No se encontraron Productos en el Carrito!</div>`;
    }

    document.getElementById("renderPedido").innerHTML = renderizado;
}

const fn_eliminarPedido = () => {
    localStorage.removeItem("orden");
    fn_renderPedido();
    fn_renderIcono();
}

const fn_agregarProducto = (a) => {
    const orden = fn_cargarLS("orden");
    let lugar = orden.findIndex(e => e.id === a);
    orden[lugar].cantidad += 1;
    fn_guardarLS("orden",orden);
    fn_renderIcono();
    fn_renderPedido();
}

const fn_eliminarProducto = (a) => {
    const orden = fn_cargarLS("orden");
    let lugar = orden.findIndex(e => e.id === a);
    orden[lugar].cantidad -= 1;

    if (orden[lugar].cantidad == 0) {
        orden.splice(lugar, 1);
        fn_guardarLS("orden",orden);
        fn_renderIcono();
        fn_renderPedido();
    } else {
        fn_guardarLS("orden",orden);
        fn_renderIcono();
        fn_renderPedido();
    }    
}

fn_totalPedido = () => {
    const orden = fn_cargarLS("orden");
    return orden.reduce((suma, e) => suma += e.cantidad * e.precio, 0);
}

fn_renderPedido();