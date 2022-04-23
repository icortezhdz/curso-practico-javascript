// //Códigos del cuadrado
// console.group("Cuadrado");
// const L = 5;
// console.log("Los lados del cuadrado son " + L + " cm.")

// const perimetro = L * 4;
// console.log ("El perimetro del cuadrado es " + perimetro + "cm.");

// const area = L * L;
// console.log("El área del cuadrado es " + area + " cm2.");
// console.groupEnd();

// //Códigos del triángulo
// console.group("Triángulo");
// const lado1 = 6;
// const lado2= 6;
// const base = 4;

// const p_triang = lado1 + lado2 + base;
// console.log ("El perimetro del triángulo es " + p_triang + "cm.");

// const h = Math.sqrt(Math.pow(lado1,2) - Math.pow((base/2),2));
// const a_triang = (base * h) / 2;
// console.log("El área del triangulo es " + a_triang + " cm2.");
// console.groupEnd();

// //Códigos del círculo
// console.group("Círculo");
// const radio = 4;
// const diametro = radio * 2;

// console.log("La circunferencia del circulo es de "+ diametro * 3.1415 +" cm.")
// console.log("El área del circulo es de "+ (Math.pow(radio,2) * 3.1415) +" cm2.")
// console.groupEnd();

//Códigos del cuadrado
console.group("Cuadrado");

function p_cuadrado(L){
    return (` ${L*4} cm.`);
}

function a_cuadrado(L){
    return (` ${L*L} cm2.`);
}

console.groupEnd();

//Códigos del triángulo
console.group("Triángulo");

function p_triangulo(lado1, lado2, base){
    return ((lado1 + lado2 + base) + " cm.");
}

function a_triangulo(base, h){
return (((base * h) / 2) + " cm2.");
}

console.groupEnd();

//Códigos del círculo
console.group("Círculo");

function c_circulo(radio){
return (((radio * 2) * 3.1416).toFixed(2) + " cm.");

}

function a_circulo(radio){
    return ((Math.pow(radio,2) * 3.1416).toFixed(2) + " cm2.");
}

console.groupEnd();

//Interacción con HTML
function calcularCuadrado(){
    const valor = (document.getElementById("inp_cuadrado")).value;

    document.getElementById("p_cuadrado").innerHTML = p_cuadrado(valor);
    document.getElementById("a_cuadrado").innerHTML = a_cuadrado(valor);
}

function calcularTriangulo(){
    const lado1 = Number((document.getElementById("inp_triangulo_lado1")).value);
    const lado2 = Number((document.getElementById("inp_triangulo_lado2")).value);
    const base = Number((document.getElementById("inp_triangulo_base")).value);
    const h = (document.getElementById("inp_triangulo_h")).value;

    document.getElementById("p_triangulo").innerHTML = p_triangulo(lado1, lado2, base);
    document.getElementById("a_triangulo").innerHTML = a_triangulo(base, h);
}

function calcularCirculo(){
    const radio = Number((document.getElementById("inp_circulo")).value);

    document.getElementById("c_circulo").innerHTML = c_circulo(radio);
    document.getElementById("a_circulo").innerHTML = a_circulo(radio);
}