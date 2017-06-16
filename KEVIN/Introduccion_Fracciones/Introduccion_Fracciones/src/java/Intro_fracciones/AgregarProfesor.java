package Intro_fracciones;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
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

public class AgregarProfesor extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       String []datos=new String[9];
       
       datos[0]=request.getParameter("userName");
       datos[1]="Inicio";
       datos[2]="RH";
       datos[3]="1";
       datos[4]="0";
       datos[5]="1";
       datos[6]="1";
       datos[7]=" ";
       datos[8]=" ";
       
        try {
            AgregarNodo(request.getRealPath("/")+"\\xml\\Modulo_Profesor.xml",datos);
            PrintWriter out=response.getWriter();
            out.println(request.getRealPath("/")+"\\xml\\Modulo_Profesor.xml");
        } catch (Exception ex) {
            Logger.getLogger(GuardarUsuario.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
public static void AgregarNodo(String archivo_direccion,String datos[]) throws Exception {
    String xmlFile=archivo_direccion;
    File file = new File(xmlFile);
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    
    Element creados=(Element)doc.createElement("usuario");
    Element nombre=(Element)doc.createElement("nombre");    
    Element titulo=(Element)doc.createElement("titulo");
    Element tipo=(Element)doc.createElement("tipo");
    Element contador_contenedores=(Element)doc.createElement("contador_contenedores");
    Element contador_numerador=(Element)doc.createElement("contador_numerador");
    Element contador_denominador=(Element)doc.createElement("contador_denominador");
    Element contador_figura=(Element)doc.createElement("contador_figura");
    Element contenedor_principal=(Element)doc.createElement("contenedor_principal");
    Element contenedor_objetos_draggables=(Element)doc.createElement("contenedor_objetos_draggables");
    
    nombre.setTextContent(datos[0]);
    titulo.setTextContent(datos[1]);
    tipo.setTextContent(datos[2]);
    contador_contenedores.setTextContent(datos[3]);
    contador_numerador.setTextContent(datos[4]);
    contador_denominador.setTextContent(datos[5]);
    contador_figura.setTextContent(datos[6]);
    contenedor_principal.setTextContent(datos[7]);
    contenedor_objetos_draggables.setTextContent(datos[8]);
    
    creados.appendChild(nombre);
    creados.appendChild(titulo);
    creados.appendChild(tipo);
    creados.appendChild(contador_contenedores);
    creados.appendChild(contador_numerador);
    creados.appendChild(contador_denominador);
    creados.appendChild(contador_figura);
    creados.appendChild(contenedor_principal);
    creados.appendChild(contenedor_objetos_draggables);

    Element root=(Element)doc.getElementsByTagName("usuario").item(0);
    root.getParentNode().appendChild(creados);
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
