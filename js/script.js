$(document).ready(function(){
		var $agregar_usuario=$('.agregar-usuario');
		var $table_editable=$('.table-editable');
		var $modificar_usuario=$('.modificar-usuario');

		$("#agregar_usuario").on( "click", function() { //funcion de jquery para  que al dar clic se muestren y oculten bloques
			$agregar_usuario.show(); 
			 
			$table_editable.hide(); 
		 });
		$("#close_add_users").on("click", function(){
			$(".login-form")[0].reset(); //objeto jquery para resetear el formulario
			$agregar_usuario.hide();
			$table_editable.show(); 
			$("label").hide();
			 $('.add-form,input').removeClass('error-form');

		});


		$(".actualizar_datos").on( "click", function() {


			var $nombre = $(this).parents("tr").find("td").eq(0).text();
			var $tipo = $(this).parents("tr").find("td").eq(1).text();

			$("#nombre_usuario").val($nombre);
			$("#tipo_usuario").val($tipo);

			$modificar_usuario.show(); 
			 
			$table_editable.hide(); 

			$.get('../Introduccion_Fracciones/xml/Usuarios.xml', function(d){ //.get es el equivalente de ajax en jquery 
		        $(d).find('usuario').each(function(){

		            var $usuario = $(this); 
		            var $nombre_usuario = $usuario.find('nombre').text();
		            var $pass = $usuario.find('pass').text();
		            if($nombre_usuario===$nombre)
		            	$(".pass_input").val($pass);
		        });
	   		});
			

		 });



		$("#close_update_users").on("click", function(){
			$(".login-form")[0].reset();
			$modificar_usuario.hide(); 
			$table_editable.show();  
		});


		
		$.validator.setDefaults({
		    errorClass: 'help-block',
		    highlight: function(element) {
		      $(element)
		        .closest('.add-form>input')
		        .addClass('error-form');
		    },
		    unhighlight: function(element) {
		      $(element)
		        .closest('.add-form>input')
		        .removeClass('error-form');
    		}  
    	});
    	$.validator.addMethod('strongPassword', function(value, element) {
    		return this.optional(element) 
		      || value.length >= 4
		      && /\d/.test(value)
		      && /[a-z]/i.test(value);
 		 }, 'La contraseña debe tener al menos 4 caracteres y contener al menos un número y un caracter');
		
		$("#validationForm").validate({ //funcion de jQuery para validar formularios, en este caso el de agregar usuarios
		    rules: {
		      nombre: {
		      	required: true,
		      	minlength: 4
		      },
		      pass: {
		        required: true,
		        strongPassword: true
		      },
		      pass2: {
		      	required: true,
		      	equalTo: '#pass'
		      }
		    },
		    messages: {
		      nombre: {
		      	required:'Ingresa un nombre de usuario',
		      	minlength: 'El nombre debe tener al menos 4 caracteres'
		      },
		      pass:{
		      	required: 'Ingresa una contraseña'
		      },
		      pass2: {
		      	required: 'Ingresa una contraseña',
		      	equalTo: 'Las contraseñas son diferentes'
		      }
		    },
		    submitHandler: function(form) {
		      form.submit();
		    }
		  });
		

	});
        
   

