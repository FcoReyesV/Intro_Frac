package Intro_fracciones;

import java.io.File;
import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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

public class GuardarCrearUnaFiguraAjax extends HttpServlet {
    @Override
     protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String nombre_usuario=request.getParameter("nombre_usuario"); 
        String  Nombre_guardado=request.getParameter("codigo");
        String  codigo=request.getParameter("codigo");
        String nivel=request.getParameter("nivel");
        try {
            AgregarNodo(request.getRealPath("/")+"\\xml\\Modulo_Profesor.xml",Nombre_guardado,codigo,nombre_usuario,nivel);
        } catch (Exception ex) {
            Logger.getLogger(GuardarUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }
       
       response.sendRedirect("Administrador");
    }
     public static void AgregarNodo(String archivo_direccion,String Nombre_guardado, String codigo,String nombre_usuario,String nivel) throws Exception {
    String xmlFile=archivo_direccion;
    File file = new File(xmlFile);
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    
    Element usuario=(Element)doc.createElement("usuario");
    Element nombre=(Element)doc.createElement("nombre");
    Element crear_fraccion=(Element)doc.createElement("crear_fraccion");
    Element num_nivel=(Element)doc.createElement(nivel);
    Element Contenido_nivel=(Element)doc.createElement("Contenido_nivel");
    Element nombre_guardado=(Element)doc.createElement("Nombre_guardado");
    Element codigo_nivel=(Element)doc.createElement("Codigo");
    
    nombre.setTextContent(nombre_usuario);
    codigo_nivel.setTextContent(codigo);
    nombre_guardado.setTextContent(Nombre_guardado);

    
    usuario.appendChild(nombre);
    usuario.appendChild(crear_fraccion);
    crear_fraccion.appendChild(num_nivel);
    num_nivel.appendChild(Contenido_nivel);
    Contenido_nivel.appendChild(nombre_guardado);
    Contenido_nivel.appendChild(codigo_nivel);
    
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


