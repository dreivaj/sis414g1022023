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
    
    let opcion = "";
    while (opcion !== "salir") {
      opcion = prompt("que quieres hacer? (primero, ultimo, todo, new, salir)");
      
      switch (opcion) {
        case "primero":
          console.log(contacts[0]);
          break;
        case "ultimo":
          console.log(contacts[contacts.length - 1]);
          break;
        case "todo":
          for (let i = 0; i < contacts.length; i++) {
                    console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
                }
                win=true;
          break;
        case "nuevo":
          let newContact= {
            name: prompt("Inserte nombre:"),
            phone: prompt("Inserte numero:"),
            email: prompt("Inserte email:")
          };
          contacts.push(newContact);
          console.log("Nuevo contacto aniadido");
          break;
        case "salir":
          console.log("Saliendo del programa");
          break;
        default:
          console.log("Invalido. Intente de vuevo");
          break;
      }
    }