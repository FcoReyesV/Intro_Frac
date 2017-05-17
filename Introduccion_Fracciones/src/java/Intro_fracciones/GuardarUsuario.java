package Intro_fracciones;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
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

public class GuardarUsuario extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       String []datos=new String[3];
       
       datos[0]=request.getParameter("nombre");
       datos[1]=request.getParameter("pass");
       datos[2]=request.getParameter("tipo");
       
        try {
            AgregarNodo(request.getRealPath("/")+"\\xml\\Usuarios.xml",datos);
        } catch (Exception ex) {
            Logger.getLogger(GuardarUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }
       
       response.sendRedirect("Administrador");
    }
public static void AgregarNodo(String archivo_direccion,String datos[]) throws Exception {
    String xmlFile=archivo_direccion;
    File file = new File(xmlFile);
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    
    Element usuario=(Element)doc.createElement("usuario");
    Element nombre=(Element)doc.createElement("nombre");
    Element pass=(Element)doc.createElement("pass");
    Element tipo=(Element)doc.createElement("tipo");
    
    nombre.setTextContent(datos[0]);
    pass.setTextContent(datos[1]);
    tipo.setTextContent(datos[2]);
    
    usuario.appendChild(nombre);
    usuario.appendChild(pass);
    usuario.appendChild(tipo);
    
    Element root=(Element)doc.getElementsByTagName("usuario").item(0);
    root.getParentNode().appendChild(usuario);
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
        System.out.println(result.getSystemId());
// Transformamos de la fuente DOM a el resultado, lo que almacena todo en el archivo
        transformer.transform(source, result);
    }
}
