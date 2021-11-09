// @jhon coneccion con la base de datods
const firebaseConfig = {
    apiKey: "AIzaSyDdZWAnrL7QIeDBdqNUbJ44nw-XzGcsnZQ",
    authDomain: "ing-software-f4bd1.firebaseapp.com",
    projectId: "ing-software-f4bd1",
    storageBucket: "ing-software-f4bd1.appspot.com",
    messagingSenderId: "767531691582",
    appId: "1:767531691582:web:7ecd59c340b451ca56ab6f"
  };
    
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();

  // @jhon funcion para guardar admins

  const SaveAdmin = (user) =>{

  db.collection("Admins").add({
      user
    })
  .then((docRef) => {
    MJSOK();
    })
  .catch((error) => {
    MJSERROR();
    });
  }


  const MJSOK =()=>{
    Swal.fire(
      'Buen trabajo!',
      'Datos guardados correctamente!',
      'success'
    )
  }

  const MSJERROR =()=>{
    Swal.fire(
      'ops!',
      'Los Datos no fueron guardados!',
      'error'
    )
  }
// @jhon captura de valores utilizando jquery
//es una parrafo que se muestra

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

// @jhon captura de valores utilizando jquery

  $("#btnsave").on('click',()=>{
    let nombre = $("#nombre").val();
    let correo = $("#correo").val();
    let contraseña = $("#contraseña").val();
    let repcontraseña =$("#repcontraseña").val();
    let res = false
    let entrar = false

    const user = {
      nombre,
      correo,
      contraseña,
      repcontraseña
    }

    const name=document.getElementById("nombre")
    const email=document.getElementById("correo")
    const pasword=document.getElementById("contraseña")
    const pasword2=document.getElementById("repcontraseña")
    const parrafo = document.getElementById("warnings")
    let warnings = ""

   // SaveAdmin(user);

  if(name.value.length <6){
      parrafo.innerHTML = "El nombre no es valido <br>"
      window.alert("El nombre no es valido");
      entrar = true
  }
  
  //compara el correo
  if(!regexEmail.test(email.value)){
      parrafo.innerHTML = "El email no es valido <br>"
      window.alert("El email no es valido");
      entrar = true
  }
  
  //compara la contraseña el tamaño
  if(pasword.value.length < 8){
      parrafo.innerHTML = "La contraseña no es valida <br>"
      window.alert("La contraseña no es valida");
      entrar = true
  }
  
  //compara la contraseña
  if(pasword2.value.length < 8){
      parrafo.innerHTML = "La contraseña no es valida <br>"
      window.alert("La confirmación de la contraseña no es valida");
      entrar = true
  }
  //compara la contraseña
  if(pasword2.value != pasword.value){
      parrafo.innerHTML = "Las contraseñas no son iguales <br>"
      window.alert("Las contraseñas no son iguales");
      entrar = true
  }
 
  //manda todos los errores
  if(entrar == true){
      parrafo.innerHTML = "Ingrese todos los espacios vacios <br>"
      window.alert("Ingrese todos los espacios vacios");
  }else {
      parrafo.innerHTML = "Registrado Correctamente"
      window.alert("Registrado Correctamente");
      res=true;
      SaveAdmin(user);
  }
  //aqui es donde manda a otra funcion
  })