package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class UsuariosExistentesAjax extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        response.setHeader("Cache-Control", "no-cache");
        LectorXML usuarios=new LectorXML(request.getRealPath("/")+"\\xml\\Usuarios.xml");
        String nombre[]=usuarios.datosUsuario("nombre");
        String user=request.getParameter("nombre");
        boolean ban=true;
        for(int i=0;i<usuarios.getTotalUsuarios();i++){
               if(user.equals(nombre[i])){
                   out.println("false"); 
                   ban=false;
                   break;
               }
        }
        if(ban)
            out.print("true");
      
    }
 }
