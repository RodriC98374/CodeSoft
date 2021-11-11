var logo=document.getElementsByClassName("logonivel");
logo[0].onclick=function(){
    if(localStorage.getItem("Rol")=="Administrador"){
        location.href="../public/indexAdmonistrador.html";
    }else{
        location.href="../public/index.html";
    }
}
var icono=document.getElementsByClassName("BtnHome");
icono[0].onclick=function(){
    if(localStorage.getItem("Rol")=="Administrador"){
        location.href="../public/indexAdmonistrador.html";
    }else{
        location.href="../public/index.html";
    }
}