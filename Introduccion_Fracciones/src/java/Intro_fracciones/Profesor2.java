package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Profesor2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {   
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession();
        String userName=(String)session.getAttribute("userName");

        
        response.setHeader("Cache-Control", "no-cache");
        //Fuerza a la caché para obtener una nueva copia de la página desde el servidor de origen
        response.setHeader("Cache-Control", "no-store");
        //Dirige a la caché a no almacenar la página bajo ninguna circunstancia
        response.setDateHeader("Expires", 0);
        //Provoca que la caché de proxy vea la página como "obsoleta"
        response.setHeader("Pragma", "no-cache");
        if(userName==null) //Verifica si está logeado algun usuario
            response.sendRedirect("Inicio");
	PrintWriter out=response.getWriter();
            out.println("<!DOCTYPE html>\n" +
"<html>\n" +
"<head>\n" +
"	<meta charset=\"UTF-8\">\n" +
"	<title>Introducción - Introducción a las fracciones</title>\n" +
"	<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n" +
"	<link rel=\"stylesheet\" href=\"css/index.css\">\n" +
"	<link rel=\"stylesheet\" href=\"css/dragndrop.css\">\n" +
"</head>\n" +
"<body name=\"RV\">\n" +
"		<header>\n" +
"			<div id=\"logo\"></div>\n" +
"			<nav class=\"navegacion\">\n" +
"				<ul>\n" +
"					<li><a href='Profesor'>Introducción</a></li>\n" +
"					<li><a href='Crear_una_fraccion'>Crear una Fracción</a></li>\n" +
"					<li>\n" +
"						<form id=\"cerrar-s\" action=\"CerrarSesion\">\n" +
"							<input id=\"Cerrar-sesion\" type=\"submit\" value=\"Cerrar Sesión\"/>\n" +
"						</form>	 \n" +
"					</li>\n" +
"				</ul>\n" +
"			</nav>\n" +
"		</header>\n" +
"	<div class=\"container-fluid\">\n" +
"		\n" +
"		<div class=\"row\">\n" +
"			<aside class=\"barra-lateral col-md-2\">\n" +
"				\n" +
"					<div class=\"usuario-bloque\">\n" +
"					<p>"+userName+"</p>\n" +
"					<select name='#' class=\"select-tipo form-control select-guardar\" title=\"Guardados\">\n" +
"		              	<option value=''></option>\n" +
"                	</select>\n" +
"				</div>	\n" +
                    "<div id='cargar'>"+
                    "<button>Cargar</button>"+
                    "</div>"+
                    "<div id='nuevo'>"+
                    "<button>Nuevo</button>"+
                    "</div>"+
                    "<div id='eliminar'>"+
                    "<button>Eliminar</button>"+
                    "</div>"+
        
"				<div class=\"opciones-intro\">\n" +
"					<a href='Profesor'><div id=\"opc1\" class=\"opc col-md-1\">\n" +
"						<div style=\"width: 90px; height: 40px; margin-top: 15px; border: 1px solid black; background-color: rgb(60,134,174);\"></div>\n" +
"					</div></a>\n" +
"					<a href='Profesor2'><div id=\"opc2\" class=\"opc col-md-1\">\n" +
"						<div style=\"height: 60px; width: 40px; border: 1px solid black; margin-left: 25px; margin-top: 5px; background-color: rgb(255,41,43);\"></div>\n" +
"\n" +
"					</div></a>\n" +
					
"				</div>\n" +
"				\n" +
"				\n" +
"			\n" +
"			</aside>\n" +
"\n" +
"			<div class=\"bloque-central col-md-6\">\n" +
"				<div class=\"contenedor-principal\"></div>\n" +
"				\n" +
"				<div class=\"manejables\">\n" +
"					<div class=\"flechas-add-contenedor\">\n" +
"						<button id=\"flecha-agregar-contenedor\" class=\"add-flecha-btn\"><span class=\"glyphicon glyphicon-chevron-up\"></button>\n" +
"						<button id=\"flecha-quitar-contenedor\" class=\"add-flecha-btn-desact\" disabled=\"true\">\n" +
"							<span class=\"glyphicon glyphicon-chevron-down\"></span>	\n" +
"						</button>\n" +
"					</div>\n" +
"					<div class=\"add-contenedor-figura\">\n" +
"						<p>Máximo</p>\n" +
"						<div id=\"num-max\">1</div>\n" +
"					</div>\n" +
"					<div class=\"flechas-fracc\">\n" +
"						<button id=\"numerador-agregar-btn\" class=\"add-flecha-btn\"><span class=\"glyphicon glyphicon-chevron-up\"></button>\n" +
"						<button id=\"numerador-quitar-btn\" class=\"add-flecha-btn-desact\" disabled=\"true\">\n" +
"							<span class=\"glyphicon glyphicon-chevron-down\"></span>	\n" +
"						</button>\n" +
"						<button id=\"denominador-agregar-btn\" class=\"add-flecha-btn\"><span class=\"glyphicon glyphicon-chevron-up\"></button>\n" +
"						<button id=\"denominador-quitar-btn\" class=\"add-flecha-btn-desact\" disabled=\"true\">\n" +
"							<span class=\"glyphicon glyphicon-chevron-down\"></span>	\n" +
"						</button>\n" +
"					</div>\n" +
"					<div class=\"contadores\">\n" +
"						<div id=\"numerador-texto\" class=\"num-contador\">0</div>\n" +
"						<div id=\"denominador-texto\" class=\"num-contador\">1</div>\n" +
"					</div>\n" +
"					<div id=\"contenedor-objetos-draggables\"></div>\n" +
"				</div>\n" +
"				\n" +
"					\n" +
"				\n" +
"				<div class=\"guardar-btn\">\n" +
"					<button>Guardar</button>\n" +
"				</div>\n" +
"			</div>\n" +
"			\n" +
"		</div>\n" +
"\n" +
"	</div>\n" +
"		\n" +
"\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-3.2.1.min.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-ui.min.js\"></script>\n" +
"	\n" +
"	<script type=\"text/javascript\" src=\"js/dndRV.js\"></script>\n" +
"</body>\n" +
"</html>");
    }
}

