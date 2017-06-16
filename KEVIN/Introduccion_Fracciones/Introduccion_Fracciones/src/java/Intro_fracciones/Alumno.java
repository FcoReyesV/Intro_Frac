package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Alumno extends HttpServlet {
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
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<meta charset='UTF-8'>" +  
            "<title>Introducción - Introducción a las fracciones</title>" +
            "<link rel='stylesheet' href='css/bootstrap.min.css'>" +
            "<link rel='stylesheet' href='css/index.css'>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<header>" +
"			<div id=\"logo\"></div>" +
"			<nav class=\"navegacion\">" +
"				<ul>" +
"					<li><a href=\"#\">Introducción</a></li>" +
"					<li><a href=\"#\">Crear una Fracción</a></li>" +
"					<li><a href=\"#\">Laboratorio de Igualdad</a></li>" +
"					<li><a href=\"#\">Ayuda</a></li>" +
"					<li>" +
"						<form id='cerrar-s' action='CerrarSesion'>" +
"							<input id='Cerrar-sesion' type='submit' value='Cerrar Sesión'/>\n" +
"						</form>" +
"					</li>" +
"				</ul>" +
"			</nav>" +
"		</header>");
            
            
            out.println("<div class='container-fluid'>");
            out.println("<div class=\"row\">");
            out.println("<aside class=\"barra-lateral col-md-2\">");
            out.println("<div class=\"usuario-bloque\">\n" +
"					<p>"+userName+"</p>" +
"				</div>	");
            out.println("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident ipsam quis eos magni aliquam error, doloremque sapiente expedita dolore saepe eius, iste ea necessitatibus id deserunt maiores, tempora repellendus rerum.");
            out.println("</aside>");
            out.println("<div class=\"bloque-central col-md-6 col-md-offset-1\">" +
"				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis excepturi, placeat optio vero, harum, alias nihil rem laboriosam incidunt iusto iure, repellat consectetur labore quo! Veritatis ut aliquid beatae alias!\n" +
"			</div>");
            out.println("</div>");
            out.println("</div>");
            out.println("</body>");
            out.println("</html>");
    }
}

