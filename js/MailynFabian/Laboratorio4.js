let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac. co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];


let opcion = prompt("Elige opción: Mostrar primer contacto (primero), Mostrar último contacto (ultimo), Agregar un nuevo contacto (nuevo)");

switch (opcion) {
    case "primero":
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
        break;
    case "ultimo":
        let last = contacts.length - 1;
        console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);
        break;
    case "nuevo":
        let nombre = prompt("Ingrese el nombre del nuevo contacto:");
        nombre = nombre ? nombre:"null"
        let phone = prompt("Ingrese el teléfono del nuevo contacto:");
        phone = phone ? phone:"null"
        let correo = prompt("Ingrese el correo del nuevo contacto:");
        correo = correo ? phone:"null"
        
        if(nombre !== "null" && phone !== "null" && correo !== "null"){
            let newContacts = {name:nombre, phone:phone, email:correo}
            contacts.push(newContacts);
            break;
        }
            console.log("Opción inválida");
            
        break;
    
}

let lasta = contacts.length - 1;
console.log(`${contacts[lasta].name} / ${contacts[lasta].phone} / ${contacts[lasta].email}`);