package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Inicio extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
response.setContentType("text/html;charset=UTF-8");
        
        HttpSession session=request.getSession();
        String tipo=(String)session.getAttribute("tipoUsuario");
        response.setHeader("Cache-Control", "no-cache");
        //Fuerza a la caché para obtener una nueva copia de la página desde el servidor de origen
        response.setHeader("Cache-Control", "no-store");
        //Dirige a la caché a no almacenar la página bajo ninguna circunstancia
        response.setDateHeader("Expires", 0);
        //Provoca que la caché de proxy vea la página como "obsoleta"
        response.setHeader("Pragma", "no-cache");
        if(tipo != null){
            switch(tipo){
                       case "Administrador":
                           response.sendRedirect("Administrador");
                       break;
                       case "Profesor":
                           response.sendRedirect("Profesor");
                       break;
                       case "Alumno":
                           response.sendRedirect("Alumno");
                       break;
                   }     
        }
        PrintWriter out = response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");   
            out.println("<meta charset=\"UTF-8\">" +
"	<title>Introducción a las fracciones - Inicia sesión</title>" +
"	<link rel=\"stylesheet\" href=\"css/bootstrap.min.css\">" +
"	<link rel=\"stylesheet\" href=\"css/index.css\">");
            out.println("</head>");
            out.println("<body>");
            out.println("<div class=\"container\">\n" +
"		<div id=\"knight_img\" class=\"col-md-1 col-md-offset-1\"></div>\n" +
"		<div class=\"login-page col-md-8\">\n" +
"		  <div class=\"form\">\n" +
"		  	<p class=\"title\">Introducción a las fracciones</p>\n" +
"		    <form id=\"validateLogin\" class=\"login-form\" method=\"post\" action=\"Login\">\n" +
"		      <input id=\"Usuario\" type=\"text\" placeholder=\"Usuario\" name=\"Usuario\" />\n" +
"		      <input id=\"Pass\" type=\"password\" placeholder=\"Contraseña\" name=\"Pass\"/>"+
"		      <button>Iniciar Sesión</button>\n" +
"		    </form>\n" +
"		  </div>\n" +
"		</div>\n" +
"		\n" +
"	</div>");
            out.println("<script type=\"text/javascript\" src=\"js/jquery-3.2.1.min.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/jquery.validate.min.js\"></script>\n" +
"	<script type=\"text/javascript\" src=\"js/inicio.js\"></script>");
            out.println("</body>");
            out.println("</html>");
    }
 }
