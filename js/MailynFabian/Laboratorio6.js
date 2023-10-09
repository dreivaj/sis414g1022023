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

let showContact = function(contacts, index) {
    if (contacts instanceof Array && index >= 0 && index < contacts.length) {
      let contact = contacts[index];
      console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
    } else {
      console.log("Indice o contactos no validos");
    }
  };
  
  let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
      for (let contact of contacts) {
        console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
      }
    }
};

let addNewContact = function(contacts, name, phone, email) {
  if (contacts instanceof Array && name && phone && email) {
    contacts.push({
      name: name,
      phone: phone,
      email: email
    });
    console.log("Nuevo contacto agregado correctamente");
  } else {
    console.log("Contacto o datos de contacto invalidos");
  }
};



showContact(contacts, 0); 
showAllContacts(contacts); 

addNewContact(contacts, "John Doe", "123-456-7890", "john.doe@example.com"); 

showAllContacts(contacts);
