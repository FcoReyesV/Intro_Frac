package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Modificar extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        HttpSession session=request.getSession();
        response.setContentType("text/html;charset=UTF-8");
        /*Con 'modificar_usuario' accedemos al XML donde se encuentran registrados los usuarios,
        con dicha instancia haremos la modificacion*/
        LectorXML modificar_usuario=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        int i=0;
        String nombre="",tipo="",pass="";
        String nombres[]=modificar_usuario.datosUsuario("nombre"),tipos[]=modificar_usuario.datosUsuario("tipo"),passw[]=modificar_usuario.datosUsuario("pass"),select[]=new String[3];
        /*De todos los usuarios que hay registrados, buscamos aquel que coincida con el
        nombre, tipo y pass del parametro que se envia desde el otro servlet*/
        for(i=0;i<nombres.length;i++){
            if((request.getParameter("userNombre").equals(nombres[i]))&&(request.getParameter("userTipo").equals(tipos[i]))&&(request.getParameter("userPass").equals(passw[i]))){
                nombre=nombres[i];
                tipo=tipos[i];
                pass=passw[i];
                break;
            }       
        }
        
        //Subimos a session el nombre,tipo y pass, ya que posteriormente los utiizaremos
        session.setAttribute("nombreModificar", nombre);
        session.setAttribute("tipoModificar", tipo);
        session.setAttribute("passModificar", pass);
        
        switch(tipo){
            case "Administrador":
                select[0]="Administrador";
                select[1]="Profesor";
                select[2]="Alumno";
                break;
            case "Profesor":
                select[0]="Profesor";
                select[1]="Administrador";
                select[2]="Alumno";
                break;
            case "Alumno":
                select[0]="Alumno";
                select[1]="Administrador";
                select[2]="Profesor";
                break;
            default:
                break;
        }
        
	PrintWriter out=response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Modificar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Modificar Usuarios "+tipo+"</h1><br/>");
            /*Creamos un formulario que enviara los parametros a 'GuardarCambios'
            de nombre, tipo y pass del usuario que modificaremos */
            out.println("<form action='GuardarCambios' method='post'>");
            out.println("Nombre usuario: <input type='text' placeholder='Nombre' name='nombre' id='nombre' oninvalid=\"setCustomValidity('Escribe un usuario')\"  oninput=\"setCustomValidity('')\" value='"+nombre+"' required/>");
            out.println("Tipo: <select name='tipo'>");
                out.println("<option value='"+select[0]+"'>"+select[0]+"</option>");
                out.println("<option value='"+select[1]+"'>"+select[1]+"</option>");
                out.println("<option value='"+select[2]+"'>"+select[2]+"</option>");
            out.println("</select>");
            out.println("Password: <input type='password' placeholder='Password' name='pass' id='pass' oninvalid=\"setCustomValidity('Escribe un contraseña')\"  oninput=\"setCustomValidity('')\" value='"+pass+"' required/>");
            out.println("<button id='guardar'>Guardar Usuario</button>");
            out.println("</form>");
            out.println("</body>");
            out.println("</html>");
    }
}

