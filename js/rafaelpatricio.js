/* //LAB 2.0.15 Variables
let name1 = "Maxwell Wright";
let phone1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let name2 = "Raja Villarreal";
let phone2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let name3 = "Helen Richards";
let phone3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("Primer contacto:");
console.log(name1);
console.log(phone1);
console.log(email1);

console.log("\nÚltimo contacto:");
console.log(name3);
console.log(phone3);
console.log(email3);

//LAB 2.2.5 Data Types
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }, {
    name: "Maisie Haley",
    phone: "0913 531 3030",
    email: "risus.Quisque@urna.ca."
    }];

//LAB 3.2.5 Interaction 
let newName = prompt("Ingrese el nombre del nuevo contacto:");
let newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
let newEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

let newContacts = {
    name: newName,
    phone: newPhone,
    email: newEmail
};

contacts.push(newContacts);

let last = contacts.length - 1;

console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);

//LAB 4.0.9 Conditional execution
let op = prompt("1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3. Agregar un nuevo contacto");

if (op === "1") {
    console.log("Primer contacto:");
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
} else if (op === "2") {
    console.log("Último contacto:");
    let last = contacts.length - 1;
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
} else if (op === "3") {
    let newName = prompt("Ingrese el nombre del nuevo contacto:");
    let newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
    let newEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

    if (newName && newPhone && newEmail) {
        let nuevoContacto = {
            name: newName,
            phone: newPhone,
            email: newEmail
        };

        contacts.push(newContacts);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
} else {
    console.log("Opción inválida. Por favor, elige una opción válida (1, 2 o 3).");
}

//LAB 4.1.12 Loops
let op;

while (op !== "quit") {
    op = prompt("¿Qué deseas hacer?\n1. Mostrar el primer contacto\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Salir del programa");

    switch (op) {
        case "1":
            console.log("Primer contacto:");
            console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
            break;
        case "2":
            console.log("Último contacto:");
            let last = contacts.length - 1;
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            break;
        case "3":
            console.log("Todos los contactos:");
            for (let i = 0; i < contacts.length; i++) {
                console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
            }
            break;
        case "4":
            let newName = prompt("Ingrese el nombre del nuevo contacto:");
            let newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
            let newEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");

            if (newName && newPhone && newEmail) {
                let nuevoContacto = {
                    name: newName,
                    phone: newPhone,
                    email: newEmail
                };
                contacts.push(newContacts);
                console.log("Nuevo contacto agregado exitosamente.");
            } else {
                console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
            }
            break;
        case "5":
            op = "quit";
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

//LAB 5.1.11 Functions(Part 1)
let op;

while (op !== "quit") {
    op = prompt("1. Mostrar contacto en cualquier posicion\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Salir del programa");

    switch (op) {
        case "1":
            console.log("Mostrar contacto:");
            let showContact = prompt("Ingrese la posición del contacto:");
            let i = parseInt(showContact);
            showContact(contacts, i);
            break;
        case "2":
            console.log("Último contacto:");
            let last = contacts.length - 1;
            console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
            break;
        case "3":
            console.log("Todos los contactos:");
            showAllContacts(contacts);
            break;
        case "4":
            let newName = prompt("Ingrese el nombre del nuevo contacto:");
            let newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
            let newEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
            addNewContact(contacts, newName, newPhone, newEmail);
            break;
        case "5":
            op = "quit";
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

function showContact(contacts, i) {
    if (contacts instanceof Array && i >= 0 && i < contacts.length) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    } else {
        console.log("Error: Índice de contacto inválido.");
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }
    } else {
        console.log("Error: La lista de contactos es inválida.");
    }
}

function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        let newContacts = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(newContacts);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
} */

//LAB 5.1.12 Functions(Part 2)
let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];

let op;

while (op !== "quit") {
    op = prompt("1. Mostrar contacto en cualquier posicion\n2. Mostrar el último contacto\n3. Mostrar todos los contactos\n4. Agregar un nuevo contacto\n5. Ordenar contactos\n6. Salir del programa");

    switch (op) {
        case "1":
            console.log("Mostrar contacto:");
            let showContactIndex = prompt("Ingrese la posición del contacto:");
            let showContactPosition = parseInt(showContactIndex);
            showContact(contacts, showContactPosition);
            break;
        case "2":
            console.log("Último contacto:");
            let lastContactIndex = contacts.length - 1;
            console.log(`${contacts[lastContactIndex].name} / ${contacts[lastContactIndex].phone} / ${contacts[lastContactIndex].email}`);
            break;
        case "3":
            console.log("Todos los contactos:");
            showAllContacts(contacts);
            break;
        case "4":
            let newName = prompt("Ingrese el nombre del nuevo contacto:");
            let newPhone = prompt("Ingrese el teléfono del nuevo contacto:");
            let newEmail = prompt("Ingrese el correo electrónico del nuevo contacto:");
            addNewContact(contacts, newName, newPhone, newEmail);
            break;
        case "5":
            let sortOption = prompt("Selecciona cómo quieres ordenar los contactos:\n1. Por nombre\n2. Por teléfono\n3. Por correo electrónico");
            switch (sortOption) {
                case "1":
                    sortContactsBy("name");
                    console.log("Contactos ordenados por nombre:");
                    showAllContacts(contacts);
                    break;
                case "2":
                    sortContactsBy("phone");
                    console.log("Contactos ordenados por teléfono:");
                    showAllContacts(contacts);
                    break;
                case "3":
                    sortContactsBy("email");
                    console.log("Contactos ordenados por correo electrónico:");
                    showAllContacts(contacts);
                    break;
                default:
                    console.log("Opción inválida para ordenar los contactos.");
            }
            break;
        case "6":
            op = "quit";
            console.log("Saliendo del programa...");
            break;
        default:
            console.log("Opción inválida. Por favor, elige una opción válida.");
    }
}

function showContact(contacts, i) {
    if (contacts instanceof Array && i >= 0 && i < contacts.length) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    } else {
        console.log("Error: Índice de contacto inválido.");
    }
}

function showAllContacts(contacts) {
    if (contacts instanceof Array) {
        for (let i = 0; i < contacts.length; i++) {
            console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
        }
    } else {
        console.log("Error: La lista de contactos es inválida.");
    }
}

function addNewContact(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        let newContact = {
            name: name,
            phone: phone,
            email: email
        };
        contacts.push(newContact);
        console.log("Nuevo contacto agregado exitosamente.");
    } else {
        console.log("Error: Debes ingresar nombre, teléfono y correo electrónico para agregar un nuevo contacto.");
    }
}

function sortContactsBy(property) {
    contacts.sort((a, b) => {
        if (a[property] > b[property]) return 1;
        if (a[property] < b[property]) return -1;
        return 0;
    });
}