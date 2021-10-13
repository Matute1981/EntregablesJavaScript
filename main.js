// //Declaración de Variables // Entregable Clase 1

// let entrada = prompt ("Ingresa tu Nombre:");

// let numero1 = parseInt(prompt("Ingresa tu Edad:"));

// let numero2 = parseInt(prompt("Ingresa hasta que Edad pensas vivir:"));

// let salida = entrada + " " + "según tus deseos, tienes" + " " + (numero2 - numero1) + " " + "años para disfrutar!! Aprovéchalos ;)" ;

// alert (salida);


// // Entregable Clase 2 // Utilización de condicionales

// let numero1 = parseInt(prompt("Ingrese un número para su comparación:",0));
// let numero2 = parseInt(prompt("Ingrese otro número:",0));
//     if((numero1 >= 1 && numero1 <= 100) && (numero2 >=1 && numero2 <=100)){
//         alert ("Los números ingresados estan entre 1 y 100, ya que son: " + numero1 + " y " + numero2);
//     }else{
//         alert ("Uno de los números ingresados no estan entre 1 y 100. Estos son: " + numero1 + " y " + numero2);
//     }

// Entregable Clase 3 // Algoritmo utilizando un Ciclo

// let texto1 = prompt ("Ingresa tu Nombre:").toUpperCase();
// let textoFinal = texto1;
// let texto2 = " ";

// while(texto2 != "ESC"){
//     texto2 = prompt("Ingrese su otro Nombre:").toUpperCase();
//     textoFinal = textoFinal + " " + texto2;
//     alert (textoFinal)

// }

// Entregable Clase 4 // Programción avanzada con funciones
// Simulador intercativo (Costo total de prod seleccionado por usuario) + Funciones relacionadas

let total = 0;

function carrito() {
    do{
        let productos = prompt("¿Qué producto querés comprar, remera, gorra o ambos?", "Ej: ambos");

        let cantidad = parseInt(prompt("Cuantos querés comprar?", "0"));

        let precio = 0;
    
        switch (productos){
            case "remera":
                precio = 2000;
                break;
            case "gorra":
                precio = 1200;
                break;
            case "ambos":
                precio = 3200;
                break;
            
            default:
                alert("Algunos de los datos ingresados son incorrectos");
                precio = 0;
                cantidad = 0;
        }
        total = total + precio * cantidad;
        otroProducto = confirm("¿Querés agregar otro prodcuto?");

    }while (otroProducto);
}

    function sumarIva (total){
            total = total * 1.21;
            return total;
        }

    function aplicarPromocion(total){
        if(total >= 3872){
            total = total * 0.85;
            alert("Tu compra tiene un descuento del 15% y tu subtotal es de $ " + total + " + IVA");
        }
        return total;
    }

    function calcularEnvio(total){
        let confirmacion = confirm("Querés envío a domicilio?");
            
            if(confirmacion && total >= 3200){
                alert("El envío es gratuito. El costo total de tu compra es de $ " + total + " IVA incluido");
            }else if (confirmacion && total < 3200 && total != 0){
                alert("Tu costo de envío es de $ 600 final. El total de la operación es de $ " + (total + 600) + " IVA incluido");
            }
            else{
                alert("El total de tu compra es de $ " + total + " IVA incluido");
            }
            return total;
    }

carrito();
calcularEnvio(aplicarPromocion(sumarIva(total)));


