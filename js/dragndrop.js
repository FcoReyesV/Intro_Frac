$(document).ready(function(){
	
	crearObjetosDraggables(1);
	var contador_contenedores=1;
	var $flecha_agregar_contenedor = $('#flecha-agregar-contenedor');
	var $flecha_quitar_contenedor = $('#flecha-quitar-contenedor');
	var $num_max = $('#num-max');

	var contador_numerador=0;
	var contador_denominador=1;
	var $denominador_agregar_btn = $('#denominador-agregar-btn');
	var $denominador_quitar_btn = $('#denominador-quitar-btn');
	var $numerador_texto = $('#numerador-texto');
	var $denominador_texto = $('#denominador-texto');

	$flecha_agregar_contenedor.click(function(event) {
		contador_contenedores++;
		$num_max .text(contador_contenedores);
		if(contador_contenedores==6){
			$flecha_agregar_contenedor.attr('disabled','true');
			$flecha_agregar_contenedor.removeClass('add-flecha-btn');
			$flecha_agregar_contenedor.addClass('add-flecha-btn-desact');

		}else{
			$flecha_agregar_contenedor.removeAttr('disabled','true');
			$flecha_quitar_contenedor.removeAttr('disabled','true');
			$flecha_quitar_contenedor.removeClass('add-flecha-btn-desact');
			$flecha_quitar_contenedor.addClass('add-flecha-btn');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});

	$flecha_quitar_contenedor.click(function(event) {
		contador_contenedores--;
		$num_max .text(contador_contenedores);
		if(contador_contenedores==1){
			$flecha_quitar_contenedor.attr('disabled','true');
			$flecha_agregar_contenedor.removeAttr('disabled','true');
			$flecha_quitar_contenedor.removeClass('add-flecha-btn');
			$flecha_quitar_contenedor.addClass('add-flecha-btn-desact');
		}else{
			$flecha_agregar_contenedor.removeClass('add-flecha-btn-desact');
			$flecha_agregar_contenedor.addClass('add-flecha-btn');
			$flecha_quitar_contenedor.removeAttr('disabled','true');
			$flecha_agregar_contenedor.removeAttr('disabled','true');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});

	$denominador_agregar_btn.click(function(event) {
		contador_denominador++;
		$denominador_texto .text(contador_denominador);
		if(contador_denominador==8){
			$denominador_agregar_btn.attr('disabled','true');
			$denominador_agregar_btn.removeClass('add-flecha-btn');
			$denominador_agregar_btn.addClass('add-flecha-btn-desact');

		}else{
			$denominador_agregar_btn.removeAttr('disabled','true');
			$denominador_quitar_btn.removeAttr('disabled','true');
			$denominador_quitar_btn.removeClass('add-flecha-btn-desact');
			$denominador_quitar_btn.addClass('add-flecha-btn');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});

	$denominador_quitar_btn.click(function(event) {
		contador_denominador--;
		$denominador_texto .text(contador_denominador);
		if(contador_denominador==1){
			$denominador_quitar_btn.attr('disabled','true');
			$denominador_agregar_btn.removeAttr('disabled','true');
			$denominador_quitar_btn.removeClass('add-flecha-btn');
			$denominador_quitar_btn.addClass('add-flecha-btn-desact');
		}else{
			$denominador_agregar_btn.removeClass('add-flecha-btn-desact');
			$denominador_agregar_btn.addClass('add-flecha-btn');
			$denominador_quitar_btn.removeAttr('disabled','true');
			$denominador_agregar_btn.removeAttr('disabled','true');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});


	
});

function crearObjetosDraggables(num_figura){
	for ( var i=0; i<3; i++ ) {
	    $('<div class="figuras-color figura-rectangulo-horizontal-'+num_figura+'"></div>')
	    	.attr( 'id', 'figura'+i )
	    	.appendTo( '#contenedor-objetos-draggables' ).draggable( {
		      containment: '.bloque-central',
		      stack: '#contenedor-objetos-draggables div',
		      cursor: 'move',
		      revert: true
		    });
	}
}
function crearContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++)
		$('<div class="contenedor-figura"><div>').attr('id','contenedorFigura'+i).appendTo('.contenedor-principal');
}


