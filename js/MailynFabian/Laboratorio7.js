let contacts = [
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

    let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

letaddNewContact = function (contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let sortContacts = function (contacts, sortField) {
    if (contacts instanceof Array && sortField) {
        contacts.sort(function (a, b) {
            if (a[sortField] > b[sortField]) {
                return 1;
            } else if (a[sortField] < b[sortField]) {
                return -1;
            } else {
                return 0;
            }
        });
    }
}

let runProgram = function () {
    let option = prompt("Introducir opcion (1. Mostrar un contacto, 2. Mostrar todos los contactos, 3. Agregar nuevo contacto, 4. Ordenar contactos):");

    switch (option) {
        case "1":
            let index = parseInt(prompt("Introduce el indice del contacto que desea mostrar:"));
            showContact(contacts, index);
            break;
        case "2":
            showAllContacts(contacts);
            break;
        case "3":
            let name = prompt("Ingrese nombre del nuevo contacto:");
            let phone = prompt("Ingrese el número de teléfono del nuevo contacto:");
            let email = prompt("Ingrese el email del nuevo contacto:");
            addNewContact(contacts, name, phone, email);
            break;
        case "4":
            let sortOption = prompt("Introduzca la opcion de ordenacion (1. Ordenar por nombre, 2. Ordenar por numero de telefono, 3. Ordenar por email):");
            let sortField;

            switch (sortOption) {
                case "1":
                    sortField = "name";
                    break;
                case "2":
                    sortField = "phone";
                    break;
                case "3":
                    sortField = "email";
                    break;
                default:
                    console.log("Ivalidar opcion");
                    break;
            }

            sortContacts(contacts, sortField);
            break;
        default:
            console.log("Invalidar opcion");
            break;
    }
};

runProgram();