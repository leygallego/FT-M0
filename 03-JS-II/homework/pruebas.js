function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
  if(status === 1){
      console.log("Online");
      return "Online"};
  if(status === 2){
    console.log("Away");  
    return "Away"} else {
        console.log("Offline");
        return "Offline"};
  
  }

  conection(3);