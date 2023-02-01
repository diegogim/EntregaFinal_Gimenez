let inicio = "BBQ";

// Renderiza lista de categorías del menú
const fn_renderLista = () => {
  const lista = fn_cargarLS("productos");

  let categoriaActual = "";
  let categoriaAnterior = "";

  let renderizado = `<div class="btn-group-vertical" role="group" aria-label="Vertical button group">`;

  for(elemento of lista){
    categoriaActual = elemento.categoria;
    categoriaActual === categoriaAnterior ? "" : renderizado += 
      `<button type="button" class="btn btn-dark" id="${categoriaActual}">${categoriaActual}</button>`;
    categoriaAnterior = categoriaActual;
  }

  renderizado += `</div>`;

  document.getElementById("renderLista").innerHTML = renderizado;
}

// Renderiza el menú
const fn_renderMenu = (a) => {
    const menu = fn_cargarLS("productos");

    let catSelec = a;

    let renderizado = "";

    for(elemento of menu){
        catSelec === elemento.categoria ?
        renderizado +=
        `<div class="col-md-6 col-lg-3 align-items-start">
            <div id="elementoMenu">
              <div class="row g-0 " id="elementoImg">
                <div class="col-md-5" id="containerImg">
                  <a href="./src/img/menu/${elemento.tipo}/${elemento.categoria}/${elemento.imagen}" class="fresco">
                    <img src="./src/img/menu/${elemento.tipo}/${elemento.categoria}/${elemento.imagen}" class="img-fluid rounded-start" alt="${elemento.descripcion}">
                  </a>
                </div>
              <div class="col-md-7" id="containerInfo">
                <div>
                  <h4>${elemento.nombre}</h4>
                  <h5>${elemento.descripcion}</h5>
                  <div class="row">
                    <p class="col-md-6">$${elemento.precio}</p>
                    <button type="button" class="btn col-md-6" onClick="agregarAOrden(${elemento.id})">Agregar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`
        : renderizado += "";
    }

    document.getElementById("renderMenu").innerHTML = renderizado;
}

//Click en lista de categorías
const fn_clickCategoria = () => {
  const buttons = document.getElementsByTagName("button");

  const buttonPressed = e => {
    fn_renderMenu(e.target.id);
  }
  
  for (let button of buttons) {
    button.addEventListener("click", buttonPressed);
  }
}

//Agregar un producto a la orden
const agregarAOrden = (id) => {
  const menu = fn_cargarLS("productos");
  const orden = fn_cargarLS("orden");

  verificar = orden.some(e => e.id === id);

  if(verificar){  
      let lugar = orden.findIndex(e => e.id === id);
      orden[lugar].cantidad += 1;
  }
  else{ 
    const pedido = menu.find(e => e.id === id);
    delete pedido.descripcion;
    pedido.cantidad = 1;
    orden.push(pedido);
  }

  fn_guardarLS("orden",orden);
  fn_renderIcono();
  
  Toastify({
    text: "Agregado a tu pedido",
    duration: 2000,
    stopOnFocus: true,
    style: {
      background: "#c81111",
    },
    }).showToast();
}

fn_guardarLS("productos", array_productos);
fn_renderLista();
fn_clickCategoria();
fn_renderMenu(inicio);