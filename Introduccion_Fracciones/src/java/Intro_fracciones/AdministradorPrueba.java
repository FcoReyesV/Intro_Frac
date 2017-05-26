package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class AdministradorPrueba extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession();
        String userName=(String)session.getAttribute("userName");//Obtenemos nombre del administrador
        String userPassword=(String)session.getAttribute("userPassword");//Obtenemos password del administrador
	
        response.setHeader("Cache-Control", "no-cache");
        //Fuerza a la caché para obtener una nueva copia de la página desde el servidor de origen
        response.setHeader("Cache-Control", "no-store");
        //Dirige a la caché a no almacenar la página bajo ninguna circunstancia
        response.setDateHeader("Expires", 0);
        //Provoca que la caché de proxy vea la página como "obsoleta"
        response.setHeader("Pragma", "no-cache");
        if(userName==null && userPassword==null) //Verifica si está logeado algun usuario
            response.sendRedirect("Inicio");
        
        
        PrintWriter out=response.getWriter();
        //Creamos un objeto de tipo LectorXML para manipular el archivo 'Usuarios.xml'
        LectorXML total_usuarios=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        
        //Obtenemmos el total de los usuarios que estan registrados hasta el momento
        int numero_usuarios=total_usuarios.getTotalUsuarios();
        
        String tipo[]=total_usuarios.datosUsuario("tipo");
        String nombre[]=total_usuarios.datosUsuario("nombre");
        String pass[]=total_usuarios.datosUsuario("pass");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<meta charset=\"UTF-8\">\n" +
"		<title>Administrador - Introducción a las fracciones</title>\n" +
"		<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n" +
"		<link rel=\"stylesheet\" href=\"css/admin.css\">\n" +
"		<link rel=\"stylesheet\" href=\"css/index.css\">");            
            out.println("</head>");
            out.println("<body id='body-admin'>");
            out.println("<div class=\"container\">"); //div container
            out.println("<div class=\"row\">" +
"			<div id=\"logo-gris\" class=\"col-md-1\"></div>" +
"			<div class=\"col-md-2\">" +
"				<h3 class=\"nombre\">Admnistrador:"+userName+"</h3>" +
"			</div>" +
"			<div class=\"col-md-1 col-md-offset-8\">" +
"				<div class=\"btn-cerrars\">" +
"					<form id=\"cerrar-s\" action=\"CerrarSesion\">" +
"						<input class=\"btn btn-primary\" type=\"submit\" value=\"Cerrar Sesión\"/>" +
"					</form>" +
"				</div>" +
"			</div>" +
"		</div>");
            out.println("<div id='table' class='table-editable'>");
            out.println("<table class='table table-hover'>");
                out.println(" <tr>" +
"		      	<thead>" +
"		      		<th>Nombre</th>" +
"			        <th>Tipo</th>" +
"			        <th></th>" +
"			        <th>\n" +
                        "<button title=\"Agregar nuevo usuario\" class=\"btn-add\" type=\"button\" id=\"agregar_usuario\"> <span class=\"table-add glyphicon glyphicon-plus\"></span>"+
"			        </th>" +
"		      	</thead>" +
"		      </tr>");
            if(userName.equals("admin")){//Validamos que no pueda Modificar o Eliminar a otros administradores, en caso de no ser el 'admin'
                for(int i=0;i<numero_usuarios;i++){
                    if(!(nombre[i].equals(userName))||!(pass[i].equals(userPassword))){//Validamos que el administrador no se muestre a si mismo
                        out.println("<tr>");
                        out.println("<td>"+nombre[i]+"</td>");
                        out.println("<td>"+tipo[i]+"</td>");
                        out.println("<td>");
                        out.println("<button class=\"actualizar_datos update\" title=\"Actualizar datos\" type=\"submit\">\n" +
"							<span class=\"table-up glyphicon glyphicon-arrow-up\"></span>\n" +
"		          	<span class=\"table-down glyphicon glyphicon-arrow-down\"></span></button> ");
                        out.println("</td>");
                        out.println("<td>");
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a eliminar
                        al servlet 'EliminarUsuario'*/
                            out.println("<form action='EliminarUsuario' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            
                            out.println("<button title=\"Eliminar Usuario\" class=\"update\" type=\"submit\">" +
"							 <span title=\"Eliminar usuario\" class=\"table-remove glyphicon glyphicon-remove\"></span>" +
"							 </button> ");
                            out.println("</form>");
                        out.println("</td>");
                        out.println("</tr>");
                    }
                }                
            }else{
                for(int i=0;i<numero_usuarios;i++){
                    if(!(tipo[i].equals("Administrador"))&&(!(nombre[i].equals(userName))||!(pass[i].equals(userPassword)))){
                    //Validamos que el administrador no vea otros administradores ni a si mismo
                        out.println("<tr>");
                        out.println("<td>"+nombre[i]+"</td>");
                        out.println("<td>"+tipo[i]+"</td>");
                        out.println("<td>");
                        out.println("<td>");
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a eliminar
                        al servlet 'EliminarUsuario'*/
                            out.println("<form action='EliminarUsuario' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            out.println("<button title=\"Eliminar Usuario\" class=\"update\" type=\"submit\">" +
"							 <span title=\"Eliminar usuario\" class=\"table-remove glyphicon glyphicon-remove\"></span>" +
"							 </button> ");
                        out.println("</form>");
                        out.println("</td>");
                        out.println("<td>");
                         out.println("<button class=\"actualizar_datos update\" title=\"Actualizar datos\" type=\"submit\">\n" +
"							<span class=\"table-up glyphicon glyphicon-arrow-up\"></span>\n" +
"		          	<span class=\"table-down glyphicon glyphicon-arrow-down\"></span></button> ");
                        out.println("</td>");
                        out.println("</tr>");
                        
                    }
                }
            }
            out.println("</table>");
            out.println("</div>"); //div .table-editable
            
            out.println("<div class=\"agregar-usuario\">\n" +
"				<div class=\"form\">\n" +
"					<div class=\"cerrar-addUser\">\n" +
"					    <span id=\"close_add_users\" title=\"Cerrar formulario\" class=\"close-agregar-usuario glyphicon glyphicon-remove\"></span>\n" +
"					</div>\n" +
"				    <form id=\"validationForm\" class=\"add-form login-form\" method=\"post\" action='GuardarUsuario'>\n" +
"				    	\n" +
"				    		<input type=\"text\" placeholder=\"Nombre de usuario\" name=\"nombre\"/>\n" +
"				    \n" +
"				    	\n" +
"				     	<select name='tipo' class=\"select-tipo form-control\" title=\"Tipo de usuario\">\n" +
"		              		<option value='Administrador'>Administrador</option>\n" +
"		               		<option value='Profesor'>Profesor</option>\n" +
"		               		<option value='Alumno'>Alumno</option>\n" +
"                		</select>\n" +
"						\n" +
"							<input  id=\"pass\" type=\"password\" placeholder=\"Contraseña\" name=\"pass\" />\n" +
"						\n" +
"				    	\n" +
"				    		<input  type=\"password\" placeholder=\"Confirmar contraseña\" name=\"pass2\"/>\n" +
"				    	\n" +
"				     	\n" +
"				    	<button id=\"btn_add_user\" class=\"btn btn-success\">Agregar usuario</button>\n" +
"			    	</form>\n" +
"			  	</div>\n" +
"			</div>"); //div agregar usuario
            out.println("<div class=\"modificar-usuario\">\n" +
"				<div class=\"form\">\n" +
"					<div class=\"cerrar-addUser\">\n" +
"					    <span id=\"close_update_users\" title=\"Cerrar formulario\" class=\"close-agregar-usuario glyphicon glyphicon-remove\"></span>\n" +
"					</div>\n" +
"				    <form class=\"login-form validationFormUpdt\" method=\"post\" action=\"GuardarCambios\">	\n" +
"				    	<input type='hidden' value='\"1\"' name='nodo'/>\n" +
"				    	<input id=\"nombre_usuario\" oninvalid=\"setCustomValidity('Escribe un usuario')\"  oninput=\"setCustomValidity('')\"\n" +
"				    	type=\"text\" placeholder=\"Nombre de usuario\" name=\"nombre\" required/>\n" +
"				     	<select id=\"tipo_usuario\" name='tipo' class=\"select-tipo form-control\" title=\"Tipo de usuario\">\n" +
"		              		<option value='Administrador'>Administrador</option>\n" +
"		               		<option value='Profesor'>Profesor</option>\n" +
"		               		<option value='Alumno'>Alumno</option>\n" +
"                		</select>\n" +
"				    	<input class=\"pass_input passm1\" oninvalid=\"setCustomValidity('Escribe una contraseña')\"  oninput=\"setCustomValidity('')\"\n" +
"				    	type=\"password\" placeholder=\"Contraseña\" name=\"pass\" required/>\n" +
"				     	<input class=\"pass_input passm2\" oninvalid=\"setCustomValidity('Escribe una contraseña')\"  oninput=\"setCustomValidity('')\"\n" +
"				    	type=\"password\" placeholder=\"Confirmar contraseña\" name=\"pass\" required/>\n" +
"				    	<div class=\"error\">La contraseñas no coinciden</div>\n" +
"				    	<button id=\"btn_updt_user\">Guardar cambios</button>\n" +
"			    	</form>\n" +
"			  	</div>\n" +
"			</div>"); //modificar un usuario
            out.println("</div>"); //div containter
            out.println("<script type=\"text/javascript\" src=\"js/jquery-3.2.1.min.js\"></script>\n" +
"		<script type=\"text/javascript\" src=\"js/jquery.validate.min.js\"></script>\n" +
"		<script type=\"text/javascript\" src=\"js/script.js\"></script>");
            out.println("</body>");
            out.println("</html>");
    }
}
