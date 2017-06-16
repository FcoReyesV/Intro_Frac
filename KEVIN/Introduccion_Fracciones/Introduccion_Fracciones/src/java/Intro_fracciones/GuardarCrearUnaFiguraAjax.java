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
     protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String nombre_usuario=request.getParameter("nombre_usuario"); 
        String  Nombre_guardado=request.getParameter("nombre_guardado");
        String  codigo1=request.getParameter("codigo1");
        String  codigo2=request.getParameter("codigo2");
        String  codigo3=request.getParameter("codigo3");
        String nivel=request.getParameter("nivel");
        try {
            AgregarNodo(request.getRealPath("/")+"\\xml\\Modulo_Profesor_niveles.xml",Nombre_guardado,codigo1,codigo2,codigo3,nombre_usuario,nivel);
        } catch (Exception ex) {
            Logger.getLogger(GuardarUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }
       
       response.sendRedirect("Administrador");
    }
     public static void AgregarNodo(String archivo_direccion,String Nombre_guardado, String codigo1,String codigo2,String codigo3,String nombre_usuario,String nivel) throws Exception {
    String xmlFile=archivo_direccion;
    File file = new File(xmlFile);
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    
    Element usuario=(Element)doc.createElement("usuario");
    Element crear_fraccion=(Element)doc.createElement("crear_fraccion");
    Element num_nivel=(Element)doc.createElement(nivel);
    
    Element nombre_guardado=(Element)doc.createElement("Nombre_guardado");
    Element codigo1_nivel=(Element)doc.createElement("Codigo1");
    Element codigo2_nivel=(Element)doc.createElement("Codigo2");
    Element codigo3_nivel=(Element)doc.createElement("Codigo3");
    
    usuario.setAttribute("nombre_usuario", nombre_usuario);
    codigo1_nivel.setTextContent(codigo1);
    codigo2_nivel.setTextContent(codigo2);
    codigo3_nivel.setTextContent(codigo3);
    nombre_guardado.setTextContent(Nombre_guardado);

    
   // usuario.appendChild(nombre);
    usuario.appendChild(crear_fraccion);
    crear_fraccion.appendChild(num_nivel);
    num_nivel.appendChild(nombre_guardado);
    num_nivel.appendChild(codigo1_nivel);
    num_nivel.appendChild(codigo2_nivel);
    num_nivel.appendChild(codigo3_nivel);
    
    
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


