// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
// in preload scripts, we have access to node.js and electron APIs
// the remote web app will not have access, so this is safe

var ipcRenderer = require('electron').ipcRenderer


init()

function init() {
    var itemQ = ''
    // we get this message from the main process
    ipcRenderer.on('data-products', (event, message) => {
        console.log(message)
        localStorage.setItem("products", JSON.stringify(message));
        var pizzasGrandes = [];
        var pizzasMedianas = [];
        var skinnymassGrandes = [];
        var skinnymassMedianas = [];
        message.forEach(function (element) {
            itemQ += '<div class="col-xs-12 col-sm-12 col-md-12">'
            itemQ += '<div class="row number-input">'
            itemQ += '<button onclick="this.parentNode.querySelector(\'input[type=number]\').stepDown()" class="col-xs-4 col-sm-4 col-md-4"></button>'
            itemQ += '<input id="' + element.id + 'quanty" class="col-xs-4 col-sm-4 col-md-4 quantity" min="0" name="quantity" value="1" type="number">'
            itemQ += '<button onclick="this.parentNode.querySelector(\'input[type=number]\').stepUp()" class="col-xs-4 col-sm-4 col-md-4 plus"></button>'
            itemQ += '</div>';
            itemQ += '</div>';
            if (element.categoria_id == 1) {
                if (element.tipo_id == 1) {
                    if (element.linea_id == 1) {
                        document.getElementById('home1').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
                        pizzasGrandes.push(element);
                    }
                    if (element.linea_id == 2) {
                        document.getElementById('home3').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
                        skinnymassGrandes.push(element);
                    }
                }
                if (element.tipo_id == 2) {
                    if (element.linea_id == 1) {
                        document.getElementById('home2').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
                        pizzasMedianas.push(element);
                    }
                    if (element.linea_id == 2) {
                        document.getElementById('home4').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
                        skinnymassMedianas.push(element);
                    }
                }
            }
            if (element.categoria_id == 2) {
                document.getElementById('home5').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
            }
            if (element.categoria_id == 3) {
                document.getElementById('home6').innerHTML += '<div class="col-xs-3 col-sm-3 col-md-3"><div class="product-content"><button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-danger">' + element.nombre + '</button><h3 class="col-xs-12 col-sm-12 col-md-12 title-price">$' + element.precio + '</h3>' + itemQ + '<button id="' + element.id + '" onclick="addCart(' + element.id + ')" class="col-xs-12 col-sm-12 col-md-12 btn btn-success">Agregar</button></div></div>'
            }
            itemQ = ''
        })
        var pizzasGrandesItem = '';
        var pizzasGrandesItem2 = '';
        pizzasGrandes.forEach(function (element) {
            pizzasGrandesItem += '<option value="' + element.id + '">' + element.nombre + '</option>';
            pizzasGrandesItem2 += '<option value="' + element.id + '">' + element.nombre + '</option>';
        })
        document.getElementById('home1').innerHTML += '<h2 class="col-xs-12 col-sm-12 col-md-12 title-category">Combinada</h2><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-pizza-grande-1">' + pizzasGrandesItem + '</select></div><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-pizza-grande-2">' + pizzasGrandesItem2 + '</select></div><div class="col-xs-2 col-sm-2 col-md-2"><input id="combinada-pizza-grande-quanty" class="col-xs-12 col-sm-12 col-md-12 form-control" min="0" name="quantity" value="1" type="number"></div><div class="col-xs-2 col-sm-2 col-md-2"><a class="btn btn-success" onclick="clickBtnCombinadaPizzaGrande()">Agregar</a></div>'

        var pizzasMedianasItem = '';
        var pizzasMedianasItem2 = '';
        pizzasMedianas.forEach(function (element) {
            pizzasMedianasItem += '<option value="' + element.id + '">' + element.nombre + '</option>';
            pizzasMedianasItem2 += '<option value="' + element.id + '">' + element.nombre + '</option>';
        })
        document.getElementById('home2').innerHTML += '<h2 class="col-xs-12 col-sm-12 col-md-12 title-category">Combinada</h2><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-pizza-mediana-1">' + pizzasMedianasItem + '</select></div><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-pizza-mediana-2">' + pizzasMedianasItem2 + '</select></div><div class="col-xs-2 col-sm-2 col-md-2"><input id="combinada-pizza-mediana-quanty" class="col-xs-12 col-sm-12 col-md-12 form-control" min="0" name="quantity" value="1" type="number"></div><div class="col-xs-2 col-sm-2 col-md-2"><a class="btn btn-success" onclick="clickBtnCombinadaPizzaMediana()">Agregar</a></div>'

        var skinnymassGrandesItem = '';
        var skinnymassGrandesItem2 = '';
        skinnymassGrandes.forEach(function (element) {
            skinnymassGrandesItem += '<option value="' + element.id + '">' + element.nombre + '</option>';
            skinnymassGrandesItem2 += '<option value="' + element.id + '">' + element.nombre + '</option>';
        })
        document.getElementById('home3').innerHTML += '<h2 class="col-xs-12 col-sm-12 col-md-12 title-category">Combinada</h2><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-skinnymass-grande-1">' + skinnymassGrandesItem + '</select></div><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-skinnymass-grande-2">' + skinnymassGrandesItem2 + '</select></div><div class="col-xs-2 col-sm-2 col-md-2"><input id="combinada-skinnymass-grande-quanty" class="col-xs-12 col-sm-12 col-md-12 form-control" min="0" name="quantity" value="1" type="number"></div><div class="col-xs-2 col-sm-2 col-md-2"><a class="btn btn-success" onclick="clickBtnCombinadaSkinnyMassGrande()">Agregar</a></div>'

        var skinnymassMedianasItem = '';
        var skinnymassMedianasItem2 = '';
        skinnymassMedianas.forEach(function (element) {
            skinnymassMedianasItem += '<option value="' + element.id + '">' + element.nombre + '</option>';
            skinnymassMedianasItem2 += '<option value="' + element.id + '">' + element.nombre + '</option>';
        })
        document.getElementById('home4').innerHTML += '<h2 class="col-xs-12 col-sm-12 col-md-12 title-category">Combinada</h2><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-skinnymass-mediana-1">' + skinnymassMedianasItem + '</select></div><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-skinnymass-mediana-2">' + skinnymassMedianasItem2 + '</select></div><div class="col-xs-2 col-sm-2 col-md-2"><input id="combinada-skinnymass-mediana-quanty" class="col-xs-12 col-sm-12 col-md-12 form-control" min="0" name="quantity" value="1" type="number"></div><div class="col-xs-2 col-sm-2 col-md-2"><a class="btn btn-success" onclick="clickBtnCombinadaSkinnyMassMediana()">Agregar</a></div>'

        var empanadasItem = '';
        var empanadasItem2 = '';
        for (i=1;i<12;i++){
            empanadasItem += '<option value="19">Arabe x' + i + '</option>';
            empanadasItem2 += '<option value="20">Jamon y queso x' + i + '</option>';
        }
        document.getElementById('home5').innerHTML += '<h2 class="col-xs-12 col-sm-12 col-md-12 title-category">Combinada</h2><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-empanada-1">' + empanadasItem + '</select></div><div class="col-xs-4 col-sm-4 col-md-4"><select class="form-control" id="combinada-empanada-2">' + empanadasItem2 + '</select></div><div class="col-xs-2 col-sm-2 col-md-2"><input id="combinada-empanada-quanty" class="col-xs-12 col-sm-12 col-md-12 form-control" min="0" name="quantity" value="1" type="number"></div><div class="col-xs-2 col-sm-2 col-md-2"><a class="btn btn-success" onclick="clickBtnCombinadaEmpanadas()">Agregar</a></div><div class="col-md-12" id="error-empanada"></div>'

    })


}