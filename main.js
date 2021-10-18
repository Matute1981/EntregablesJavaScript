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

// let total = 0;

// function carrito() {
//     do{
//         let productos = prompt("¿Qué producto querés comprar, remera, gorra o ambos?", "Ej: ambos");

//         let cantidad = parseInt(prompt("Cuantos querés comprar?", "0"));

//         let precio = 0;
    
//         switch (productos){
//             case "remera":
//                 precio = 2000;
//                 break;
//             case "gorra":
//                 precio = 1200;
//                 break;
//             case "ambos":
//                 precio = 3200;
//                 break;
            
//             default:
//                 alert("Algunos de los datos ingresados son incorrectos");
//                 precio = 0;
//                 cantidad = 0;
//         }
//         total = total + precio * cantidad;
//         otroProducto = confirm("¿Querés agregar otro prodcuto?");

//     }while (otroProducto);
// }

//     function sumarIva (total){
//             total = total * 1.21;
//             return total;
//         }

//     function aplicarPromocion(total){
//         if(total >= 3872){
//             total = total * 0.85;
//             alert("Tu compra tiene un descuento del 15% y tu subtotal es de $ " + total + " + IVA");
//         }
//         return total;
//     }

//     function calcularEnvio(total){
//         let confirmacion = confirm("Querés envío a domicilio?");
            
//             if(confirmacion && total >= 3200){
//                 alert("El envío es gratuito. El costo total de tu compra es de $ " + total + " IVA incluido");
//             }else if (confirmacion && total < 3200 && total != 0){
//                 alert("Tu costo de envío es de $ 600 final. El total de la operación es de $ " + (total + 600) + " IVA incluido");
//             }
//             else{
//                 alert("El total de tu compra es de $ " + total + " IVA incluido");
//             }
//             return total;
//     }

// carrito();
// calcularEnvio(aplicarPromocion(sumarIva(total)));

// Entregable Clase 5 // Incorporar objetos

let producto = 0;
let cantidadProducto = 0;
let precio = 0;

class Orden{
    constructor(producto, precio, cantidad){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }

    calcularSubTotal(){
        this.subTotal = this.precio * this.cantidad;
    }

    calcularIva(){
        return this.subTotal * 0.21;
    }

    calcularEnvio(){
        if (this.subTotal >= 3200){
            this.envio = 0;
        }else {
            this.envio = 600;
        }
    }

    calcularTotal(){
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
}

function ordenColocada(){
    while(!producto || producto == 0 || producto > 4){
        producto = parseInt(prompt("¿Qué producto desea sumar al carrito? \n 1: Gorra ($1200) \n 2: Remera ($2500) \n 3: CD - El veneno de tu Soledad ($1400) \n 4: CD - El momento Indicado ($1700) "))
    }
    switch(producto){
        case 1 :
            producto = "Gorra";
            precio = 1200;
            break;
        case 2 :
            producto = "Remera";
            precio = 2500;
            break;
        case 3 :
            producto = "CD - El veneno de tu Soledad";
            precio = 1400;
            break;
        case 4 :
            producto = "CD - El momento Indicado";
            precio = 1700;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Producto seleccionado: " + producto + "\n Indicar la cantidad requerida (sólo números):"));
    }
    return new Orden (producto, precio, cantidadProducto)
}

alert("Estamos listos para tu compra!!!");

const pedido = ordenColocada();

pedido.calcularSubTotal();
pedido.calcularIva();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Resumen de la Orden: \n" + "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad + "\n" + "- " + "Total IVA: $" + pedido.calcularIva() + "\n" + "- " + "Costo de Envío: $" + pedido.envio + "\n" + "Total de la compra final: $" + pedido.total);



