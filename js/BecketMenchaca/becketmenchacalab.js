/*2.0.15 Laboratorio "Variables"*/
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
/*  2.2.5 Laboratorio "Data Types ".*/
let contactos = [{
nombre: "Maxwell Wright",
celular: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
nombre: "Raja Villarreal",
celular: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
nombre: "Helen Richards",
celular: "0800 1111",
email: "libero@convallis.edu"
}];
let newContactos = {name:"Maisie Haley", phone:"0913 531 3030", email:"risus.Quisque@urna.ca."};
contactos.push(newContactos);
console.log(contactos.length);
console.log(contactos[0].nombre,"/",contactos[0].celular,"/",contactos[0].email);
console.log(contactos[3].nombre,"/",contactos[3].celular,"/",contactos[3].email);


/* 3.2.5 Laboratorio "Interaction " */
let contacto = [{
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

let nombre = window.prompt("What is your name?"," ");
let telefono = prompt("What is your phone number?");
let email = prompt("What is your email?");
alert("Gracias por introducir los datos,");
let newContacto = {nombre, telefono, email};
contacto.push(newContacto);

let last = contacto.length - 1;
console.log(`${contacto[0].nombre} / ${contacto[0].telefono} / ${contacto[0].email}`);
console.log(`${contacto[last].nombre} / ${contacto[last].telefono} / ${contacto[last].email}`);



/* 4.0.9  Laboratorio "Conditional execution" */
let contact = [{
nombre: "Maxwell Wright",
celular: "(0191) 719 6495",
email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
nombre: "Raja Villarreal",
celular: "0866 398 2895",
email: "posuere.vulputate@sed.com"
}, {
nombre: "Helen Richards",
celular: "0800 1111",
email: "libero@convallis.edu"
}];
 
let menù = "Seleccione una opción:\n" +
            "1. Mostrar el primer contacto\n" +
            "2. Mostrar el último contacto\n" +
            "3. Añadir un nuevo contacto";

let opcion = prompt(menù);

switch (opcion) {
case "1":
    if (contact.length > 0) {
        alert(`Es el Primer contacto:\n${contactos[0].nombre} / ${contactos[0].celular} / ${contactos[0].email}`);
    } else {
        alert("No hay contactos disponibles.");
    }
    break;
case "2":
    if (contactos.length > 0) {
        let lastContact = contactos[contactos.length - 1];
        alert(`Último contacto:\n${lastContact.nombre} / ${lastContact.celular} / ${lastContact.email}`);
    } else {
        alert("No hay contactos disponibles.");
    }
    break;
case "3":
    let name = prompt("Nombre del nuevo contacto:");
    let phone = prompt("Número de teléfono del nuevo contacto:");
    let email = prompt("Correo electrónico del nuevo contacto:");
    if (name && phone && email) {
        let newContact = { name, phone, email };
        contacts.push(newContact);
        alert("Nuevo contacto añadido correctamente.");
    } else {
        alert("Todos los datos son necesarios. El contacto no se ha añadido.");
    }
    break;
    default:
        alert("Opción no válida.");
    break;
}

/* 4.1.12 Laboratorios "Loops".*/
let contactt = [{
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
while (true){
    let menu = "Seleccione una opción:\n" +
               "1. Visualizar el primer contacto\n" +
               "2. Visualizar el último contacto\n" +
               "3. Mostrar todos los contactos\n" +
               "4. Añadir un nuevo contacto\n" +
               "5. Salir del programa";

    let opcion = prompt(menu);

    switch (opcion){
        case "1":
            if (contactt.length > 0){
                alert(`Primer contacto:\n${contactt[0].name} / ${contactt[0].phone} / ${contactt[0].email}`);
            }else {
                alert("No hay contactos disponibles.");
            }
        break;
        case "2":
            if (contactt.length > 0) {
                let lastContact = contact[contact.length - 1];
                alert(`Último contacto:\n${lastContact.name} / ${lastContact.phone} / ${lastContact.email}`);
            }else {
                alert("No hay contactos disponibles.");
            }
        break;
        case "3":
            if (contacts.length > 0) {
                console.log("Todos los contactos:");
                for (let i = 0; i < contacts.length; i++){
                    console.log(`${i + 1}. ${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                }
            }else {
                console.log("No hay contactos disponibles.");
            }
        break;
        case "4":
        let name = prompt("Nombre del nuevo contacto:");
        let phone = prompt("Número de teléfono del nuevo contacto:");
        let email = prompt("Correo electrónico del nuevo contacto:");
        if (name && phone && email) {
            let newContact = { name, phone, email };
            contacts.push(newContact);
            alert("Nuevo contacto añadido correctamente.");
        }else {
            alert("Para añadir un nuevo contacto todos los datos son necesarios.\n"+
                "El contacto no se ha añadido.");
        }
        break;
        case "5":
            alert("Saliendo del programa.");
        break;
        default:
            alert("Opción no válida.");
        break;
    }

    if (opcion === "5"){
        break;
    }
}


/*5.1.11 Laboratorio "Functions (Part 1)"*/
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
 
function showContact(contactList, index){
    if (contactList instanceof Array && index >= 0 && index < contactList.length){
        let contact = contactList[index];
        console.log(`Contacto ${index + 1}:\n${contact.name} / ${contact.phone} / ${contact.email}`);
    } else {
        console.log("Error: Argumentos incorrectos para mostrar un contacto.");
    }
}
  
function showAllContacts(contactList){
    if (contactList instanceof Array){
        if (contactList.length > 0) {
            console.log("Todos los contactos:");
        for (let i = 0; i < contactList.length; i++) {
            console.log(`${i + 1}. ${contactList[i].name} / ${contactList[i].phone} / ${contactList[i].email}`);
        }
        }else{
        console.log("No hay contactos disponibles.");
      }
    } else {
      console.log("Error: Argumento incorrecto para mostrar todos los contactos.");
    }
}
function addNewContact(contactList, name, phone, email) {
    if (contactList instanceof Array && name && phone && email) {
        let newContact = { name, phone, email };
        contactList.push(newContact);
        console.log("Nuevo contacto añadido correctamente.");
    }else{
        console.log("Error: Argumentos incorrectos para añadir un nuevo contacto.");
    }
}
let menuu = "Seleccione una opción:\n" +
            "1. Visualizar un contacto específico\n" +
            "2. Visualizar todos los contactos\n" +
            "3. Añadir un nuevo contacto\n" +
            "4. Salir del programa";
  
while (true) {
    let opcion = prompt(menu);
    switch (opcion) {
        case "1":
            let indexToShow = prompt("Ingrese el índice del contacto a mostrar:");
            showContact(contacts, parseInt(indexToShow) - 1);
        break;
        case "2":
            showAllContacts(contacts);
        break;
        case "3":
            let newName = prompt("Nombre del nuevo contacto:");
            let newPhone = prompt("Número de teléfono del nuevo contacto:");
            let newEmail = prompt("Correo electrónico del nuevo contacto:");
            addNewContact(contacts, newName, newPhone, newEmail);
        break;
        case "4":
            alert("Saliendo del programa.");
        break;
        default:
            alert("Opción no válida.");
        break;
    }
    
    if (opcion === "4") {
      break;
    }
}
/*LAB 5.1.12 FUNCTIONS(Part 2)*/
let contac = [
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
    if (!isNaN(posicion) && posicion >= 1 && posicion <= contacts.length) {
        let contacto = contacts[posicion - 1];
        mostrarDetalleContacto(contacto);
    } else {
        console.log("Error: Posición de contacto inválida.");
    }
}
function mostrarUltimoContacto() {
    if (contacts.length > 0) {
        let ultimoContacto = contacts[contacts.length - 1];
        mostrarDetalleContacto(ultimoContacto);
    } else {
        console.log("La lista de contactos está vacía.");
    }
}
function mostrarTodosLosContactos() {
    if (contacts.length > 0) {
        contacts.forEach((contacto, index) => {
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
        contacts.push(nuevoContacto);
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
    let opcionOrden = prompt("Selecciona cómo quieres ordenar los contactos:\n1. Por nombre\n2. Por teléfono\n3. Por correo electrónico");

    switch (opcionOrden) {
        case "1":
            contacts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case "2":
            contacts.sort((a, b) => a.phone.localeCompare(b.phone));
            break;
        case "3":
            contacts.sort((a, b) => a.email.localeCompare(b.email));
            break;
        default:
            console.log("Opción inválida para ordenar los contactos.");
    }

    console.log("Contactos ordenados.");
}
este