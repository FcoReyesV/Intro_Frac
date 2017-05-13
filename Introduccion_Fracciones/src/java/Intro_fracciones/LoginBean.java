package Intro_fracciones;

import java.util.HashMap;


public class LoginBean {
    
    private HashMap validUsers = new HashMap();
    public LoginBean(String nombre_archivo){
       
        LectorXML usuarios=new LectorXML(nombre_archivo);
        String nombre[]=usuarios.datosUsuario("nombre");
        String pass[]=usuarios.datosUsuario("pass");
        for(int i=0;i<nombre.length;i++){
             validUsers.put(nombre[i],pass[i]);
        }  
    }
    
    public boolean validateUser(String userName, String password){        
        if(validUsers.containsKey(userName)){
            String thePassword = (String)validUsers.get(userName);
            if(thePassword.equals(password))
                return true;
        }
        return false;
    }
   
}
