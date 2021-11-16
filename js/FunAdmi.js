if(localStorage.getItem("Rol")!="Administrador"){
    location.href="../index.html";
}
var NombreU=document.getElementById("NombreUsuario");
var nom=localStorage.getItem("Nombre");
    nom=nom.split(" ");
    NombreU.innerHTML=nom[0];
var CerrarSesion=document.getElementById("CerrarSesion");
CerrarSesion.onclick=function(){
    localStorage. clear();
    setTimeout(()=>{location.href="../index.html";},2000); 
}
var Logo=document.getElementsByClassName("logo");
Logo[0].onclick=function(){
    
    location.href="../public/IndexAdmonistrador.html";
}

