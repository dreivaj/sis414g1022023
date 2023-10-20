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


    let names = window.prompt("Cual es tu nombre?");
    names = names ? names : "Deleting Data";
    let phone = prompt("Cual es tu numero telefonico?");
    phone = phone ? phone : "Deleting Data";
    let email = prompt("Cual es tu correo?");
    let newContacts = {name:names, phone:phone, email:email}
    let decision = window.confirm("Esta bien?");
    contacts.push(newContacts);
    console.log(decision);
    let remove = confirm("Remover el registro?");
    let message = remove ? "Deleting Data" : "Cancelled"
    contacts.pop(newContacts);
    

    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);