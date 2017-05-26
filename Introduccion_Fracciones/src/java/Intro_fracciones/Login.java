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
        session.setAttribute("userPassword",Password);
        LoginBean lb = new LoginBean(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        
        // Comprueba si el password o el usuario son correctos
        if(lb.validateUser(Usuario,Password)){
            LectorXML tipo_usuario=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
            String tipo[]=tipo_usuario.datosUsuario("tipo");
            String nombre[]=tipo_usuario.datosUsuario("nombre");
            String pass[]=tipo_usuario.datosUsuario("pass");
            //Buscamos el tipo a partir del usuario y la contraseña
            for(int i=0;i<tipo.length;i++){
               if(nombre[i].equals(Usuario) &&pass[i].equals(Password)){
                   switch(tipo[i]){
                       case "Administrador":
                           session.setAttribute("tipoUsuario",tipo[i]);
                           response.sendRedirect("AdministradorPrueba");
                       break;
                       case "Profesor":
                           session.setAttribute("tipoUsuario",tipo[i]);
                           response.sendRedirect("Profesor");
                       break;
                       case "Alumno":
                           session.setAttribute("tipoUsuario",tipo[i]);
                           response.sendRedirect("Alumno");
                       break;
                   }
               }
            }  
            
        }
        else{// username/password not validated
            response.sendRedirect("fail");
        }
    }
 }