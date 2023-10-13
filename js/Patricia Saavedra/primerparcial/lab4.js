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

let op = window.prompt("1. Mostar el primer contacto \n2. Mostar el ultimo contacto \n3. Agregar un nuevo contaco","elije una opcion:");
switch(op){
    case "1":
        console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    break;
    case "2":
        console.log(`${contacts[(contacts.length)-1].name} / ${contacts[(contacts.length)-1].phone} / ${contacts[(contacts.length)-1].email}`);
    break;
    case '3':
        let NewContact = {
            name: window.prompt("Digite su Nombre: "),
            phone: window.prompt("Digite su Numero de Telefono: "),
            email: window.prompt("Digite su Correo Electronico: ")
        }
        if (NewContact.name == "" || NewContact.phone == "" || NewContact.email == "") {
            alert("No se agrego por un dato vacio")
        } else {
            alert("Se agrego con exito!");
            contacts.push(NewContact);
        }
    break;
    default:
        alert("No existe esa opcion")
}
