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
            out.println("<title>Nuevo Usuario</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Crear usuario</h1>");
            out.println("<form action='GuardarUsuario' method='post'>");
            out.println("Nombre usuario: <input type='text' placeholder='Nombre' name='nombre' id='nombre' oninvalid=\"setCustomValidity('Escribe un usuario')\"  oninput=\"setCustomValidity('')\" required/>");
            out.println("Tipo: <select name='tipo'>");
                out.println("<option value='Administrador'>Administrador</option>");
                out.println("<option value='Profesor'>Profesor</option>");
                out.println("<option value='Alumno'>Alumno</option>");
            out.println("</select>");
            out.println("Password: <input type='password' placeholder='Password' name='pass' id='pass' oninvalid=\"setCustomValidity('Escribe un contraseña')\"  oninput=\"setCustomValidity('')\" required/>");
            out.println("<button id='guardar'>Guardar Usuario</button>");
            out.println("</form>");
            out.println("</body>");
            out.println("</html>");
    }
}

