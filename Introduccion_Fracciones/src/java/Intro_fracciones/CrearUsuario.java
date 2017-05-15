package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CrearUsuario extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
	PrintWriter out=response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet1</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Crear usuario</h1>");
            out.println("<form action='GuardarUsuario' method='post'>");
            out.println("Nombre usuario: <input type='text' placeholder='Nombre' name='nombre' id='nombre' onchange='cambio();'/>");
            out.println("Tipo: <input type='text' placeholder='Tipo' name='tipo' id='tipo' onchange='cambio();'/>");
            out.println("Password: <input type='password' placeholder='Password' name='pass' id='pass' onchange='cambio();'/>");
            out.println("Confirmar Password: <input type='password' placeholder='Confirmar Password' name='confirmar_pass' id='confirmar_pass' onchange='cambio();'/>");
            out.println("<input type='button' value='Crear Usuario' id='guardar'/>");
            out.println("<input type='submit' value='Regresar' id='enviar'/>");
            out.println("</form>");
            /*Con el siguiente script haremos las validaciones necesarias*/
            out.println("<script src='jss\\modificarUsuario.js'></script>");
            out.println("</body>");
            out.println("</html>");
    }
}

