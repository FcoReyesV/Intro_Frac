package Intro_fracciones;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class fail extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        response.setContentType("text/html;charset=UTF-8");
        HttpSession session=request.getSession();
        String userName=(String)session.getAttribute("userName");
        String pass=(String)session.getAttribute("userPassword");
	PrintWriter out=response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet1</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("Fail:"+userName+"Pass: "+pass);
            
            out.println("<a href='Inicio' >Return</a>");            
            out.println("</body>");
            out.println("</html>");
    }
}