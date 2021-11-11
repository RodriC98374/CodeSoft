var NombreU=document.getElementById("NombreUsuario");
NombreU.innerHTML=localStorage.getItem("Nombre");
var CerrarSesion=document.getElementById("CerrarSesion");
CerrarSesion.onclick=function(){
    localStorage. clear();
    setTimeout(()=>{location.href="../public/index.html";},2000); 
}
var Logo=document.getElementsByClassName("logo");
Logo[0].onclick=function(){
    
    location.href="../public/indexAdmonistrador.html";
}

