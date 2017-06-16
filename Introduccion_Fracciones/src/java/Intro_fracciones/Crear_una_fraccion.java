package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Crear_una_fraccion extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        HttpSession session=request.getSession();
         response.setHeader("Cache-Control", "no-cache");
        //Fuerza a la caché para obtener una nueva copia de la página desde el servidor de origen
        response.setHeader("Cache-Control", "no-store");
        //Dirige a la caché a no almacenar la página bajo ninguna circunstancia
        response.setDateHeader("Expires", 0);
        //Provoca que la caché de proxy vea la página como "obsoleta"
        response.setHeader("Pragma", "no-cache");
        String userName=(String)session.getAttribute("userName");
        out.println("<!DOCTYPE html>\n" +
"<html lang=\"en\">\n" +
"<head>\n" +
"	<meta charset=\"UTF-8\">\n" +
"	<title>Crear una Fracción- Introducción a las fracciones</title>\n" +
"	<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">\n" +
"	<link rel=\"stylesheet\" href=\"css/index.css\">\n" +
"	<link rel=\"stylesheet\" href=\"css/CrearunaFraccion.css\">\n" +
"\n" +
"\n" +
"<body>\n" +
                "<div id='userName' style='display:none;'>"+userName+"</div>"+
"	<header> \n" +
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
"	</header>\n" +
"	\n" +
"	\n" +
"	\n" +
"	<div class=\"bloque-central\">\n" +
"		<p class=\"encabezado-titulo\">Crear una Fracción</p>\n" +
"		<button id=\"regresarMenu\" class=\"boton-regresar\" title=\"Regresar a los niveles\"><span class=\"glyphicon glyphicon-arrow-left\"></span></button>\n" +
"		<div id=\"contenedor-niveles\">\n" +
"\n" +
"			<div id=\"nivel1a\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 1</p>\n" +
"				<div class=\"imagen-nivel\" style=\"background-image: url(images/lvl1a.png);\"></div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"				\n" +
"\n" +
"			</div>\n" +
"					\n" +
"			<div id=\"nivel2a\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 2</p>\n" +
"				<div class=\"imagen-nivel\" style=\"background-image: url(images/lvl2a.png);\"></div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"					\n" +
"			<div id=\"nivel3a\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 3</p>\n" +
"				<div class=\"imagen-nivel\" style=\"background-image: url(images/lvl3a.png);\"></div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel4a\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 4</p>\n" +
"				<div class=\"imagen-nivel\" style=\"background-image: url(images/lvl4a.png);\"></div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel5a\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 5</p>\n" +
"				<div class=\"imagen-nivel\" style=\"background-image: url(images/lvl5a.png);\"></div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel1b\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 1</p>\n" +
"				<div class=\"imagen-nivel\">\n" +
"					<div class=\"figuras-numeros\" style=\"top:15px;left: 20px;\">1</div>\n" +
"				</div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel2b\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 2</p>\n" +
"				<div class=\"imagen-nivel\">\n" +
"					<div class=\"figuras-numeros\" style=\"top:10px;left: 20px;\">2</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:15px;left: 15px;\">2</div>\n" +
"				</div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel3b\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 3</p>\n" +
"				<div class=\"imagen-nivel\">\n" +
"					<div class=\"figuras-numeros\" style=\"top:10px;left: 20px;\">3</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:15px;left: 15px;\">3</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:20px;left: 10px;\">3</div>\n" +
"				</div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel4b\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 4</p>\n" +
"				<div class=\"imagen-nivel\">\n" +
"					<div class=\"figuras-numeros\" style=\"top:8px;left: 20px;\">4</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:12px;left: 16px;\">4</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:16px;left: 12px;\">4</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:20px;left: 8px;\">4</div>\n" +
"				</div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>\n" +
"			</div>\n" +
"			<div id=\"nivel5b\" class=\"niveles\">\n" +
"				<p class=\"texto-nivel\">Nivel 5</p>\n" +
"				<div class=\"imagen-nivel\">\n" +
"					<div class=\"figuras-numeros\" style=\"top:8px;left: 20px;\">5</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:11px;left: 17px;\">5</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:14px;left: 14px;\">5</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:17px;left: 11px;\">5</div>\n" +
"					<div class=\"figuras-numeros\" style=\"top:20px;left: 9px;\">5</div>\n" +
"				</div>\n" +
"				<div class=\"stars\"> \n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"					<span class=\"glyphicon glyphicon-star\"></span>\n" +
"				</div>	\n" +
"			</div>\n" +
"		</div>\n" +
"	\n" +
"\n" +
"	</div>\n" +
"\n" +
"		\n" +
"\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-3.2.1.min.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/jquery-ui.min.js\"></script>\n" +
"	<script src=\"js/jquery.ddslick.min.js\"></script>\n" +
        "<script type=\"text/javascript\" src=\"js/jquery.validate.min.js\"></script>"+
"	<script type=\"text/javascript\" src=\"js/crea_una_fraccion.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/bootstrap.min.js\"></script>\n" +
"	\n" +
"\n" +
"</body>\n" +
"</html>");
    }
 }
