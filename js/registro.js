var Usuarios=[];
/*----------------Base de datos------------------------------------*/
  // Import the functions you need from the SDKs you need
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db =firebase.firestore();

var nombre= document.getElementById("Nombre");
var correo= document.getElementById("Correo");
var contraseña= document.getElementById("Contraseña");
var Repetir = document.getElementById("Repetir");
var Registrar= document.getElementById("Registrar");
function GuardarUsuario(Usuario){
    db.collection("Usuarios").add({
        Usuario
    });}
/*-----------------------------------*/
db.collection("Usuarios").get().then(function(BaseUsuarios){
     
    BaseUsuarios.forEach(function(doc){
      Usuarios.push({
          Descripcion: doc.data().Usuario,
          ID: doc.id
      });  
    });
});

Registrar.onclick=function(){
    var Aceptar=0; 
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(nombre.value==""||correo.value==""||contraseña.value==""||Repetir.value==""){
        alert("No se puede registrar espacios vacios");
        Aceptar=1;
    }else{
        if(contraseña.value.length<8 ){
            alert("Contraseña muy corta");
            Aceptar=1;
            }
            if(contraseña.value!=Repetir.value){
                alert("Contraseña diferente a su comprobacion");
                Aceptar=1;
            }
            if(!emailRegex.test(correo.value)){
                alert("Correo no valido");
                Aceptar=1;
            }
    }
    if(Aceptar==0 && Existe(correo.value)==0 ){
        console.log(Usuarios);
        let Nombre= nombre.value;
        let Correo= correo.value;
        let Contraseña= contraseña.value;
        let Rol="Estudiante";
        const Usuario={Nombre, Correo,Contraseña,Rol};
        GuardarUsuario(Usuario);
        localStorage.setItem("Sesion","Activo");
        localStorage.setItem("Nombre",Nombre)
        //location.href="../public/index.html";
        setTimeout(()=>{location.href="../public/index.html";},2000); 
    }else{
        alert("Ese usuario ya existe");
    }
    

 }
 function Existe(a){
     var encontrado=0;
     for(var i=0;i<Usuarios.length;i++){
        if(a==Usuarios[i].Descripcion.Correo){
            encontrado=1;
        }
     }
     return encontrado;
 }

    
    
