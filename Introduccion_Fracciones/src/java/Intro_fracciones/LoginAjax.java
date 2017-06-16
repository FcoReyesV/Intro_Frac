package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginAjax extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        response.setHeader("Cache-Control", "no-cache");
        LectorXML usuarios=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        String nombre[]=usuarios.datosUsuario("nombre");
        String password[]=usuarios.datosUsuario("pass");
        String user=request.getParameter("Usuario");
        String pass=request.getParameter("Pass");
        boolean ban=false;
        //Recorremos el archivo donde se guardan los usuarios y comparamos si existe el usuario
        for(int i=0;i<usuarios.getTotalUsuarios();i++){
               if(user.equals(nombre[i]) && pass.equals(password[i])){
                   out.println("true"); 
                   ban=true;
                   break;
               }
        }
        if(!ban)
            out.print("false");
      
    }
 }

