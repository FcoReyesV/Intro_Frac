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
            out.println("<div class=\"container\">" +
"		<div id=\"knight_img\" class=\"col-md-1 col-md-offset-1\"></div>" +
"		<div class=\"login-page col-md-8\">" +
"		  <div class=\"form\">" +
"		  	<p class=\"title\">Introducción a las fracciones</p>" +
"		    <form class=\"login-form\" method=\"post\" action=\"Login\">" +
"		      <input oninvalid=\"setCustomValidity('Escribe un usuario')\"  oninput=\"setCustomValidity('')\"" +
"		      type=\"text\" placeholder=\"Usuario\" name=\"Usuario\" required/>\n" +
"		      <input oninvalid=\"setCustomValidity('Escribe una contraseña')\"  oninput='setCustomValidity('')' type=\"password\" placeholder=\"Contraseña\" name=\"Pass\" required/>" +
"		      <button>Iniciar Sesión</button>" +
"		    </form>\n" +
"		  </div>\n" +
"		</div>\n" +
"	</div>");
            out.println("</body>");
            out.println("</html>");
    }
 }
