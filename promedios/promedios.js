// CALCULAR MEDIA ARITMETICA
function calcularPromedio(lista){

    const resultado = lista.reduce(
        function(acc, item){
            return acc += item;
        }, 0
    );
    return resultado/lista.length;
}

//CALCULAR MEDIANA
function calcularMediana(lista){
    var mediana;
    //Ordenar el array
   lista.sort(
        function(a,b){
            return a - b;
        }
    );
    console.log(lista);
    //Validar si el array es par o impar
    const listaPar = esPar(lista.length);
    const mitadLista = parseInt((lista.length)/2);

    if (listaPar){
        mediana = calcularPromedio([lista[mitadLista-1],lista[mitadLista]]);
    } else {
        mediana = lista[mitadLista];
    }

    return mediana;
}

function esPar(mitadLista){
    if (mitadLista % 2 === 0){
        return true;
    } else {
        return false;
    }
}


//CALCULAR MODA

function calcularModa(lista){

    //Función que devuelve un objeto con los resultados agrupados.
    const groupList = agrupar(lista);
    
    //Función que determina cual es el valor que más se repite de la lista ingresada, más no la clave.
    const mayor = esMayor(groupList);

    //Función que devuelve la clave y el valor de la moda
    const moda = imprimirModa(groupList, mayor)

    return moda;
}

function agrupar(lista){
    //Método map para agrupar y guardar en un nuevo objeto los valores que se repiten en el array.
    const groupList = {};
    lista.map(
        function(e){
            if (groupList[e] === undefined){
                groupList[e] = 0;
            }
            groupList[e] += 1;
        }
    );
        return groupList;
}

function esMayor(groupList){
    let mayor = 0;
    Object.keys(groupList).map(
        function(e){
            if (groupList[e] > mayor){
                mayor = groupList[e];
            }
        }
    );
    return mayor;
}

function imprimirModa(groupList, mayor){

    const resultado = Object.keys(groupList)
    .filter(
        function(e){ 
            return groupList[e] === mayor;
        }
    )
    .reduce(
        function(acc, actual){
            acc[actual] = groupList[actual];
            return acc;
        }, {}
    );

return resultado;
}

/*
var grades = {
    linearAlgebra : 90,
    chemistry : 95,
    biology :90,
    languages : 96
 };
 */
    // Object.filter = function(mainObject){

    //     const filtro = Object.keys(mainObject).filter( 
    //             function(ObjectKey){
    //                 return mainObject[ObjectKey] >= 95;
    //             } );

    //     const resultado = filtro.reduce( 
    //             function (acumulador, ObjectKey){
    //                 acumulador[ObjectKey] = mainObject[ObjectKey];
    //                 return acumulador;
    //             }, {} );

    //       return resultado;
    //  }


    //  console.log("The grades are ",grades);

    // var targetSubjects = Object.filter(grades);

    // console.log("Target Subjects are ",targetSubjects);

    // // var targetSubjects = Object.filter(grades);

    // // Object.keys("objeto").filter().reduce()


        // Object.keys(listaCount).forEach(
        //     function(e){
        //         console.log(e);
        //     }
        // );
    //console.log(listaMap);