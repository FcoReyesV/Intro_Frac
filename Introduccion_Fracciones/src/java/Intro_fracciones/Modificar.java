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
        String nombres[]=modificar_usuario.datosUsuario("nombre"),tipos[]=modificar_usuario.datosUsuario("tipo"),passw[]=modificar_usuario.datosUsuario("pass");
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
        
	PrintWriter out=response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Modificar</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Modificar Usuarios</h1><br/>");
            /*Creamos un formulario que enviara los parametros a 'GuardarCambios'
            de nombre, tipo y pass del usuario que modificaremos */
            out.println("<form action='GuardarCambios' method='post' name='formulario'>");//llamamos al Servlet 'GuardarCambios'
            out.println("Nombre <input type='text' id='nombre' name='nombre' value='"+nombre+"'onchange='cambio();'/><br/>");
            out.println("Tipo <input type='text' id='tipo' name='tipo' value='"+tipo+"'onchange='cambio();'/><br/>");
            out.println("Password <input type='password' id='pass' name='pass' value='"+pass+"'onchange='cambio();'/><br/>");
            out.println("Confirmar Password <input type='password' id='confirmar_pass' name='confirmar_pass' value='"+pass+"'onchange='cambio();'/><br/>");
            out.println("<input type='button' value='Guardar Cambios' id='guardar'/><br/>");
            out.println("<input type='submit' value='Regresar' id='enviar'/>");
            out.println("</form>");
            /*Con el siguiente script haremos las validaciones necesarias*/
            out.println("<script src='js\\validarUsuario.js'></script>");
            out.println("</body>");
            out.println("</html>");
    }
}

