function precio_nuevo(precio, descuento, codigo){
    
    let resultado = (precio * (100-descuento)/100);
    if (codigo in codigos){
        resultado = (resultado * (100-codigos[codigo])/100);
    }
    return  resultado.toFixed(2);
}

//Interacción con HTML
//Creamos una variable 'validacion' y le asignamos el array 'cupones' con el metodo .find. El cual recorrerá todo el array hasta encontrar la primera coincidencia con la variable 'cuponIngresado'.
const codigos = {
    'MRL10' : 10,
    'LIN15' : 15,
    'ALB20' : 20,
    'AMZ25' : 25,
    'EBY30' : 30
}

var desc = codigos.indexO

function calcular_precio(){
    const precio = Number((document.getElementById("inp_precio")).value);
    const descuento = Number((document.getElementById("inp_descuento")).value);
    const codigo = (document.getElementById("inp_codigo")).value;

    document.getElementById("resultado").innerText = `$ ${precio_nuevo(precio, descuento, codigo)}`;
       
}




 // Object.keys(codigos).forEach(
            
        //     function(i){
        //         console.log(a +"): "+ i);
        //         a++;            }
        // );