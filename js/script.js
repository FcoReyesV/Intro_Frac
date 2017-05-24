$(document).ready(function(){
		var $agregar_usuario=$('.agregar-usuario');
		var $table_editable=$('.table-editable');
		$("#agregar_usuario").on( "click", function() {
			$agregar_usuario.show(); 
			 
			$table_editable.hide(); 
		 });
		$("#close_add_users").on("click", function(){
			$(".login-form")[0].reset();
			$agregar_usuario.hide();
			$table_editable.show(); 
		});
	});