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
        LoginBean lb = new LoginBean(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        
        if(lb.validateUser(Usuario, Password)){
            LectorXML usuario=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
            String nombre[]=usuario.datosUsuario("nombre");
            String tipo[]=usuario.datosUsuario("tipo");
            
            for(int i=0;i<nombre.length;i++){
               if(nombre[i].equals(Usuario)){ //Con el nombre de usuario obtenemos el tipo
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
            } 
        }
        else{
            response.sendRedirect("fail");
        }
    }
 }