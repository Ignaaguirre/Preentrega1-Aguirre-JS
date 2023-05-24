let userInput = prompt("Ingrese tu nombre:");

let edad = prompt("Ingresa tu edad:");
if (edad <= 17){
  alert("Lo siento, no tienes edad para ver esta pagina");
   window.location.replace("https://www.google.com/search?q=prohibido+bebes&tbm=isch&ved=2ahUKEwj-ztXQ_-v9AhV5uJUCHYYMBNsQ2-cCegQIABAA&oq=prohibido+bebes&gs_lcp=CgNpbWcQDDIECCMQJzIFCAAQgAQyBggAEAcQHjIGCAAQCBAeUABYAGCPCWgAcAB4AIABaYgBaZIBAzAuMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=SRkZZL6GDfnw1sQPhpmQ2A0&bih=627&biw=1325&client=opera-gx&hs=fOB");
 }
 
let userVar = prompt("Ya es cliente de ANBU GYM? :");
if (userVar == "si" || userVar=="SI"|| userVar=="yes"|| userVar=="Si"|| userVar=="YES" ){
var varContra = "contraseña";
var maxIntentos = 3;

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
  window.location.href = "pages/planes.html";
alert("Echale un vistazo a nuestros planes!")
}



