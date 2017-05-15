   var guardar,enviar,nombre,tipo,pass,confirmar_pass,cambio_input=false;
    function incializaVariables(){
        /*A cada variable se le asocia un elemento del formulario*/
        enviar=document.getElementById("enviar");
        guardar=document.getElementById("guardar");
        nombre=document.getElementById("nombre");
        tipo=document.getElementById("tipo");
        pass=document.getElementById("pass");
        confirmar_pass=document.getElementById("confirmar_pass");
    }
    function validaNombre(){
        /*Validamos que el nombre no este vacio*/
        if(nombre.value.length > 0)
            return true;
        else
            return false;
    }
    function validaTipo(){
        /*Validamos que el tipo no este vacio y a su vez corresponda a un de los tipos que ya se encuentren*/
        if(tipo.value.length > 0){
            switch (tipo.value){
                case "Administrador":
                    return true;
                case "Profesor":
                    return true;
                case "Alumno":
                    return true;
                default:
                    return false;
            }
        }else{
            return false;
        }
    }
    function validaPass(){
        /*Validamos que el password no este vacio y a su vez coincida  con confirmar_pass*/
        if(pass.value.length > 0){
            if(pass.value==confirmar_pass.value){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    
    function validacionGeneral(){
        /*Validamos que el formulario en general este correcto, de no ser asi mandamos un alert*/
        if(validaNombre()){
            if(validaTipo()){
                if(validaPass()){
                    return true;
                }else{
                   alert("Campo 'Password' vacio o no coinciden");
                   return false;
                }
            }else{
               alert("Campo 'Tipo' incorrecto o vacio");
               return false;
            }
        }else{
            alert("Campo 'Nombre' vacio");
            return false;
        }
    }
    
    function guardarDatos(e){
        var confirmacion=confirm("Deseas guardar los datos");//Preguntamos si desea guardar los cambios hechos
        if(confirmacion){
            var validacion=validacionGeneral();//En caso de aceptar, validamos que los campos de texto sean correctos
            if(validacion){
                cambio_input=false;//Bandera que nos indica que se genero un cambio en alguna cajita
                guardar.removeEventListener("click",guardarDatos);//Quitamos el evento del boton 'Guardar Cambios'
                alert("Datos guardados");//Le hacemos pensar al usuario que los datos fueron guardados
            }else{
                e.preventDefault();//Hacemos que el boton no haga nada
            }
        }else{
            e.preventDefault();//Hacemos que el boton no haga nada
        }
    }
    function cambio(){
        cambio_input=true;//Nos indica si en alguna cajita hubo un cambio
    }
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
    function enviarDatos(e){
        if(cambio_input){
            var salir=confirm("¿Salir sin guardar datos?");
            //Preguntarmos si desea salir, en dado caso de que intente salir sin antes haber guardado los cambios
            if(salir){
                //Si dice que si, redireccionamos al Servlet 'Administrador' nuevamente
                    e.preventDefault();//Evitamos que se envien los datos al Servlet 'GuardarCambios'
                    ir(getAbsolutePath()+"Administrador");//Se redirecciona al Servlet 'Administrador'
            }else{
                e.preventDefault();//Evitamos que se envien los datos al Servlet 'GuardarCambios'
            }
        }else{
            //En caso de que previamente haya sido pulsado el boton 'Guardar Cambios'
            //Enviamos los parametros al Servlet 'Guardar Cambios' quitandole el evento al boton
            enviar.removeEventListener("click",enviarDatos); 
        }
    }
    incializaVariables();//Se inicializan las variables
    guardar.addEventListener("click",guardarDatos);//Se asocia un evento al boton 'Guardar Cambios'
    enviar.addEventListener("click",enviarDatos);//Se asocia un evento al boton 'Regresar'



