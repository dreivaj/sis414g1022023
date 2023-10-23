//2.0.15 Variables  de laboratorio
var name1 = "Maxwell Wright";
var phone1 = "(0191) 719 6495";
var email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

var name2 = "Raja Villarreal";
var phone2 = "0866 398 2895";
var email2 = "posuere.vulputate@sed.com";

var name3 = "Helen Richards";
var phone3 = "0800 1111";
var email3 = "libero@convallis.edu";

console.log("First Contact:");
console.log("Name: " + name1);
console.log("Phone: " + phone1);
console.log("Email: " + email1);

console.log("\nLast Contact:");
console.log("Name: " + name3);
console.log("Phone: " + phone3);
console.log("Email: " + email3);
//2.2.5  LAB  Data Types
var contactList = [
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

var newContact = {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
};
contactList.push(newContact);

console.log("First Contact:");
console.log("Name: " + contactList[0].name);
console.log("Phone: " + contactList[0].phone);
console.log("Email: " + contactList[0].email);

console.log("\nLast Contact:");
console.log("Name: " + contactList[contactList.length - 1].name);
console.log("Phone: " + contactList[contactList.length - 1].phone);
console.log("Email: " + contactList[contactList.length - 1].email);

//3.2.5  LAB  Interaction
var contactList = [
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

var newName = prompt("Ingrese el nombre del nuevo contacto:");
var newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
var newEmail = prompt("Ingrese el correo electrónico para el nuevo contacto:");

var newContact = {
    name: newName,
    phone: newPhone,
    email: newEmail
};

contactList.push(newContact);

console.log("First Contact:");
console.log("Name: " + contactList[0].name);
console.log("Phone: " + contactList[0].phone);
console.log("Email: " + contactList[0].email);

console.log("\nLast Contact:");
console.log("Name: " + contactList[contactList.length - 1].name);
console.log("Phone: " + contactList[contactList.length - 1].phone);
console.log("Email: " + contactList[contactList.length - 1].email);

//3.2.5  LAB  Interaction
var contactList = [
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

var userChoice = prompt("Ingrese su elección (primero, último, nuevo):");

if (userChoice === "first") {
    console.log("First Contact:");
    console.log("Name: " + contactList[0].name);
    console.log("Phone: " + contactList[0].phone);
    console.log("Email: " + contactList[0].email);
} else if (userChoice === "last") {
    console.log("Last Contact:");
    console.log("Name: " + contactList[contactList.length - 1].name);
    console.log("Phone: " + contactList[contactList.length - 1].phone);
    console.log("Email: " + contactList[contactList.length - 1].email);
} else if (userChoice === "new") {
    var newName = prompt("Ingrese el nombre del nuevo contacto:");
    var newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
    var newEmail = prompt("Ingrese el correo electrónico para el nuevo contacto:");

    if (newName && newPhone && newEmail) {
        var newContact = {
            name: newName,
            phone: newPhone,
            email: newEmail
        };

        contactList.push(newContact);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("No se puede agregar un nuevo contacto. Por favor proporcione todos los datos necesarios.");
    }
} else {
    console.log("Elección no válida. Introduzca 'primero', 'último' o 'nuevo'.");
}
//4.0.9  LAB  Conditional execution 
function displayContact(contact) {
    console.log("Name: " + contact.name);
    console.log("Phone: " + contact.phone);
    console.log("Email: " + contact.email);
}

var contactList = [
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

var userChoice;
while (userChoice !== "salir") {
    userChoice = prompt("Ingrese su elección (primero, último, todos, nuevo, salir):");

    switch (userChoice) {
        case "first":
            console.log("Primer contacto:");
            displayContact(contactList[0]);
            break;
        case "last":
            console.log("Último contacto:");
            displayContact(contactList[contactList.length - 1]);
            break;
        case "all":
            console.log("Todos los contactos:");
            for (var i = 0; i < contactList.length; i++) {
                console.log("Contact " + (i + 1) + ":");
                displayContact(contactList[i]);
                console.log("----------------------");
            }
            break;
        case "new":
            var newName = prompt("Ingrese el nombre del nuevo contacto:");
            var newPhone = prompt("Introduce el teléfono del nuevo contacto.:");
            var newEmail = prompt("Ingrese el correo electrónico para el nuevo contacto:");

            if (newName && newPhone && newEmail) {
                var newContact = {
                    name: newName,
                    phone: newPhone,
                    email: newEmail
                };

                contactList.push(newContact);
                console.log("Nuevo contacto agregado exitosamente.");
            } else {
                console.log("No se puede agregar un nuevo contacto. Por favor proporcione todos los datos necesarios.");
            }
            break;
        case "salir":
            console.log("Saliendo del programa. ¡Adiós!");
            break;
        default:
            console.log("Elección no válida. Inténtalo de nuevo.");
    }
}
//4.1.12  LAB  Loops
const contact = [];
let exitProgram = false;

while (!exitProgram) {
    console.log("Acciones disponibles:");
    console.log("1. Mostrar el primer contacto");
    console.log("2. Mostrar el último contacto");
    console.log("3. Mostrar todos los contactos");
    console.log("4. Agregar un nuevo contacto");
    console.log("5. Salga del programa");

    const choice = prompt("Ingrese su elección:").toLowerCase();

    switch (choice) {
        case '1':
        case 'first':
            if (contacts.length > 0)
                console.log("Primer contacto:", contacts[0]);
            else
                console.log("No hay contactos disponibles.");
            break;

        case '2':
        case 'last':
            if (contacts.length > 0)
                console.log("Último contacto:", contacts[contacts.length - 1]);
            else
                console.log("No hay contactos disponibles.");
            break;

        case '3':
        case 'all':
            if (contacts.length > 0) {
                console.log("Todos los contactos:");
                for (const contact of contacts) {
                    console.log(contact);
                }
            } else {
                console.log("No hay contactos disponibles.");
            }
            break;

        case '4':
        case 'new':
            const newContact = prompt("Ingrese el nuevo contacto:");
            contacts.push(newContact);
            console.log("Nuevo contacto agregado:", newContact);
            break;

        case '5':
        case 'quit':
            exitProgram = true;
            break;

        default:
            console.log("Elección no válida. Inténtalo de nuevo.");
    }
}

console.log("El programa finalizó.");
//5.1.11   LAB   Functions (Part 1)
function mostrarContacto(listaContactos, indice) {
    if (listaContactos instanceof Array) {
        if (indice >= 0 && indice < listaContactos.length) {
            console.log("Detalles del contacto:");
            console.log("Nombre:", listaContactos[indice].name);
            console.log("Teléfono:", listaContactos[indice].phone);
            console.log("Número:", listaContactos[indice].number);
        } else {
            console.log("Índice no válido. Contacto no encontrado.");
        }
    } else {
        console.log("Lista de contactos no válida.");
    }
}

function mostrarTodosLosContactos(listaContactos) {
    if (listaContactos instanceof Array) {
        if (listaContactos.length > 0) {
            console.log("Todos los contactos:");
            for (const contacto of listaContactos) {
                console.log("Nombre:", contacto.name);
                console.log("Teléfono:", contacto.phone);
                console.log("Número:", contacto.number);
                console.log("------");
            }
        } else {
            console.log("No hay contactos disponibles.");
        }
    } else {
        console.log("Lista de contactos no válida.");
    }
}

function agregarNuevoContacto(listaContactos, nombre, telefono, numero) {
    if (listaContactos instanceof Array) {
        if (nombre && telefono && numero) {
            const nuevoContacto = { name: nombre, phone: telefono, number: numero };
            listaContactos.push(nuevoContacto);
            console.log("Nuevo contacto agregado:", nuevoContacto);
        } else {
            console.log("Datos de contacto no válidos. Proporcione todos los detalles necesarios.");
        }
    } else {
        console.log("Lista de contactos no válida.");
    }
}

while (true) {
    console.log("Acciones disponibles:");
    console.log("1. Mostrar un contacto específico");
    console.log("2. Mostrar todos los contactos");
    console.log("3. Agregar un nuevo contacto");
    console.log("4. Salir del programa");

    const eleccion = prompt("Ingrese su elección: ");

    switch (eleccion) {
        case '1':
            const indiceAMostrar = parseInt(prompt("Ingrese el índice del contacto a mostrar: "), 10);
            mostrarContacto(contacts, indiceAMostrar);
            break;

        case '2':
            mostrarTodosLosContactos(contacts);
            break;

        case '3':
            const nombreContacto = prompt("Ingrese el nombre del nuevo contacto: ");
            const telefonoContacto = prompt("Ingrese el número de teléfono del nuevo contacto: ");
            const numeroContacto = prompt("Ingrese el número del nuevo contacto: ");
            agregarNuevoContacto(contacts, nombreContacto, telefonoContacto, numeroContacto);
            break;

        case '4':
            console.log("Programa finalizado.");
            return;

        default:
            console.log("Opción no válida. Por favor, intente nuevamente.");
    }
}

//5.1.12   LAB   Functions (Part 2)
const contacts = [
    { name: "Alice", phone: "123456789", email: "alice@example.com" },
    { name: "Bob", phone: "987654321", email: "bob@example.com" },
    { name: "Charlie", phone: "555555555", email: "charlie@example.com" }
];

function displayContacts(contactList) {
    console.log("Contactos actuales:");
    for (const contact of contactList) {
        console.log("Nombre:", contact.name, "Teléfono:", contact.phone, "Correo electrónico:", contact.email);
    }
}

function sortContacts(contactList, sortBy) {
    contactList.sort((a, b) => {
        return a[sortBy].localeCompare(b[sortBy]);
    });
}

console.log("Bienvenido al programa de lista de contactos!");

while (true) {
    console.log("\nAcciones disponibles:");
    console.log("1. Mostrar contactos");
    console.log("2. Ordenar contactos");

    const choice = prompt("Ingrese su elección: ");

    switch (choice) {
        case '1':
            displayContacts(contacts);
            break;

        case '2':
            console.log("Opciones de orden:");
            console.log("a. Ordenar por nombre");
            console.log("b. Ordenar por teléfono");
            console.log("c. Ordenar por correo electrónico");
            const sortOption = prompt("Ingrese su opción de orden: ").toLowerCase();
            switch (sortOption) {
                case 'a':
                    sortContacts(contacts, 'name');
                    console.log("Contactos ordenados por nombre.");
                    break;

                case 'b':
                    sortContacts(contacts, 'phone');
                    console.log("Contactos ordenados por teléfono.");
                    break;

                case 'c':
                    sortContacts(contacts, 'email');
                    console.log("Contactos ordenados por correo electrónico.");
                    break;

                default:
                    console.log("Opción de orden no válida.");
            }
            break;

        default:
            console.log("Opción no válida. Inténtelo de nuevo.");
    }
}
