const Swal = require('sweetalert2');
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'la_arabe'
})

connection.connect(function (err) {
    if (err) {
        console.log('error de conexion')
    }
})

function viewHome1() {
    document.getElementById('home1').style.display = 'block'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('home3').style.display = 'none'
    document.getElementById('home4').style.display = 'none'
    document.getElementById('home5').style.display = 'none'
    document.getElementById('home6').style.display = 'none'
}

function viewHome2() {
    document.getElementById('home1').style.display = 'none'
    document.getElementById('home2').style.display = 'block'
    document.getElementById('home3').style.display = 'none'
    document.getElementById('home4').style.display = 'none'
    document.getElementById('home5').style.display = 'none'
    document.getElementById('home6').style.display = 'none'
}

function viewHome3() {
    document.getElementById('home1').style.display = 'none'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('home3').style.display = 'block'
    document.getElementById('home4').style.display = 'none'
    document.getElementById('home5').style.display = 'none'
    document.getElementById('home6').style.display = 'none'
}

function viewHome4() {
    document.getElementById('home1').style.display = 'none'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('home3').style.display = 'none'
    document.getElementById('home4').style.display = 'block'
    document.getElementById('home5').style.display = 'none'
    document.getElementById('home6').style.display = 'none'
}

function viewHome5() {
    document.getElementById('home1').style.display = 'none'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('home3').style.display = 'none'
    document.getElementById('home4').style.display = 'none'
    document.getElementById('home5').style.display = 'block'
    document.getElementById('home6').style.display = 'none'
}

function viewHome6() {
    document.getElementById('home1').style.display = 'none'
    document.getElementById('home2').style.display = 'none'
    document.getElementById('home3').style.display = 'none'
    document.getElementById('home4').style.display = 'none'
    document.getElementById('home5').style.display = 'none'
    document.getElementById('home6').style.display = 'block'
}

var products = JSON.parse(localStorage.getItem('products'))
var cart = []
var paramsCart = []

function addCart(item, item2 = null, cantU1 = null, cantU2 = null) {
    var objs = {}
    var quanty = '';
    if (item2 == null) {
        for (var product in products) {
            if (products[product].id == item) {
                quanty = document.getElementById(item + 'quanty').value
                objs.cantidad = quanty;
                objs.id = products[product].id;
                objs.nombre = products[product].nombre;
                objs.precio = products[product].precio;
                if (products[product].categoria_id == 1) {
                    objs.categoria = 'Pizza'
                }
                if (products[product].categoria_id == 2) {
                    objs.categoria = 'Empanada'
                }
                if (products[product].categoria_id == 3) {
                    objs.categoria = 'Combo'
                }
                if (products[product].tipo_id == 1) {
                    objs.tipo = 'Grande'
                }
                if (products[product].tipo_id == 2) {
                    objs.tipo = 'Mediana'
                }
                if (products[product].tipo_id == 3) {
                    objs.tipo = ''
                }
                if (products[product].tipo_id == 4) {
                    objs.tipo = ''
                }
                if (products[product].linea_id == 1) {
                    objs.linea = 'Comun'
                }
                if (products[product].linea_id == 2) {
                    objs.linea = 'SkinnyMass'
                }
                if (products[product].linea_id == 3) {
                    objs.linea = ''
                }
                if (products[product].linea_id == 4) {
                    objs.linea = ''
                }

                //paramsCart
                paramsCart.push({
                    id: objs.id,
                    producto: objs.id,
                    cantidad: objs.cantidad,
                })
            }
        }
    } else {
        for (var product in products) {
            if (products[product].id == item) {
                for (var product2 in products) {
                    if (products[product2].id == item2) {

                        objs.id = products[product].id + ',' + products[product2].id;
                        objs.nombre = 'Media: ' + products[product].nombre + '<br/>Media: ' + products[product2].nombre;
                        objs.precio = ((products[product].precio) / 2) + ((products[product2].precio) / 2);

                        if (products[product].tipo_id == 1) {
                            if (products[product].linea_id == 1) {
                                quanty = document.getElementById('combinada-pizza-grande-quanty').value
                                objs.cantidad = quanty;
                            }
                            if (products[product].linea_id == 2) {
                                quanty = document.getElementById('combinada-skinnymass-grande-quanty').value
                                objs.cantidad = quanty;
                            }
                        }
                        if (products[product].tipo_id == 2) {
                            if (products[product].linea_id == 1) {
                                quanty = document.getElementById('combinada-pizza-mediana-quanty').value
                                objs.cantidad = quanty;
                            }
                            if (products[product].linea_id == 2) {
                                quanty = document.getElementById('combinada-skinnymass-mediana-quanty').value
                                objs.cantidad = quanty;
                            }
                        }
                        if (products[product].tipo_id == 3) {
                            quanty = document.getElementById('combinada-empanada-quanty').value
                            objs.cantidad = quanty;
                            objs.nombre = 'Arabe: x' + cantU1 + '<br/>Jamon y queso: x' + cantU2;
                            objs.precio = products[34].precio;
                            objs.id = products[product].id + ',' + products[product2].id + ',' + cantU1+ ',' + cantU2;

                            paramsCart.push({
                                id: objs.id,
                                producto: products[product].id,
                                cantidad: cantU1,
                            })
                            paramsCart.push({
                                id: objs.id,
                                producto: products[product2].id,
                                cantidad: cantU2,
                            })
                        }else{
                            paramsCart.push({
                                id: objs.id,
                                producto: products[product].id,
                                cantidad: parseFloat(quanty)/2,
                            })
                            paramsCart.push({
                                id: objs.id,
                                producto: products[product2].id,
                                cantidad: parseFloat(quanty)/2,
                            })
                        }

                        if (products[product].categoria_id == 1) {
                            objs.categoria = 'Pizza'
                        }
                        if (products[product].categoria_id == 2) {
                            objs.categoria = 'Empanada'
                        }
                        if (products[product].tipo_id == 1) {
                            objs.tipo = 'Grande'
                        }
                        if (products[product].tipo_id == 2) {
                            objs.tipo = 'Mediana'
                        }
                        if (products[product].tipo_id == 3) {
                            objs.tipo = ''
                        }
                        if (products[product].linea_id == 1) {
                            objs.linea = 'Comun'
                        }
                        if (products[product].linea_id == 2) {
                            objs.linea = 'SkinnyMass'
                        }
                        if (products[product].linea_id == 3) {
                            objs.linea = ''
                        }
                    }
                }
            }
        }
    }

    var existe = false;
    cart.forEach(function (element, index) {
        if (element.id == objs.id) {
            cart[index].cantidad = parseInt(cart[index].cantidad) + parseInt(objs.cantidad);
            existe = true;
        }
    })
    if (existe == false || cart == null) {
        cart.push(objs)
    }

    Refresh()
}

function Refresh() {
    document.getElementById('pushCart').innerHTML = ''

    var newItem = ''
    cart.forEach(function (element) {
        newItem += '<div class="row">'
        newItem += ' <div class="col-md-8">'
        newItem += '<span><b>' + element.categoria + ' ' + element.tipo + ' ' + element.linea + '</b></span><br/>'
        newItem += '<span>' + element.nombre + '</span><br/>'
        newItem += '<span><b>x' + element.cantidad + ' $' + element.precio + '</b></span>'
        newItem += '</div>'
        newItem += '<div class="col-md-4">'
        newItem += '<div class="cart-total-price"><br/>$' + element.precio * element.cantidad + '</div>&nbsp;&nbsp;<img class="close-cart" src="img/close.svg" width="20px" onclick="Remove(\'' + element.id + '\')">'
        newItem += '</div></div><hr/>'
        document.getElementById('pushCart').innerHTML += newItem
        newItem = ''
    })

}

function Remove(item) {
    var senal = false;
    var copyOfCart = cart;
    var copyOfParamasCart = paramsCart;
    cart = [];
    paramsCart = [];
    copyOfCart.forEach(function (element, index) {
        if (element.id != item) {
            cart.push(copyOfCart[index])
            senal = true;
        }
    })

    senal = false;
    copyOfParamasCart.forEach(function (element2, index2) {
        if (element2.id != item) {
            paramsCart.push(copyOfParamasCart[index2])
            senal = true;
        }
    })

    if (senal == false) {
        cart = []
    }
    Refresh();
}

function Total() {
    var total = 0;
    cart.forEach(function (element, index) {
        total = parseInt(total) + parseInt(element.precio * element.cantidad)
    })

    return total
}

function Vuelto() {
    var pago = document.getElementById('paga-con').value
    var total = Total();
    var vuelto = parseInt(pago) - parseInt(total);
    document.getElementById('dar').innerText = vuelto
}

var nombreCliente = '';

function saveClientName() {
    nombreCliente = document.getElementById('nombre-cliente').value;
}

var domicilioCliente = '';

function saveClientDomicilio() {
    domicilioCliente = document.getElementById('domicilio-cliente').value;
}

var telefonoCliente = '';

function saveClientTelefono() {
    telefonoCliente = document.getElementById('telefono-cliente').value;
}

var valeMotivo = '';

function saveValeMotivo() {
    valeMotivo = document.getElementById('vale-motivo').value;
}

var valePago = false;

function saveValePago() {
    valePago = document.getElementById('vale-pago').checked;
}

function End() {
    var total = Total()
    Swal.mixin({
        confirmButtonText: 'Confirmar &rarr;',
        confirmButtonText: 'Confirmar &rarr;',
        cancelButtonText: 'Cancelar',
        showCancelButton: true,
        progressSteps: ['1', '2', '3']
    }).queue([
        {
            html:
                '<h4><b>Nombre del cliente</b></h4><input class="form-control" value="' + nombreCliente + '" id="nombre-cliente" onkeyup="saveClientName()" value="">' +
                '<h4><b>Domicilio del cliente</b></h4><input class="form-control" value="' + domicilioCliente + '" id="domicilio-cliente" onkeyup="saveClientDomicilio()" value="">' +
                '<h4><b>Telefono del cliente</b></h4><input class="form-control" value="' + telefonoCliente + '" id="telefono-cliente" onkeyup="saveClientTelefono()" value="">',
        },
        {
            html:
                '<h2><b>Total: $' + total + '</b></h2><input class="form-control" id="paga-con" value="" onkeyup="Vuelto()"><h3><b>Vuelto: $<span id="dar"></span></b></h3>' +
                '<hr/><h4>Paga con vale <input onchange="saveValePago()" type="checkbox" value="1" id="vale-pago"></h4><input placeholder="Para quien es el vale?" class="form-control" id="vale-motivo" value="" onkeyup="saveValeMotivo()">',
        },
        'Confirmar compra?'
    ]).then((result) => {
        if (result.value) {
            Swal.fire({
                title: 'Hecho!',
                confirmButtonText: 'Aceptar'
            })
            SaveOrder();
            UpdateCaja(total);
            cart = [];
            nombreCliente = '';
            telefonoCliente = '';
            domicilioCliente = '';
            valeMotivo = '';
            valePago = false;
            Refresh();
        }
    })
}

function SaveOrder() {
    var code = getRandomInt();
    cart.forEach(function (element, index) {
        if (valePago === true) {
            var valeStatus = 1;
            var valeMsg = valeMotivo;
        } else {
            var valeStatus = 0;
            var valeMsg = null;
        }
        let query = "INSERT INTO pedidos(cod,nombre,categoria,tipo,linea,cantidad,cliente_nombre,cliente_domicilio,cliente_telefono,vale,vale_motivo,precio) VALUES(" + code + ",'" + element.nombre + "','" + element.categoria + "','" + element.tipo + "','" + element.linea + "','" + element.cantidad + "','" + nombreCliente + "','" + domicilioCliente + "','" + telefonoCliente + "','" + valeStatus + "','" + valeMsg + "','" + element.precio + "')"
        console.log(query);
        connection.query(query, function (err, rows, fields) {
            if (err) {
                console.log("error 1")
            }
        })
    })

    paramsCart.forEach(function (element2, index2) {
        let query2 = "INSERT INTO params_pedidos(producto_id,cantidad) VALUES(" + element2.producto + "," + element2.cantidad + ")"
        console.log(query2);
        connection.query(query2, function (err2, rows2, fields2) {
            if (err2) {
                console.log("error 1")
            }
        })
    })
}

function getRandomInt() {
    return Math.floor(Math.random() * 9000000000) + 1000000000
}

function RouteMain() {
    document.getElementById('main').style.display = 'block'
    document.getElementById('orders').style.display = 'none'
    document.getElementById('products').style.display = 'none'
    document.getElementById('money').style.display = 'none'
    document.getElementById('caja').style.display = 'none'
    document.getElementById('pushTableOrders').innerHTML = ''
    document.getElementById('pushTableProducts').innerHTML = ''
    document.getElementById('pushTableMoney').innerHTML = ''
    document.getElementById('pushTableCaja').innerHTML = ''
}

function RouteProducts() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('orders').style.display = 'none'
    document.getElementById('products').style.display = 'block'
    document.getElementById('money').style.display = 'none'
    document.getElementById('caja').style.display = 'none'
    document.getElementById('pushTableOrders').innerHTML = ''
    document.getElementById('pushTableMoney').innerHTML = ''
    document.getElementById('pushTableCaja').innerHTML = ''
    ViewProducts()
}

function RouteOrders() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('orders').style.display = 'block'
    document.getElementById('products').style.display = 'none'
    document.getElementById('money').style.display = 'none'
    document.getElementById('caja').style.display = 'none'
    document.getElementById('pushTableProducts').innerHTML = ''
    document.getElementById('pushTableMoney').innerHTML = ''
    document.getElementById('pushTableCaja').innerHTML = ''
    ViewOrders()
}

function RouteMoney() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('orders').style.display = 'none'
    document.getElementById('products').style.display = 'none'
    document.getElementById('money').style.display = 'block'
    document.getElementById('caja').style.display = 'none'
    document.getElementById('pushTableOrders').innerHTML = ''
    document.getElementById('pushTableProducts').innerHTML = ''
    document.getElementById('pushTableCaja').innerHTML = ''
    ViewMoney()
    graphVentas()
}

function RouteCaja() {
    document.getElementById('main').style.display = 'none'
    document.getElementById('orders').style.display = 'none'
    document.getElementById('products').style.display = 'none'
    document.getElementById('money').style.display = 'none'
    document.getElementById('caja').style.display = 'block'
    document.getElementById('pushTableOrders').innerHTML = ''
    document.getElementById('pushTableProducts').innerHTML = ''
    document.getElementById('pushTableMoney').innerHTML = ''
    ViewCaja()
}

function displayOrder(id) {
    if (document.getElementById(id).style.display == 'inline-table') {
        document.getElementById(id).style.display = 'none';
    } else {
        document.getElementById(id).style.display = 'inline-table';
    }
}

function ViewOrders() {
    document.getElementById('pushTableOrders').innerHTML = ''

    let query = "SELECT * FROM pedidos ORDER BY id DESC LIMIT 100"
    console.log(query)
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var newItem = ''
        var head = ''
        var footer = ''
        var oldCod = 'vacio'
        var oldClienteNombre = ''
        var oldClienteDomicilio = ''
        var oldClienteTelefono = ''
        var oldDate = ''
        var currentCod = ''
        var currentClienteNombre = ''
        var currentClienteDomicilio = ''
        var currentClienteTelefono = ''
        var currentDate = ''
        var content = ''
        console.log(rows.length)
        rows.forEach(function (element, index) {
            console.log("hola2")
            if (element.vale_motivo == null) {
                var vale_motivo = '';
            } else {
                var vale_motivo = element.vale_motivo;
            }

            currentCod = element.cod
            currentClienteNombre = element.cliente_nombre;
            currentClienteDomicilio = element.cliente_domicilio;
            currentClienteTelefono = element.cliente_telefono;
            currentDate = ("0" + element.fecha.getDate()).slice(-2) + '-' + ("0" + element.fecha.getMonth()).slice(-2) + '-' + element.fecha.getFullYear() + ' ' + ("0" + element.fecha.getHours()).slice(-2) + ':' + ("0" + element.fecha.getMinutes()).slice(-2);

            if (oldCod == 'vacio') {
                oldCod = currentCod;
                oldClienteNombre = currentClienteNombre;
                oldClienteDomicilio = currentClienteDomicilio;
                oldClienteTelefono = currentClienteTelefono;
                oldDate = currentDate;
            }

            if (oldCod != currentCod) {
                content = newItem;
                console.log(element.id)
                head += '<button class="btn-order col-md-12 btn btn-success" onclick="displayOrder(' + oldCod + ')"><span class="btn-order-info">Pedido #' + oldCod + ' <b class="info-cliente">Cliente: ' + oldClienteNombre + '</b></span><span class="btn-order-date">' + oldDate + '</span></button>'
                head += '<div class="col-md-12" style="display: none;" id="' + oldCod + '">';
                head += '<b>Domicilio: </b>' + oldClienteDomicilio;
                head += '<b> Telefono: </b>' + oldClienteTelefono;
                head += '<table class="table table-condensed orders">'
                head += '<thead class="thead-black"><tr><th>Codigo</th><th>Categoria</th><th>Producto</th><th>Tamano</th><th>Linea</th><th>Cantidad</th><th>Precio</th><th>Total</th><th>Vale</th><th>Fecha</th></tr></thead>'
                head += '<tbody class="alternate">'

                footer = '</tbody></table></div>'

                newItem = head + content + footer;

                document.getElementById('pushTableOrders').innerHTML += newItem
                newItem = ''
                head = ''
                footer = ''

                oldCod = currentCod;
                oldClienteNombre = currentClienteNombre;
                oldClienteDomicilio = currentClienteDomicilio;
                oldClienteTelefono = currentClienteTelefono;
                oldDate = currentDate;
            }

            newItem += '<tr>'
            newItem += '<td>' + currentCod + '</td>'
            newItem += '<td>' + element.categoria + '</td>'
            newItem += '<td>' + element.nombre + '</td>'
            newItem += '<td>' + element.tipo + '</td>'
            newItem += '<td>' + element.linea + '</td>'
            newItem += '<td>' + element.cantidad + '</td>'
            newItem += '<td>' + element.precio + '</td>'
            newItem += '<td>' + element.precio * element.cantidad + '</td>'
            newItem += '<td>' + vale_motivo + '</td>'
            newItem += '<td>' + currentDate + '</td>'
            newItem += '</tr>'

            if (rows.length == (index + 1)) {
                content = newItem;
                console.log(element.id)
                head += '<button class="btn-order col-md-12 btn btn-success" onclick="displayOrder(' + oldCod + ')"><span class="btn-order-info">Pedido #' + oldCod + ' <b class="info-cliente">Cliente: ' + oldClienteNombre + '</b></span><span class="btn-order-date">' + oldDate + '</span></button>'
                head += '<div class="col-md-12" style="display: none;" id="' + oldCod + '">';
                head += '<b>Domicilio: </b>' + oldClienteDomicilio;
                head += '<b> Telefono: </b>' + oldClienteTelefono;
                head += '<table class="table table-condensed orders">'
                head += '<thead class="thead-black"><tr><th>Codigo</th><th>Categoria</th><th>Producto</th><th>Tamano</th><th>Linea</th><th>Cantidad</th><th>Precio</th><th>Total</th><th>Vale</th><th>Fecha</th></tr></thead>'
                head += '<tbody class="alternate">'

                footer = '</tbody></table></div>'

                newItem = head + content + footer;

                document.getElementById('pushTableOrders').innerHTML += newItem
                newItem = ''
                head = ''
                footer = ''

                oldCod = currentCod;
                oldClienteNombre = currentClienteNombre;
                oldClienteDomicilio = currentClienteDomicilio;
                oldClienteTelefono = currentClienteTelefono;
                oldDate = currentDate;
            }

        })
    })
}

function ViewMoney() {
    document.getElementById('pushTableMoney').innerHTML = ''

    let query = "SELECT * FROM pedidos"
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var precioTotal = 0;
        rows.forEach(function (element) {
            precioTotal += parseInt(element.precio) * parseInt(element.cantidad);
        })
        document.getElementById('pushTableMoney').innerHTML += '<div class="col-md-4 caja-box-red"><h3><img src="img/coin.svg" width="50" height="50"> <b>Ventas totales: </b>$' + precioTotal + '</h3></div>';
        document.getElementById('pushTableMoney').innerHTML += '<div class="col-md-12"><br></div><div class="col-md-4 caja-box-red"><h3><img src="img/calendar.svg" width="50" height="50"><b> Seleccionar día</b></h3><input class="form-control" oninput="ViewDateMoney()" type="date" id="date-money"><div id="view-date-money"></div></div>'
    })
}

function ViewDateMoney() {
    document.getElementById('view-date-money').innerHTML = '';
    var dateStart = document.getElementById('date-money').value
    var dateEnd = dateStart + ' 23:59:59'

    if (dateStart != '') {
        var dateObject = new Date(dateStart)
        var dateMsg = ("0" + dateObject.getDate()).slice(-2) + '-' + ("0" + dateObject.getMonth()).slice(-2) + '-' + dateObject.getFullYear()

        let query = "SELECT * FROM pedidos WHERE fecha >= '" + dateStart + "' AND fecha <= '" + dateEnd + "'"
        console.log(query)
        connection.query(query, function (err, rows, fields) {
            if (err) {
                console.log("error 1")
            }
            var precioTotal = 0;
            rows.forEach(function (element) {
                precioTotal += parseInt(element.precio) * parseInt(element.cantidad);
            })
            document.getElementById('view-date-money').innerHTML += '<h3>Ventas del día ' + dateMsg + ': $' + precioTotal + '</h3>';
        })
    }
}

function ViewCaja() {
    document.getElementById('pushTableCaja').innerHTML = ''

    let query = "SELECT * FROM caja"
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var inicial = 0;
        var actual = 0;
        rows.forEach(function (element) {
            inicial = element.inicial;
            actual = element.actual;
        })

        if (inicial == 0) {
            document.getElementById('pushTableCaja').innerHTML = '<div class="col-md-4 caja-box-red"><h3 class="text-center"><img src="img/account.png" width="50" height="50"> Iniciar caja</h3><input placeholder="Dinero en caja" class="form-control" type="number" id="caja-inicial"><br/><button class="col-md-12 caja-button btn btn-success" onclick="OpenCaja()">Iniciar</button></div>'
        }

        if (inicial > 0) {
            document.getElementById('pushTableCaja').innerHTML = '<div class="col-md-4 caja-box-green"><h3><img src="img/account.png" width="50" height="50"><b> Caja inicial: $</b>' + inicial + '</h3></div><div class="col-md-1"></div><div class="col-md-4 caja-box-green"><h3><img src="img/account.png" width="50" height="50"><b> Caja actual: $</b>' + actual + '</h3></div>'
            document.getElementById('pushTableCaja').innerHTML += '<div class="row"><div class="col-md-4"><br><button class="btn btn-danger" onclick="ConfirmCloseCaja()">Cerrar caja</button></div></div>'
        }
    })
}

function OpenCaja() {
    var valorCaja = document.getElementById('caja-inicial').value

    let query = "UPDATE caja SET inicial = " + valorCaja + " , actual = " + valorCaja
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        ViewCaja();
    })
}

function ConfirmCloseCaja() {
    document.getElementById('pushTableCaja').innerHTML += '<br><div class="col-md-4 alert alert-danger"><h4>¿Confirma que quiere cerrar la caja?</h4><button class="btn btn-success" onclick="CloseCaja()">Cerrar</button></div>'

}

function CloseCaja() {
    let query = "SELECT * FROM caja"
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var inicial = 0;
        var actual = 0;
        rows.forEach(function (element) {
            inicial = element.inicial;
            actual = element.actual;
        })
        let query2 = "INSERT INTO caja_historial (inicial,final) VALUES('" + inicial + "','" + actual + "')"
        connection.query(query2, function (err2, rows2, fields2) {
        })
        let query3 = "UPDATE caja SET inicial = 0, actual = 0"
        connection.query(query3, function (err3, rows3, fields3) {
            ViewCaja();
        })
    })
}

function UpdateCaja(valueLess) {

    let query = "SELECT * FROM caja"
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var actual = 0;
        rows.forEach(function (element) {
            actual = element.actual;
        })
        let query2 = "UPDATE caja SET actual = " + (actual + valueLess)
        connection.query(query2, function (err2, rows2, fields2) {
            ViewCaja();
        })
    })
}

var productsPrice = []

function ViewProducts() {
    document.getElementById('pushTableProducts').innerHTML = ''

    let query = "SELECT productos.id, productos.nombre, productos.precio, categorias.nombre as categoria, tipo.nombre as tipo, linea.nombre as linea FROM `productos` JOIN categorias ON productos.categoria_id = categorias.id JOIN linea ON productos.linea_id = linea.id JOIN tipo ON productos.tipo_id = tipo.id"

    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
        var newItem = ''
        rows.forEach(function (element) {
            newItem += '<div class="col-xs-2 col-sm-2 col-md-2 section-products">'
            newItem += '<input type="number" id="edit' + element.id + '" value="' + element.precio + '" class="form-control">'
            newItem += '</div>'
            newItem += '<div class="col-xs-10 col-sm-10 col-md-10">'
            newItem += '<h4>' + element.nombre + ' ' + element.categoria + ' ' + element.tipo + ' ' + element.linea + '</h4>'
            newItem += '</div>'
            document.getElementById('pushTableProducts').innerHTML += newItem
            newItem = ''
            productsPrice.push({id: element.id, precio: element.precio})
        })
    })
}

function SaveProducts() {
    console.log(productsPrice)
    let query = "UPDATE productos SET precio = CASE"
    productsPrice.forEach(function (element, index) {
        var currentItem = document.getElementById("edit" + element.id).value
        query += " WHEN id = " + element.id + " THEN " + currentItem
    })
    query += " ELSE precio END"
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }
    })
}

function graphVentas() {
    var dataX = [''];
    var dataY = [0];

    let query = "SELECT SUM(precio*cantidad) as precio_dia, DATE(fecha) as nueva_fecha, COUNT(*) as cantidad_ventas FROM `pedidos` GROUP BY nueva_fecha"
    console.log(query)
    connection.query(query, function (err, rows, fields) {
        if (err) {
            console.log("error 1")
        }

        var dateFormat = null;
        rows.forEach(function (element) {
            dateFormat = ("0" + element.nueva_fecha.getDate()).slice(-2) + '-' + ("0" + element.nueva_fecha.getMonth()).slice(-2) + '-' + element.nueva_fecha.getFullYear()
            dataY.push(element.cantidad_ventas);
            dataX.push(dateFormat);
        })

        console.log(dataX)
        var popCanvas = document.getElementById("popChart");

        var barChart = new Chart(popCanvas, {
            type: 'bar',
            data: {
                labels: dataX,
                datasets: [{
                    label: 'Ventas',
                    data: dataY,
                    backgroundColor: '#7d0d0d',
                }]
            },
            options: {
                maintainAspectRatio: false,
                legend: {
                    labels: {
                        fontColor: '#fff'
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true,
                            fontColor: '#fff'
                        },
                    }],
                    xAxes: [{
                        ticks: {
                            fontColor: '#fff'
                        },
                    }]
                }
            }
        });

    })
}

var combinadaPizzaGrande1 = null;
var combinadaPizzaGrande2 = null;

function clickBtnCombinadaPizzaGrande() {
    combinadaPizzaGrande1 = document.getElementById("combinada-pizza-grande-1").value;
    combinadaPizzaGrande2 = document.getElementById("combinada-pizza-grande-2").value;
    addCart(combinadaPizzaGrande1, combinadaPizzaGrande2)
}

var combinadaPizzaMediana1 = null;
var combinadaPizzaMediana2 = null;

function clickBtnCombinadaPizzaMediana() {
    combinadaPizzaMediana1 = document.getElementById("combinada-pizza-mediana-1").value;
    combinadaPizzaMediana2 = document.getElementById("combinada-pizza-mediana-2").value;
    addCart(combinadaPizzaMediana1, combinadaPizzaMediana2)
}

var combinadaSkinnyMassGrande1 = null;
var combinadaSkinnyMassGrande2 = null;

function clickBtnCombinadaSkinnyMassGrande() {
    combinadaSkinnyMassGrande1 = document.getElementById("combinada-skinnymass-grande-1").value;
    combinadaSkinnyMassGrande2 = document.getElementById("combinada-skinnymass-grande-2").value;
    addCart(combinadaSkinnyMassGrande1, combinadaSkinnyMassGrande2)
}

var combinadaSkinnyMassMediana1 = null;
var combinadaSkinnyMassMediana2 = null;

function clickBtnCombinadaSkinnyMassMediana() {
    combinadaSkinnyMassMediana1 = document.getElementById("combinada-skinnymass-mediana-1").value;
    combinadaSkinnyMassMediana2 = document.getElementById("combinada-skinnymass-mediana-2").value;
    addCart(combinadaSkinnyMassMediana1, combinadaSkinnyMassMediana2)
}

var combinadaEmpanadas1 = null;
var combinadaEmpanadas2 = null;
var text1 = null;
var text2 = null;

function clickBtnCombinadaEmpanadas() {
    combinadaEmpanadas1 = document.getElementById("combinada-empanada-1").value;
    combinadaEmpanadas2 = document.getElementById("combinada-empanada-2").value;
    text1 = document.getElementById("combinada-empanada-1").options[document.getElementById("combinada-empanada-1").selectedIndex].innerText;
    text2 = document.getElementById("combinada-empanada-2").options[document.getElementById("combinada-empanada-2").selectedIndex].innerText;
    var cant1 = (text1.split("x"))[1];
    var cant2 = (text2.split("x"))[1];

    if (parseInt(cant1) + parseInt(cant2) == 12) {
        addCart(combinadaEmpanadas1, combinadaEmpanadas2, cant1, cant2)
        document.getElementById("error-empanada").innerHTML = '';
    }
    if (parseInt(cant1) + parseInt(cant2) > 12) {
        document.getElementById("error-empanada").innerHTML = '<br/><div class="alert alert-danger">Error! Estas intentando agregar mas de 12 empanadas!</div>';
    }
    if (parseInt(cant1) + parseInt(cant2) < 12) {
        document.getElementById("error-empanada").innerHTML = '<br/><div class="alert alert-danger">Error! Estas intentando agregar menos de 12 empanadas!</div>';
    }
}