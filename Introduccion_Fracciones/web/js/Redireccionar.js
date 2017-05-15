var boton;
function ir(destino){ 
        window.location.href = destino;//Funcion que permite redireccionar a otro Servlet
    }
function getAbsolutePath() {
        var loc = window.location;//Obtenemos la url actual del archivo 'http://localhost:8080/Introduccion_Fracciones/Modificar'
        var pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);//La direccion anterior la recortamos hasta 'http://localhost:8080/Introduccion_Fracciones/'
        return loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
        /*A la direccion original le quitamos, en caso de que los tenga, aquellos parametros que sobren en su direccion url, 
         * finalmente la retornamos http://localhost:8080/Introduccion_Fracciones/ la absolutePath*/
        
    }
function redireccionar(){
    ir(getAbsolutePath()+"CrearUsuario");
}
boton=document.getElementById("btn");//Asignamos el elemento button a la variable
boton.addEventListener("click",redireccionar);//Asociamos un evento a la variable anterior