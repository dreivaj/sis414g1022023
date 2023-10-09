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

//////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////////////////
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

/////////////////////////////////////////////////////////////////////////////////////////////
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



