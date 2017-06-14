package Intro_fracciones;

import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;

public class EliminarFracciones extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        int nodo_usuario=Integer.parseInt(request.getParameter("nodo_usuario"));
        int nodo_creados=Integer.parseInt(request.getParameter("nodo_creados"));
        try {
            EliminarNodo(request.getRealPath("/")+"\\xml\\Modulo_Profesor.xml",nodo_usuario,nodo_creados);
            PrintWriter out=response.getWriter();
            out.println("Eliminado");
        } catch (Exception ex) {
            Logger.getLogger(EliminarFracciones.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    public static void EliminarNodo(String archivo_direccion,int nodo_usuario, int nodo_creados) throws Exception {
        String xmlFile=archivo_direccion;
        File file = new File(xmlFile);
        DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
        DocumentBuilder builder = factory.newDocumentBuilder();
        Document doc = (Document)builder.parse(xmlFile);
        Element element = (Element)doc.getElementsByTagName("usuario").item(nodo_usuario);
        Element introduccion = (Element) element.getElementsByTagName("introduccion").item(0);
        Element creado=(Element) introduccion.getElementsByTagName("creados").item(nodo_creados);
        //  Remove the node
            introduccion.removeChild(creado);
           
            escribirArchivo(doc,archivo_direccion);
    }
    public static void escribirArchivo(Document documento,String direccion) throws TransformerConfigurationException, TransformerException {
        // Creamos el objecto transformador
        TransformerFactory transformerFactory = TransformerFactory.newInstance();
        Transformer transformer = transformerFactory.newTransformer();
        
        // Archivo donde almacenaremos el XML
        File archivo = new File(direccion);
        
        // Fuente de datos, en este caso el documento XML
        DOMSource source = new DOMSource(documento);
        
        // Resultado, el cual almacena en el archivo indicado
        StreamResult result = new StreamResult(archivo);
        // Transformamos de la fuente DOM a el resultado, lo que almacena todo en el archivo
        transformer.transform(source, result);
    }
}

