package Intro_fracciones;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
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
            throws ServletException, IOException 
    {
       
    }
public static void AgregarNodo(String archivo_direccion,Element nodo) throws Exception {
    String xmlFile=archivo_direccion;
    File file = new File(xmlFile);
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    Element root=(Element)doc.getParentNode();
    root.appendChild(nodo);
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
