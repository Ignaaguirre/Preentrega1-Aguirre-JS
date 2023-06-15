//let userInput = prompt("Ingrese tu nombre:");

//let edad = prompt("Ingresa tu edad:");//
//if (edad <= 17){
 // alert("Lo siento, no tienes edad para ver esta pagina");
  // window.location.replace("https://www.google.com/search?q=prohibido+bebes&tbm=isch&ved=2ahUKEwj-ztXQ_-v9AhV5uJUCHYYMBNsQ2-cCegQIABAA&oq=prohibido+bebes&gs_lcp=CgNpbWcQDDIECCMQJzIFCAAQgAQyBggAEAcQHjIGCAAQCBAeUABYAGCPCWgAcAB4AIABaYgBaZIBAzAuMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=SRkZZL6GDfnw1sQPhpmQ2A0&bih=627&biw=1325&client=opera-gx&hs=fOB");
 //}
 
 let userVar = prompt("Ya es cliente de ANBU GYM? :");
 if (userVar == "si" || userVar=="SI"|| userVar=="yes"|| userVar=="Si"|| userVar=="YES" ){
  const varContra = "contraseña";
  let maxIntentos = 3;
  
  for (var Cont = 1; Cont <= maxIntentos; Cont++) {
    var contraIngresada = prompt("Ingrese la contraseña (Intento n°" + Cont + " de " + maxIntentos + ")");
  
    if (contraIngresada === varContra) {
      alert("Contraseña Correcta. Acceso autorizado");
      break; 
    } else {
      if (Cont === maxIntentos) {
        alert("Exediste el maximo de intentos. Acceso denegado.");
      } else {
        alert("Contraseña incorrecta! intente nuevamente.");
      }
    }
  }
    alert("Bienvenido " + userInput + " !");
  }
  
 else{
 let nuevoNombre= prompt("Ingrese su nombre: ")
 let nuevaEdad= prompt("Ingrese su edad: ")
 if (nuevaEdad <= 17){
   alert("Lo siento, no tienes edad para ver esta pagina");
 
    window.location.replace("https://www.google.com/search?q=prohibido+bebes&tbm=isch&ved=2ahUKEwj-ztXQ_-v9AhV5uJUCHYYMBNsQ2-cCegQIABAA&oq=prohibido+bebes&gs_lcp=CgNpbWcQDDIECCMQJzIFCAAQgAQyBggAEAcQHjIGCAAQCBAeUABYAGCPCWgAcAB4AIABaYgBaZIBAzAuMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=SRkZZL6GDfnw1sQPhpmQ2A0&bih=627&biw=1325&client=opera-gx&hs=fOB");
 
   }
 let nuevaDireccion= prompt("Ingrese su direccion: ")
 let nuevoPlan= prompt("Ingrese su plan deseado: ")
 const cliente1= new Cliente (nuevoNombre,nuevaEdad,nuevaDireccion,nuevoPlan);
 console.log(cliente1)
 
 cliente1.bienvenida()
 }
 function Cliente (nombreCliente, edadCliente,direccionCliente,planCliente){
   this.nombre=nombreCliente;
   this.edad=edadCliente;
   this.direccion=direccionCliente;
   this.plan=planCliente;
   this.bienvenida=function(){
     alert("Bienvenido "+ this.nombre)
   }
 }
 // la idea es tener una tienda de productos, que dependiendo el nivel de plan que tenes, te da un porcentaje  de descuento
 // producto numero 1=1000;
 // producto numero 2=2500;
 // producto numero 3=5000;
 const productos = [ 
     {
        nombre: "Botella Anbu",
        precio:1000,
        idProducto:0101
      }, 
      {
         nombre: "Remera Anbu",
         precio:2500,
         idProducto:0202
        },
        {   
          nombre: "Buzo Anbu",
          precio:5000,
          idProducto:0303
        } 
   ]
  // const afirmaciones=["si","SI","Si","sI","yes","YES"] // quise reemplazar el openTieda para que recorra el array y buscar el si en vez de estarlo escribiendolo siempre.
  let salida="";
  let contador=0;
  for(const producto of productos){
    contador+=1; 
   salida+= contador+"-"+ producto.nombre+ "$ "+ producto.precio+ "\n"
  }
 
 let openTienda = prompt ("Desea comprar algo de nuestra tienda?"+ "\n"+ salida)
 if (openTienda == "si" || userVar=="SI"|| userVar=="yes"|| userVar=="Si"|| userVar=="YES" )
 {
 let compra = prompt("Ingrese el numero del producto que quiere comprar")

 if (compra == 1)
 {
  let precio = 1000;
  let planDesc = prompt("Ingrese el tipo de plan al que esta suscripto (rookie, intermedio, avanzado)")
  
  
  if (planDesc == "rookie")
  {
   var precioOriginal=precio;
   var precioFinal= descuentoRookie(precioOriginal);
   alert("Monto a pagar con descuento plan rookie: $" + precioFinal)
  }
 
 
  if (planDesc == "intermedio")
  {
   let precioOriginal=precio;
   let precioFinal= descuentoIntermedio(precioOriginal);
   alert("Monto a pagar con descuento plan intermedio: $" + precioFinal)
  }
 
 
  if (planDesc == "avanzado")
  {
   let precioOriginal=precio;
   let precioFinal= descuentoAvanzado(precioOriginal);
   alert("Monto a pagar con descuento plan avanzado: $" + precioFinal)
  }
 
 }
 if (compra == 2)
 {
   let precio=2500;
   let planDesc = prompt("Ingrese el tipo de plan al que esta suscripto (rookie, intermedio, avanzado)")
  
  
   if (planDesc == "rookie")
   {
    let precioOriginal=precio;
    let precioFinal= descuentoRookie(precioOriginal);
    alert("Monto a pagar con descuento plan rookie: $" + precioFinal)
   }
  
  
   if (planDesc == "intermedio")
   {
    let precioOriginal=precio;
    let precioFinal= descuentoIntermedio(precioOriginal);
    alert("Monto a pagar con descuento plan intermedio: $" + precioFinal)
   }
  
  
   if (planDesc == "avanzado")
   {
    let precioOriginal=precio;
    let precioFinal= descuentoAvanzado(precioOriginal);
    alert("Monto a pagar con descuento plan avanzado: $" + precioFinal)
   }
  
 } 
 if (compra ==3)
 {
   let precio=5000;
   let planDesc = prompt("Ingrese el tipo de plan al que esta suscripto (rookie, intermedio, avanzado)")
  
  
  if (planDesc == "rookie")
  {
   let precioOriginal=precio;
   let precioFinal= descuentoRookie(precioOriginal);
   alert("Monto a pagar con descuento plan rookie: $" + precioFinal)
  }
 
 
  if (planDesc == "intermedio")
  {
   let precioOriginal=precio;
   let precioFinal= descuentoIntermedio(precioOriginal);
   alert("Monto a pagar con descuento plan intermedio: $" + precioFinal)
  }
 
 
  if (planDesc == "avanzado")
  {
   let precioOriginal=precio;
   let precioFinal= descuentoAvanzado(precioOriginal);
   alert("Monto a pagar con descuento plan avanzado: $" + precioFinal)
  }
 
 }
 
 
 }
 
 
 
 function descuentoRookie(precio)
 {
 let descuento = precio * 0.1; //descuento de 10%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }
 
 
 function descuentoIntermedio(precio)
 {
 let descuento = precio * 0.2; //descuento de 20%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }
 
 function descuentoAvanzado(precio)
 {
 let descuento = precio * 0.25; //descuento de 25%
 let precioDescontado= precio - descuento;
 return precioDescontado;
 }
