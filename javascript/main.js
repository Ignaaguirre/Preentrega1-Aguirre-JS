let userInput = prompt("Ingrese tu nombre:");
alert("Bienvenido! " + userInput );



// Ask the user for their age
let edad = prompt("Ingresa tu edad:");

// Check if the user is old enough to view the page
if (edad >= 18) {
  // If the user is 18 or older, allow them to view the page
  alert("Bienvenido a la pagina!");
} else {
  // If the user is younger than 18, redirect them to a different page
 alert("Lo siento, no tienes edad para ver esta pagina");
  window.location.replace("https://www.google.com/search?q=prohibido+bebes&tbm=isch&ved=2ahUKEwj-ztXQ_-v9AhV5uJUCHYYMBNsQ2-cCegQIABAA&oq=prohibido+bebes&gs_lcp=CgNpbWcQDDIECCMQJzIFCAAQgAQyBggAEAcQHjIGCAAQCBAeUABYAGCPCWgAcAB4AIABaYgBaZIBAzAuMZgBAKoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=SRkZZL6GDfnw1sQPhpmQ2A0&bih=627&biw=1325&client=opera-gx&hs=fOB");
}
