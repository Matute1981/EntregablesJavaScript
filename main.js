// //Declaración de Variables // Entregable Clase 1

// let entrada = prompt ("Ingresa tu Nombre:");

// let numero1 = parseInt(prompt("Ingresa tu Edad:"));

// let numero2 = parseInt(prompt("Ingresa hasta que Edad pensas vivir:"));

// let salida = entrada + " " + "según tus deseos, tienes" + " " + (numero2 - numero1) + " " + "años para disfrutar!! Aprovéchalos ;)" ;

// alert (salida);


// Entregable Clase 2 // Utilización de condicionales

let numero1 = parseInt(prompt("Ingrese un número para su comparación:",0));
let numero2 = parseInt(prompt("Ingrese otro número:",0));
    if((numero1 >= 1 && numero1 <= 100) && (numero2 >=1 && numero2 <=100)){
        alert ("Los números ingresados estan entre 1 y 100, ya que son: " + numero1 + " y " + numero2);
    }else{
        alert ("Uno de los números ingresados no estan entre 1 y 100. Estos son: " + numero1 + " y " + numero2);
    }