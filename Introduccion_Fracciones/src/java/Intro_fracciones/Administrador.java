package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Administrador extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession();
        String userName=(String)session.getAttribute("userName");//Obtenemos nombre del administrador
        String userPassword=(String)session.getAttribute("userPassword");//Obtenemos password del administrador
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
            out.println("<title>Administrador</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("Bienvenido administrador: " +userName);
            out.println("<br/>Usuarios Registrados<br/>");
            out.println("<table>");
                out.println("<tr>");
                out.println("<td>Nombre</td>");
                out.println("<td>Tipo</td>");
                out.println("</tr>");
            if(userName.equals("admin")){//Validamos que no pueda Modificar o Eliminar a otros administradores, en caso de no ser el 'admin'
                for(int i=0;i<numero_usuarios;i++){
                    if(!(nombre[i].equals(userName))||!(pass[i].equals(userPassword))){//Validamos que el administrador no se muestre a si mismo
                        out.println("<tr>");
                        out.println("<td>"+nombre[i]+"</td>");
                        out.println("<td>"+tipo[i]+"</td>");
                        out.println("<td>");
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a modificar
                        al servlet 'Modificar'*/
                            out.println("<form action='Modificar' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            out.println("<input type='hidden' value='"+nombre[i]+"' name='userNombre'/>");
                            out.println("<input type='hidden' value='"+tipo[i]+"' name='userTipo'/>");
                            out.println("<input type='hidden' value='"+pass[i]+"' name='userPass'/>");
                            out.println("<input type='submit' value='Modificar'/>");
                            out.println("</form>");
                        out.println("</td>");
                        out.println("<td>");
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a eliminar
                        al servlet 'EliminarUsuario'*/
                            out.println("<form action='EliminarUsuario' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            out.println("<input type='hidden' value='"+nombre[i]+"' name='userNombre'/>");
                            out.println("<input type='hidden' value='"+tipo[i]+"' name='userTipo'/>");
                            out.println("<input type='hidden' value='"+pass[i]+"' name='userPass'/>");
                            out.println("<input type='submit' value='Eliminar'/>");
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
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a modificar
                        al servlet 'Modificar'*/
                            out.println("<form action='Modificar' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            out.println("<input type='hidden' value='"+nombre[i]+"' name='userNombre'/>");
                            out.println("<input type='hidden' value='"+tipo[i]+"' name='userTipo'/>");
                            out.println("<input type='hidden' value='"+pass[i]+"' name='userPass'/>");
                            out.println("<input type='submit' value='Modificar'/>");
                            out.println("</form>");
                        out.println("</td>");
                        out.println("<td>");
                        /*Creamos un formulario que sera el encargado de enviar el nombre del usuario a eliminar
                        al servlet 'EliminarUsuario'*/
                            out.println("<form action='EliminarUsuario' method='post'>");
                            out.println("<input type='hidden' value='"+i+"' name='nodo'/>");
                            out.println("<input type='hidden' value='"+nombre[i]+"' name='userNombre'/>");
                            out.println("<input type='hidden' value='"+tipo[i]+"' name='userTipo'/>");
                            out.println("<input type='hidden' value='"+pass[i]+"' name='userPass'/>");
                            out.println("<input type='submit' value='Eliminar'/>");
                            out.println("</form>");
                        out.println("</td>");
                        out.println("</tr>");
                        
                    }
                }
            }
            out.println("</table>");
            out.println("<input type='button' id='btn' value='Nuevo Usuario'/>");
            out.println("<script src='js\\Redireccionar.js'></script>");
            out.println("</body>");
            out.println("</html>");
    }
}
