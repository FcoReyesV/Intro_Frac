package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class GuardarCambios extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession();
        
        /*Obtenemos de la session los valores inicales del usuario*/
        String valorInicial[]=new String[3];
        valorInicial[0]=(String)session.getAttribute("nombreModificar");
        valorInicial[1]=(String)session.getAttribute("tipoModificar");
        valorInicial[2]=(String)session.getAttribute("passModificar");
        
        /*Obtenemos de los parametros enviados por el servlet 'Administrador' los nuevos valores que contendra el usuario*/
        String nuevoValor[]=new String[3];
	nuevoValor[0]=request.getParameter("nombre");
        nuevoValor[1]=request.getParameter("tipo");
        nuevoValor[2]=request.getParameter("pass");
        
        //Redireccionamos nuevamente al servlet 'Administrador' pero esta vez mostrando los cambios ya hechos
        response.sendRedirect("Administrador");
        
    }
}
