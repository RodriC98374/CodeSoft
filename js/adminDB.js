//Este arreglo es para ver si el usuario ya existe
var Usuarios=[];
// @jhon coneccion con la base de datods
const firebaseConfig = {
  apiKey: "AIzaSyD6bMG3VhwxFVxz50AG1FugRJ4QfW2qU5c",
  authDomain: "codesoft-15fe4.firebaseapp.com",
  databaseURL: "https://codesoft-15fe4-default-rtdb.firebaseio.com",
  projectId: "codesoft-15fe4",
  storageBucket: "codesoft-15fe4.appspot.com",
  messagingSenderId: "806557774561",
  appId: "1:806557774561:web:2cdde2a5dee91f6d5bbda0",
  measurementId: "G-4193E2WJWZ"
  };
    
  firebase.initializeApp(firebaseConfig);

  let db = firebase.firestore();
//Cambie el user por Usuario
  const SaveAdmin = (Usuario) =>{
//La base se llama usuarios por que es generica
  db.collection("Usuarios").add({
      Usuario
    })
  .then((docRef) => {
    MJSOK();
    })
  .catch((error) => {
    MJSERROR();
    });
  }
  db.collection("Usuarios").get().then(function(BaseUsuarios){
     
    BaseUsuarios.forEach(function(doc){
      Usuarios.push({
          Descripcion: doc.data().Usuario,
          ID: doc.id
      });  
    });
});


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

let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/


  $("#btnsave").on('click',()=>{
    let Nombre = $("#nombre").val();
    let Correo = $("#correo").val();
    let Contraseña = $("#contraseña").val();
    //Antes habia la variable de la repeticion de la contraseña 
    //En ves de eso le puse una variable rol para que sepa que es administrador
    let Rol ="Administrador"
    let res = false
    let entrar = false

    const Usuario = {
      Nombre,
      Correo,
      Contraseña,
      Rol
    }

    const name=document.getElementById("nombre")
    const email=document.getElementById("correo")
    const pasword=document.getElementById("contraseña")
    const pasword2=document.getElementById("repcontraseña")
    const parrafo = document.getElementById("warnings")
    let warnings = "";


    if(name.value.length<1 || email.value.length<1 || pasword.value.length<1 || pasword2.value.length<1){
      parrafo.innerHTML = "Ingrese todos los espacios vacios <br>"
      window.alert("Ingrese todos los espacios vacios");
      entrar=true;
      res=true;
    }
    if(name.value.length>40 && entrar==false){
      parrafo.innerHTML = "El nombre no es valido <br>"
      window.alert("El nombre no es valido");
      res=true;
  
    }
    if(name.value.length <6 && entrar==false){
        parrafo.innerHTML = "El nombre no es valido <br>"
        window.alert("El nombre no es valido");
        res=true;
    }
    
    if(!regexEmail.test(email.value) && entrar==false){
        parrafo.innerHTML = "El email no es valido <br>"
        window.alert("El email no es valido");
        res=true;
    }
    
    if(pasword.value.length < 8  && entrar==false){
        parrafo.innerHTML = "La contraseña no es valida <br>"
        window.alert("La contraseña no es valida");
        res=true;
    }
    if(pasword.value.length>20 && entrar==false){
      parrafo.innerHTML = "La contraseña no es valida <br>"
      window.alert("La contraseña no es valida");
      res=true;
  }
  
    if(pasword2.value.length < 8 && pasword2.value.length<20 && entrar==false){
        parrafo.innerHTML = "La contraseña no es valida <br>"
        window.alert("La confirmación de la contraseña no es valida");
        res=true;
    }
    if(pasword2.value.length>20 && entrar==false){
      parrafo.innerHTML = "La contraseña no es valida <br>"
      window.alert("La confirmación de la contraseña no es valida");
      res=true;
  }
  
    if(pasword2.value != pasword.value && entrar==false){
        parrafo.innerHTML = "Las contraseñas no son iguales <br>"
        window.alert("Las contraseñas no son iguales");
        res=true;
    }
  
    if(res==false) {
    //Aqui comprueba si existe un usuario con ese correo
    if(Existe(email.value)==0){
      parrafo.innerHTML = "Registrado Correctamente"
      window.alert("Registrado Correctamente");
      res=true;
      SaveAdmin(Usuario);
      }else{
        alert("Ya existe ese usuario");
      }
    }
 /* else {
    //Aqui comprueba si existe un usuario con ese correo
      if(Existe(email.value)==0){
      parrafo.innerHTML = "Registrado Correctamente"
      window.alert("Registrado Correctamente");
      res=true;
      SaveAdmin(Usuario);
      }else{
        alert("Ya existe ese usuario");
      }
  }*/
  
  })
  //Esta funcion es la que recorre la lista de usuarios para saber si ya existe
  function Existe(a){
    var encontrado=0;
    for(var i=0;i<Usuarios.length;i++){
       if(a==Usuarios[i].Descripcion.Correo){
           encontrado=1;
       }
    }
    return encontrado;
}