package Intro_fracciones;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
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

public class Guardar_Introduccion_Fracciones extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        
        response.setContentType("text/html;charset=UTF-8");
        String titulo=request.getParameter("titulo");
        String tipo=request.getParameter("tipo");
        String contenedor_objetos_draggables=request.getParameter("contenedor_objetos_draggables");
        String contenedor_principal=request.getParameter("contenedor_principal");
        String contador_figura=request.getParameter("contador_figura");
        String contador_denominador=request.getParameter("contador_denominador");
        String contador_numerador=request.getParameter("contador_numerador");
        String contador_contenedores=request.getParameter("contador_contenedores");
        
        int nodo_usuario=Integer.parseInt(request.getParameter("nodo_usuario"));
        int nodo_creados=Integer.parseInt(request.getParameter("nodo_creados"));
        
        String datos[]=new String[6];
        
        datos[0]=titulo;
        datos[1]=tipo;
        datos[2]=contador_contenedores;
        datos[3]=contador_numerador;
        datos[4]=contador_denominador;
        datos[5]=contador_figura;
        datos[6]=contenedor_principal;
        datos[7]=contenedor_objetos_draggables;
        PrintWriter out=response.getWriter();
        try {
            ModificarNodo(request.getRealPath("/")+"\\xml\\Modulo_Profesor.xml",datos,nodo_usuario,nodo_creados);            
            
            out.println("Correcto");
        } catch (Exception ex) {
            Logger.getLogger(Guardar_Introduccion_Fracciones.class.getName()).log(Level.SEVERE, null, ex);
            out.println(ex);
        }
    }
    
    public static void ModificarNodo(String archivo_direccion,String datos[],int nodo_usuario,int nodo_creados) throws Exception {
    String xmlFile=archivo_direccion;
    DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
    DocumentBuilder builder = factory.newDocumentBuilder();
    Document doc = (Document)builder.parse(xmlFile);
    
    Element creados=(Element)doc.createElement("creados");
    Element titulo=(Element)doc.createElement("titulo");
    Element tipo=(Element)doc.createElement("tipo");
    Element contador_contenedores=(Element)doc.createElement("contador_contenedores");
    Element contador_numerador=(Element)doc.createElement("contador_numerador");
    Element contador_denominador=(Element)doc.createElement("contador_denominador");
    Element contador_figura=(Element)doc.createElement("contador_figura");
    Element contenedor_principal=(Element)doc.createElement("contenedor-principal");
    Element contenedor_objetos_draggables=(Element)doc.createElement("contenedor-objetos-draggables");
    
    titulo.setTextContent(datos[0]);
    tipo.setTextContent(datos[1]);
    contador_contenedores.setTextContent(datos[2]);
    contador_numerador.setTextContent(datos[3]);
    contador_denominador.setTextContent(datos[4]);
    contador_figura.setTextContent(datos[5]);
    contenedor_principal.setTextContent(datos[6]);
    contenedor_objetos_draggables.setTextContent(datos[7]);
    
    creados.appendChild(titulo);
    creados.appendChild(tipo);
    creados.appendChild(contador_contenedores);
    creados.appendChild(contador_numerador);
    creados.appendChild(contador_denominador);
    creados.appendChild(contador_figura);
    creados.appendChild(contenedor_principal);
    creados.appendChild(contenedor_objetos_draggables);
    
    Element usuario=(Element)doc.getElementsByTagName("usuario").item(nodo_usuario);
    Element introduccion=(Element) usuario.getElementsByTagName("introduccion").item(0);
    Element crear=(Element) introduccion.getElementsByTagName("creados").item(nodo_creados);
    crear.getParentNode().replaceChild(creados, crear);
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