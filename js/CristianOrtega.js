let btnhola= document.getElementById("p2")
btnhola.onclick= function(){
   alert("Hola este es el primer parcial")
}
/* //LAB 2.0.15 Variables
let nombre1 = "Maxwell Wright";
let telefono1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let nombre2 = "Raja Villarreal";
let telefono2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let nombre3 = "Helen Richards";
let telefono3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("Primer contacto:");
console.log(nombre1);
console.log(telefono1);
console.log(email1);

console.log("\nÚltimo contacto:");
console.log(nombre3);
console.log(telefono3);
console.log(email3);

//LAB 2.2.5 Data Types
let contactosf = [{
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
    email: "risus.Quisque@urna.ca."
    }];

//LAB 3.2.5 Interaction 
let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
let nuevotel = prompt("Ingrese el teléfono del nuevo contacto:");
let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

let newContacts = {
    nombre: nuevoNombre,
    telefono: nuevotel,
    email: nuevoEmail
};

contactosf.push(newContacts);

let last = contactosf.length - 1;

console.log(${contactosf[0].nombre} / ${contactosf[0].telefono} / ${contactosf[0].email});
console.log(${contactosf[last].nombre} / ${contactosf[last].telefono} / ${contactosf[last].email});

//LAB 4.0.9 Conditional execution
let x = prompt("1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3. Agregar un nuevo contacto");

if (x === "1") {
    console.log("Primer contacto:");
    console.log(${contactosf[0].nombre} / ${contactosf[0].telefono} / ${contactosf[0].email});
} else if (x === "2") {
    console.log("Último contacto:");
    let last = contactosf.length - 1;
    console.log(${contactosf[last].nombre} / ${contactosf[last].telefono} / ${contactosf[last].email});
} else if (x === "3") {
    let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
    let nuevotel = prompt("Ingrese el teléfono del nuevo contacto:");
    let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

    if (nuevoNombre && nuevotel && nuevoEmail) {
        let nuevoContacto = {
            nombre: nuevoNombre,
            telefono: nuevotel,
            email: nuevoEmail
        };

        contactosf.push(newContacts);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
} else {
    console.log("Opción inválida. Por favor, elige una opción válida (1, 2 o 3).");
}

//LAB 4.1.12 Loops
let x;

while (x !== "quit") {
    x = prompt("¿Qué deseas hacer?\n1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Salir del programa");

    switch (x) {
        case "1":
            console.log("Primer contacto:");
            console.log(${contactosf[0].nombre} / ${contactosf[0].telefono} / ${contactosf[0].email});
            break;
        case "2":
            console.log("Último contacto:");
            let last = contactosf.length - 1;
            console.log(${contactosf[last].nombre} / ${contactosf[last].telefono} / ${contactosf[last].email});
            break;
        case "3":
            console.log("Todos los contactos:");
            for (let i = 0; i < contactosf.length; i++) {
                console.log(${contactosf[i].nombre} / ${contactosf[i].telefono} / ${contactosf[i].email});
            }
            break;
        case "4":
            let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
            let nuevotel = prompt("Ingrese el teléfono del nuevo contacto:");
            let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

            if (nuevoNombre && nuevotel && nuevoEmail) {
                let nuevoContacto = {
                    nombre: nuevoNombre,
                    telefono: nuevotel,
                    email: nuevoEmail
                };
                contactosf.push(newContacts);
                console.log("Nuevo contacto agregado exitosamente.");
            } else {
                console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
            }
            break;
        case "5":
            x = "quit";
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

//LAB 5.1.11 Functions(Part 1)
let x;

while (x !== "quit") {
    x = prompt("1. Mostrar contacto en cualquier posicion\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Salir del programa");

    switch (x) {
        case "1":
            console.log("Mostrar contacto:");
            let mostrarcontact = prompt("Ingrese la posición del contacto:");
            let i = parseInt(mostrarcontact);
            mostrarcontact(contactosf, i);
            break;
        case "2":
            console.log("Último contacto:");
            let last = contactosf.length - 1;
            console.log(${contactosf[last].nombre} / ${contactosf[last].telefono} / ${contactosf[last].email});
            break;
        case "3":
            console.log("Todos los contactos:");
            mostrartodos(contactosf);
            break;
        case "4":
            let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
            let nuevotel = prompt("Ingrese el teléfono del nuevo contacto:");
            let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
            anadirnuevo(contactosf, nuevoNombre, nuevotel, nuevoEmail);
            break;
        case "5":
            x = "quit";
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

function mostrarcontact(contactosf, i) {
    if (contactosf instanceof Array && i >= 0 && i < contactosf.length) {
        console.log(${contactosf[i].nombre} / ${contactosf[i].telefono} / ${contactosf[i].email});
    } else {
        console.log("Error: Índice de contacto inválido.");
    }
}

function mostrartodos(contactosf) {
    if (contactosf instanceof Array) {
        for (let i = 0; i < contactosf.length; i++) {
            console.log(${contactosf[i].nombre} / ${contactosf[i].telefono} / ${contactosf[i].email});
        }
    } else {
        console.log("Error: La lista de contactos es inválida.");
    }
}

function anadirnuevo(contactosf, nombre, telefono, email) {
    if (contactosf instanceof Array && nombre && telefono && email) {
        let newContacts = {
            nombre: nombre,
            telefono: telefono,
            email: email
        };
        contactosf.push(newContacts);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
} */

//LAB 5.1.12 Functions(Part 2)
let contactosf = [{
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
    }];

let x;

while (x !== "quit") {
    x = prompt("1. Mostrar contacto en cualquier posicion\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Ordenar contactos\n6. Salir del programa");

    switch (x) {
        case "1":
            console.log("Mostrar contacto:");
            let mostrarcontactoindice = prompt("Ingrese la posición del contacto:");
            let mostrarpocision = parseInt(mostrarcontactoindice);
            mostrarcontact(contactosf, mostrarpocision);
            break;
        case "2":
            console.log("Último contacto:");
            let mostrarUltimoc = contactosf.length - 1;
            console.log(`${contactosf[mostrarUltimoc].nombre} / ${contactosf[mostrarUltimoc].telefono} / ${contactosf[mostrarUltimoc].email}`);
            break;
        case "3":
            console.log("Todos los contactos:");
            mostrartodos(contactosf);
            break;
        case "4":
            let nuevoNombre = prompt("Ingrese el nombre del nuevo contacto:");
            let nuevotel = prompt("Ingrese el teléfono del nuevo contacto:");
            let nuevoEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
            anadirnuevo(contactosf, nuevoNombre, nuevotel, nuevoEmail);
            break;
        case "5":
            let opcionOrden = prompt("Selecciona cómo quieres ordenar los contactos:\n1. Por nombre\n2. Por teléfono\n3. Por correo electrónico");
            switch (opcionOrden) {
                case "1":
                    ordenarcontactos("nombre");
                    console.log("ordenados por nombre:");
                    mostrartodos(contactosf);
                    break;
                case "2":
                    ordenarcontactos("telefono");
                    console.log("ordenados por teléfono:");
                    mostrartodos(contactosf);
                    break;
                case "3":
                    ordenarcontactos("email");
                    console.log("ordenados por correo electrónico:");
                    mostrartodos(contactosf);
                    break;
                default:
                    console.log("coloque una de las opciones.");
            }
            break;
        case "6":
            x = "quit";
            console.log("exit");
            break;
        default:
            console.log("Opción inválida.Elige una opción válida.");
    }
}

function mostrarcontact(contactosf, i) {
    if (contactosf instanceof Array && i >= 0 && i < contactosf.length) {
        console.log(`${contactosf[i].nombre} / ${contactosf[i].telefono} / ${contactosf[i].email}`);
    } else {
        console.log("Error: Índice de contacto inválido.");
    }
}

function mostrartodos(contactosf) {
    if (contactosf instanceof Array) {
        for (let i = 0; i < contactosf.length; i++) {
            console.log(`${contactosf[i].nombre} / ${contactosf[i].telefono} / ${contactosf[i].email}`);
        }
    } else {
        console.log("Error: La lista de contactos es inválida.");
    }
}

function anadirnuevo(contactosf, nombre, telefono, email) {
    if (contactosf instanceof Array && nombre && telefono && email) {
        let nuevoContacto = {
            nombre: nombre,
            telefono: telefono,
            email: email
        };
        contactosf.push(nuevoContacto);
        console.log("Nuevo contacto agregado.");
    } else {
        console.log("Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
}

function ordenarcontactos(property) {
    contactosf.sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
});
}