$(document).ready(function(){
	crearContenedorFigura(1);
	$('<div class="figura-rectangulo-horizontal-1">').attr('id','figuraDND0CF0').appendTo('#contenedorFigura0');
	crearObjetosDraggables(2);
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

	var $numerador_agregar_btn = $('#numerador-agregar-btn');
	var $numerador_quitar_btn = $('#numerador-quitar-btn');

	

	$flecha_agregar_contenedor.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		contador_contenedores++;
		$num_max .text(contador_contenedores);
		destruirContenedorFigura(contador_contenedores);
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);

		if(contador_numerador<(contador_denominador*contador_contenedores)){
			if(contador_numerador==0){

				$numerador_quitar_btn.attr('disabled','true');
				$numerador_quitar_btn.removeClass('add-flecha-btn');
				$numerador_quitar_btn.addClass('add-flecha-btn-desact');
			}else{
				$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
				$numerador_agregar_btn.addClass('add-flecha-btn');
				$numerador_quitar_btn.removeAttr('disabled','true');
				$numerador_agregar_btn.removeAttr('disabled','true');
			}
			
		}else{
			$numerador_agregar_btn.attr('disabled','true');
			$numerador_agregar_btn.removeClass('add-flecha-btn');
			$numerador_agregar_btn.addClass('add-flecha-btn-desact');
		}

			

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
		destruirFiguraDND(contador_denominador,contador_contenedores);
		destruirContenedorFigura(contador_contenedores);
		contador_contenedores--;
		$num_max .text(contador_contenedores);
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);
		if(contador_numerador>(contador_contenedores*contador_denominador)){
			contador_numerador=contador_contenedores*contador_denominador;
			$numerador_texto.text(contador_numerador);
		}
		if(contador_numerador==(contador_contenedores*contador_denominador)){
			$numerador_agregar_btn.attr('disabled','true');
			$numerador_agregar_btn.removeClass('add-flecha-btn');
			$numerador_agregar_btn.addClass('add-flecha-btn-desact');
		}
		

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
		destruirFiguraDND(contador_denominador,contador_contenedores);
		contador_denominador++;
		$denominador_texto .text(contador_denominador);
		creaFiguraDND(contador_denominador,contador_contenedores);
		if(contador_denominador==8){
			$denominador_agregar_btn.attr('disabled','true');
			$denominador_agregar_btn.removeClass('add-flecha-btn');
			$denominador_agregar_btn.addClass('add-flecha-btn-desact');

		}else{
			
			$denominador_agregar_btn.removeAttr('disabled','true');
			$denominador_quitar_btn.removeAttr('disabled','true');
			$denominador_quitar_btn.removeClass('add-flecha-btn-desact');
			$denominador_quitar_btn.addClass('add-flecha-btn');
			

			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
			//$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
		}
		
	});

	$denominador_quitar_btn.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		contador_denominador--;
		creaFiguraDND(contador_denominador,contador_contenedores);
		$denominador_texto .text(contador_denominador);
		if(contador_denominador==contador_numerador){
					$numerador_agregar_btn.attr('disabled','true');
					$numerador_agregar_btn.removeClass('add-flecha-btn');
					$numerador_agregar_btn.addClass('add-flecha-btn-desact');
		}
		if(contador_denominador<contador_numerador){			
				contador_numerador--;
				$numerador_texto.text(contador_numerador);	
		}
		if(contador_numerador>(contador_contenedores*contador_denominador)){
			contador_numerador=contador_contenedores*contador_denominador;
			$numerador_texto.text(contador_numerador);
		}
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
				

		//crearContenedorFigura(contador_contenedores);
		}
	});

	$numerador_agregar_btn.click(function(event) {
		contador_numerador++;
		 $numerador_texto.text(contador_numerador);
		if(contador_denominador*contador_contenedores==contador_numerador){
			$numerador_agregar_btn.attr('disabled','true');
			$numerador_agregar_btn.removeClass('add-flecha-btn');
			$numerador_agregar_btn.addClass('add-flecha-btn-desact');
			$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_quitar_btn.removeClass('add-flecha-btn-desact');
			$numerador_quitar_btn.addClass('add-flecha-btn');

		}else{
			$numerador_agregar_btn.removeAttr('disabled','true');
			$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_quitar_btn.removeClass('add-flecha-btn-desact');
			$numerador_quitar_btn.addClass('add-flecha-btn');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});

	$numerador_quitar_btn.click(function(event) {
		contador_numerador--;
		$numerador_texto.text(contador_numerador);
		if(contador_numerador==0){
			$numerador_quitar_btn.attr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
			$numerador_quitar_btn.removeClass('add-flecha-btn');
			$numerador_quitar_btn.addClass('add-flecha-btn-desact');
			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
		}else{
			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
			$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
			
		}
		//crearContenedorFigura(contador_contenedores);
	});

	
});

function crearObjetosDraggables(num_figura){
	for ( var i=0; i<3; i++ ) {
	    $('<div class="figura-propiedades figuras-color figura-rectangulo-horizontal-'+num_figura+' figuraDraggable"></div>')//Se agrego la clase figuraDraggable
	    	.attr( 'id', 'figura'+i )
	    	.appendTo( '#contenedor-objetos-draggables' ).draggable( {
		      containment: '.bloque-central',
		      stack: '#contenedor-objetos-draggables div',
		      cursor: 'move',
		      revert:true
		});//Guardamos la posicion inicial
	    $('#figura'+i).css({
	    	top: '10px',
	    	right: 10*i+'px'
	    });
	    var left=$('#figura'+i).position().left;//Se obtiene el left inicial
	   	var top=$('#figura'+i).position().top;//Se obtiene el top inicial
	    $('#figura'+i).data('top',top);//Se guarda su posicion en left en cada uno de los elementos
	    $('#figura'+i).data('left',left);//Se guarda su posicion en top en cada uno de los elementos
	}
}
function crearContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++)
		$('<div class="contenedor-figura"><div>').attr('id','contenedorFigura'+i).appendTo('.contenedor-principal');
}
function destruirContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++)
		$('#contenedorFigura'+i).remove();
}

function creaFiguraDND(contador_denominador,contenedorFigura){
	for(var j=0;j<contenedorFigura;j++){
		for(var i=0;i<contador_denominador;i++){
			$('<div class="figura-rectangulo-horizontal-'+contador_denominador+'"> ')
				.attr('id','figuraDND'+i+'CF'+j)
				.appendTo('#contenedorFigura'+j).droppable({
					drop: function(event,ui){
						tolerance: 'fit'//Solo se aceptan si estan por completo las figuras
						accept: '.figuraDraggable'//Solo se acepataran las figuras con dicha clase
						var elemento=ui.draggable;
						elemento.draggable({
							revert:false//Se quita el revert, para evitar que se regrese la figura
						});	
					},
					out: function(event,ui){
						var elemento=ui.draggable;
						elemento.draggable({
							revert:function() {//Se restablece un nuevo revert, solo que este no retornara nuevo elemento droppable, si no al contenedor original, en el que estaba el elemento
								var elemento=$(this);
								var topElemento=$(this).data('top');//Se recupera la posicion en top que tenia la figura inicialmente
								var leftElemento=$(this).data('left');//Se recupera la posicion en left que tenia la figura inicialmente
								elemento.animate({top:topElemento,left:leftElemento},'slow');//La animacion es la que genera el efecto de que vuelve la figuara a la posicion inicial
							}
						});
					}
				});//termina droppable
		}
	}
}

function destruirFiguraDND(contador_denominador,contenedorFigura){
	for(var j=0;j<contenedorFigura;j++){
		for(var i=0;i<contador_denominador;i++){
			$('#figuraDND'+i+'CF'+j).remove();
		}
	}
}

