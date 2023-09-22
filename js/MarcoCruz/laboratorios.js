//PRÁCTICA DE LABORATORIO 2.0.15.- Variables

let nombre1 = "Maxwell Wright";
let telefono1 = "(0191) 719 6495";
let email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

let nombre2 = "Rajá Villarreal";
let telefono2 = "0866 398 2895";
let email2 = "posuere.vulputate@sed.com";

let nombre3 = "Helen Richards";
let telefono3 = "0800 1111";
let email3 = "libero@convallis.edu";

console.log("---2.015.- Laboratorio: Variables")
console.log("Primer contacto: " + nombre1 + " / " + telefono1 + " / " + email1);
console.log("Ultimo contacto: " + nombre2 + " / " + telefono2 + " / " + email2);

//PRÁCTICA DE LABORATORIO 2.2.5.- Tipos de datos

let contacts = [{
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
    }, {
    nombre: "Maisie Haley",
    telefono: "0913 531 3030",
    email: "risus.Quisque@urna.ca"
}];
console.log("---2.2.5.- Laboratorio: Tipos de Datos")
console.log("Primer Contacto: " + contacts[0].name + " / " + 
                                  contacts[0].phone + " / " + 
                                  contacts[0].email); 
console.log("Ultimo Contacto: " + contacts[contacts.length - 1].name + " / " +
                                  contacts[contacts.length - 1].phone + " / " + 
                                  contacts[contacts.length - 1].email);