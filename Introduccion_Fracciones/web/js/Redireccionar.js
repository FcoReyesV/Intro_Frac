function ir(destino){  
        window.location.href = destino; 
    } 
    function getAbsolutePath() {
        var loc = window.location;
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
    }
    function redireccionar(){
        ir(getAbsolutePath()+"CrearUsuario");
    }
    var boton=document.getElementById("btn");
    boton.addEventListener("click",redireccionar);
    

