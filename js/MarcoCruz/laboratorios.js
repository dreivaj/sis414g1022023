//PRÁCTICA DE LABORATORIO 2.0.15.- Variables

let nombre1 = "Maxwell Wright";
let telefono1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let nombre2 = "Rajá Villarreal";
let telefono2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let nombre3 = "Helen Richards";
let telefono3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("---2.015.- Laboratorio: Variables")
console.log("Primer contacto: " + nombre1 + " / " + telefono1 + " / " + email1);
console.log("Ultimo contacto: " + nombre2 + " / " + telefono2 + " / " + email2);

//PRÁCTICA DE LABORATORIO 2.2.5.- Tipos de datos

let contactos = [{
    nombre: "Maxwell Wright",
    telefono: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    nombre: "Raja Villarreal",
    telefono: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    nombre: "Helen Richards",
    telefono: "0800 1111",
    email: "libero@convallis.edu"
    }, {
    nombre: "Maisie Haley",
    telefono: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}];
console.log("---2.2.5.- Laboratorio: Tipos de Datos")
console.log("Primer Contacto: " + contactos[0].name + " / " + 
                                  contactos[0].phone + " / " + 
                                  contactos[0].email); 
console.log("Ultimo Contacto: " + contactos[contactos.length - 1].name + " / " +
                                  contactos[contactos.length - 1].phone + " / " + 
                                  contactos[contactos.length - 1].email);
                                  document.addEventListener("DOMContentLoaded", function () {
                                    const botonToggle = document.getElementById("boton-toggle");
                                    const caja = document.getElementById("mi-caja");
                                    const flecha = document.getElementById("flecha");
                                
                                    botonToggle.addEventListener("click", function () {
                                        if (caja.style.display === "none" || caja.style.display === "") {
                                            caja.style.display = "block"; 
                                            flecha.innerHTML = "&#9650;"; 
                                        } else {
                                            caja.style.display = "none"; 
                                            flecha.innerHTML = "&#9660;"; 
                                        }
                                    });
});

//PRÁCTICA DE LABORATORIO 3.2.5.- Interacción.

let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
                        let nuevoTelefono = prompt("Ingrese el teléfono del nuevo contacto:");
                        let nuevoCorreo = prompt("Ingrese el correo electrónico del nuevo contacto:");
                        let nuevoContacto = {
                          nombre: nuevoNombre,
                          telefono: nuevoTelefono,
                          correo: nuevoCorreo
                        };
                        
                        contactos.push(nuevoContacto);
                      
                        let ultimo = contactos.length - 1;
                      
                        console.log(`${contactos[0].nombre} / ${contactos[0].telefono} / 
                                    ${contactos[0].correo}`);
                        console.log(`${contactos[ultimo].nombre} / ${contactos[ultimo].telefono} / 
                                     ${contactos[ultimo].correo}`); 

//PRÁCTICA DE LABORATORIO 4.0.9.- Ejecuión Condicional.

let opcion = prompt("1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3.Agregar un nuevo contacto");
  
                        if (opcion === "1") {
                            console.log("Primer contacto:");
                            console.log(`${contactos[0].nombre} / ${contactos[0].telefono} / 
                                         ${contactos[0].correo}`);
                        } else if (opcion === "2") {
                            console.log("Último contacto:");
                            let ultimo = contactos.length - 1;
                            console.log(`${contactos[ultimo].nombre} / ${contactos[ultimo].telefono} / 
                                         ${contactos[ultimo].correo}`);
                        } else if (opcion === "3") {
                            let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
                            let nuevoTelefono = prompt("Ingrese el teléfono del nuevo contacto:");
                            let nuevoCorreo = prompt("Ingrese el correo electrónico del nuevo contacto:");
  
                        if (nuevoNombre && nuevoTelefono && nuevoCorreo) {
                            let nuevoContacto = {
                            nombre: nuevoNombre,
                            telefono: nuevoTelefono,
                            correo: nuevoCorreo
                        };

                        contactos.push(nuevoContacto);
                        console.log("Nuevo contacto agregado exitosamente.");
                        } else {
                            console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregarun nuevo contacto.");
                        }
                        } else {
                            console.log("Opción inválida. Por favor, elige una opción válida (1, 2 o 3).");
                        }

//PRÁCTICA DE LABORATORIO 4.1.12.- Bucles.

                        while (opcion !== "salir") {
                            opcion = prompt("Selecciona una acción:\n1. Primer contacto\n2. Último contacto\n3. Todos los contactos\n4. Agregar nuevo contacto\n5. Salir");
                            switch (opcion) {
                                case "1":
                                console.log("Primer contacto:");
                                if (contactss.length > 0) {
                                    console.log(`Nombre: ${contactss[0].name}, Teléfono: ${contactss[0].phone}, 
                                                 Email: ${contactss[0].email}`);
                                } else {
                                    console.log("La lista de contactos está vacía");
                                }
                                break;
                                case "2":
                                console.log("Último contacto:");
                                if (contactss.length > 0) {
                                    const lastIndex = contactss.length - 1;
                                    console.log(`Nombre: ${contactss[lastIndex].name}, Teléfono: 
                                                ${contactss[lastIndex].phone}, Email: ${contactss[lastIndex].email}`);
                                } else {
                                    console.log("La lista de contactos está vacía.");
                                }
                                break;
                                case "3":
                                console.log("Todos los contactos:");
                                if (contactss.length > 0) {
                                    contactss.forEach((contact, index) => {
                                    console.log(`${index + 1}. Nombre: ${contact.name}, Teléfono: ${contact.phone}, 
                                                 Email: ${contact.email}`);
                                });
                                } else {
                                    console.log("La lista de contactos está vacía.");
                                }
                                break;
                                case "4":
                                let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
                                let nuevoTelefono = prompt("Ingrese el teléfono del nuevo contacto:");
                                let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
                                if (nuevoNombre && nuevoTelefono && nuevoEmail) {
                                    let nuevoContacto = {
                                    name: nuevoNombre,
                                    phone: nuevoTelefono,
                                    email: nuevoEmail,
                                };
                                contactss.push(nuevoContacto);
                                console.log("Nuevo contacto agregado.");
                                } else {
                                console.log("Error: Debes ingresar nombre, teléfono y correo electrónico.");
                                }
                                break;
                                case "5":
                                opcion = "salir";
                                console.log("Saliendo...");
                                break;
                                default:
                                console.log("Opción inválida. Por favor, elige una acción válida.");
                                }
                            }

//PRÁCTICA DE LABORATORIO 5.1.11 (PARTE 1)

                    let op;
                        while (op !== "quit") {
                            op = prompt("1. Mostrar contacto por posición\n2. Mostrar último contacto\n3. Mostrar todos los contactos\n4. Agregar nuevo contacto\n5. Salir del programa");
                            switch (op) {
                            case "1":
                                console.log("Mostrar contacto:");
                                let posicionContacto = prompt("Ingrese la posición del contacto:");
                                let i = parseInt(posicionContacto);
                                mostrarContacto(contacts, i);
                                break;
                            case "2":
                                console.log("Último contacto:");
                                let ultimoIndice = contacts.length - 1;
                                console.log(`${contacts[ultimoIndice].name} / ${contacts[ultimoIndice].phone} / 
                                             ${contacts[ultimoIndice].email}`);
                                break;
                            case "3":
                                console.log("Todos los contactos:");
                                mostrarTodosLosContactos(contacts);
                                break;
                            case "4":
                                let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
                                let nuevoTelefono = prompt("Ingrese el teléfono del nuevo contacto:");
                                let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
                                                         agregarNuevoContacto(contacts, nuevoNombre, nuevoTelefono, nuevoEmail);
                                break;
                            case "5":
                                op = "quit";
                                console.log("Saliendo del programa...");
                                break;
                                default:
                                console.log("Opción inválida. Por favor, elige una opción válida.");
                            }
                        }
  
                        function mostrarContacto(contacts, i) {
                        if (contacts instanceof Array && i >= 0 && i < contacts.length) {
                            console.log(`${contacts[i].name} / ${contacts[i].phone} / 
                                         ${contacts[i].email}`);
                        } else {
                                console.log("Error: Índice de contacto inválido.");
                            }
                        }
  
                        function mostrarTodosLosContactos(contacts) {
                        if (contacts instanceof Array) {
                            for (let i = 0; i < contacts.length; i++) {
                                console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                            }
                        } else {
                            console.log("Error: La lista de contactos es inválida.");
                            }
                        }
  
                        function agregarNuevoContacto(contacts, name, phone, email) {
                        if (contacts instanceof Array && name && phone && email) {
                            let nuevoContacto = {
                            name: name,
                            phone: phone,
                            email: email
                            };
                            contacts.push(nuevoContacto);
                            console.log("Nuevo contacto agregado exitosamente.");
                        } else {
                            console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
                            }
                        }

//PRÁCTICA DE LABORATORIO 5.1.12 (PARTE 2)

let contactss = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere.vulputate@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

let continuar = true;
while (continuar) {
    let opcion = prompt("Selecciona una opción:\n1. Mostrar contacto por posición\n2. Mostrar último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Ordenar contactos\n6. Salir del programa");
    switch (opcion) {
        case "1":
            mostrarContactoPorPosicion();
            break;
        case "2":
            mostrarUltimoContacto();
            break;
        case "3":
            mostrarTodosLosContactos();
            break;
        case "4":
            agregarNuevoContacto();
            break;
        case "5":
            ordenarContactos();
            break;
        case "6":
            continuar = false;
            console.log("Saliendo del programa...");
            break;
            default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}
function mostrarContactoPorPosicion() {
let posicion = parseInt(prompt("Ingrese la posición del contacto:"));
if (!isNaN(posicion) && posicion >= 1 && posicion <= contactss.length) {
    let contacto = contactss[posicion - 1];
    mostrarDetalleContacto(contacto);
} else {
    console.log("Error: Posición de contacto inválida.");
    }
}
function mostrarUltimoContacto() {
 if (contactss.length > 0) {
    let ultimoContacto = contactss[contactss.length - 1];
    mostrarDetalleContacto(ultimoContacto);
} else {
    console.log("La lista de contactos está vacía.");
    }
}
function mostrarTodosLosContactos() {
if (contactss.length > 0) {
    contactss.forEach((contacto, index) => {
        console.log(`${index + 1}.`);
        mostrarDetalleContacto(contacto);
    });
} else {
    console.log("La lista de contactos está vacía.");
    }
}
function agregarNuevoContacto() {
    let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
    let nuevoTelefono = prompt("Ingrese el teléfono del nuevo contacto:");
    let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
    if (nuevoNombre && nuevoTelefono && nuevoEmail) {
        let nuevoContacto = {
            name: nuevoNombre,
            phone: nuevoTelefono,
            email: nuevoEmail
        };
        contactss.push(nuevoContacto);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
        }
    }
    function mostrarDetalleContacto(contacto) {
        console.log(`Nombre: ${contacto.name}`);
        console.log(`Teléfono: ${contacto.phone}`);
        console.log(`Email: ${contacto.email}`);
    }
    function ordenarContactos() {
        let opcionOrden = prompt("Selecciona cómo quieres ordenar los contactos: \n1. Por nombre\n2. Por teléfono\n3. Por correo electrónico");

        switch (opcionOrden) {
            case "1":
                contactss.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case "2":
                contactss.sort((a, b) => a.phone.localeCompare(b.phone));
                break;
            case "3":
                contactss.sort((a, b) => a.email.localeCompare(b.email));
                break;
            default:
                console.log("Opción inválida para ordenar los contactos.");
        }
        console.log("Contactos ordenados.");
    }
