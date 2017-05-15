package Intro_fracciones;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;
import org.jdom.Document;         
import org.jdom.Element;          
import org.jdom.JDOMException;    
import org.jdom.input.SAXBuilder; 
import org.jdom.output.XMLOutputter;
public class LectorXML{
   
    private List lista_usuarios;
    private String direccion_archivo;
    
    public LectorXML(String nombre_archivo){
        direccion_archivo=nombre_archivo;
        //Se crea un SAXBuilder para poder parsear el archivo
        SAXBuilder builder = new SAXBuilder();
        
        File xmlFile = new File(nombre_archivo);
        try{
            //Se crea el documento a traves del archivo
            Document document = (Document) builder.build(xmlFile);
            //Se obtiene el nodo raíz
            Element rootNode = document.getRootElement();
            //Se crea una lista para obtener el nodo que tiene la información de los usuarios
            lista_usuarios = rootNode.getChildren("usuario");
            
        }catch ( IOException | JDOMException ex) {
            System.out.println(ex.getMessage());
        }
    }
    
    public String[] datosUsuario(String elemento){
       String nombre[]=new String[lista_usuarios.size()];
         //Recorremos la lista
        for ( int i = 0; i < lista_usuarios.size(); i++ ){
            //Se obtiene el elemento 'usuario'
            Element usuario = (Element) lista_usuarios.get(i);
            //Se obtienen los valores que estan entre los tags '<usuario></usuario>'
            //Se obtiene el valor que esta entre los tags que se requieran, como '<nombre></nombre>'
            nombre[i] = usuario.getChildTextTrim(elemento);
        }
        return nombre;
    }
    public int getTotalUsuarios(){
        return lista_usuarios.size();
    }
}