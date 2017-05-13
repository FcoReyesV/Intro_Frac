package Intro_fracciones;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Login extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
response.setContentType("text/html;charset=UTF-8");
        
        String Usuario=request.getParameter("Usuario");
        String Password=request.getParameter("Pass");
        HttpSession session=request.getSession();
        session.setAttribute("userName",Usuario);

            LectorXML usuario=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
            String tipo[]=usuario.datosUsuario("tipo");
            String nombre[]=usuario.datosUsuario("nombre");
            String pass[]=usuario.datosUsuario("pass");
            //Buscamos el tipo a partir del usuario y la contraseña
            
            for(int i=0;i<tipo.length;i++){
               if(nombre[i].equals(Usuario) && pass[i].equals(Password)){ // Comprueba si el password o el usuario son correctos
                   switch(tipo[i]){
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
               else{
                   response.sendRedirect("fail");
               }
            }     
    }
 }