let contacts = [
    {
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
    }
];

let op;
do {
    op = window.prompt("1. Mostar el primer contacto \n2. Mostar el ultimo contacto \n3. Mostrar todos los contactos  \n4. Agragar un nuevo contacto \n5. Salir del programa","elije una opcion:");
    switch(op){
        case "1":
            showContact(contacts,0);
        break;
        case "2":
            showContact(contacts,(contacts.length)-1);
        break;
        case "3":
            showAllContacts(contacts);
        break;
        case "4":
            let nam = window.prompt("Digite su Nombre: ");
            let phone = window.prompt("Digite su Numero de Telefono: ");
            let email = window.prompt("Digite su Correo Electronico: ");
            addNewContacts(contacts,nam, phone,email);
        break;
        case "5":
            alert("Chausito ^^");
        break;
        default:
            alert("No existe esa opcion")
    }
} while(op != 5);

function showContact(lisCont, numInd) {
    if (lisCont instanceof Array && lisCont[numInd]) {
        console.log(`${lisCont[numInd].name} / ${lisCont[numInd].phone} / ${lisCont[numInd].email}`);
    }
}

function showAllContacts(lisCont) {
    if (lisCont instanceof Array) {
        for (let i = 0; i < lisCont.length; i++) {
            console.log(`${lisCont[i].name} / ${lisCont[i].phone} / ${lisCont[i].email}`);        
        }
    }
}

function addNewContacts(lisCont, nom, cell, corrElec ) {
    if (contacts instanceof Array && nom && cell && corrElec) {
        lisCont.push({
            name: nom,
            phone: cell,
            email: corrElec
        });
        alert("Se agrego con exito!");
    }
}