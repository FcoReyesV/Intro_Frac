$(document).ready(function(){
	$.validator.setDefaults({
		errorClass: 'help-block',
		highlight: function(element) {
			$(element)
		  	.closest('.login-form>input')
		   	.addClass('error-form');
		},
		unhighlight: function(element) {
			$(element)
		   	.closest('.login-form>input')
		   	.removeClass('error-form');
    	}  
    });
	$("#validateLogin").validate({ //funcion de jQuery para validar formularios, en este caso el login
		rules: {
			Usuario: {
				required: true
				
			},
			Pass: {
				required: true,
				remote:{
				   	url: "../IF_Tomcat/LoginAjax",
	      			type: "post",
	      			data: {
				     	Usuario: function() {
				       		return $("#Usuario").val();
	                   	},
	                   	Pass: function(){
	                   		return $("#Pass").val();
	                   	}
	          		}
				}
			}
		},
		messages: {	
			Usuario: {
				required:'Ingresa un nombre de usuario',
        		
			},
			Pass:{
				required: 'Ingresa una contraseña',
				remote: 'Usuario o contraseña no válidos'
			}
		},
		submitHandler: function(form) {
			form.submit();
		}      
	});
});