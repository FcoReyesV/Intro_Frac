$(document).ready(function(){
	crearContenedorFigura(1);
	$('<div class="figura-rectangulo-horizontal-1">').attr('id','figuraDND0CF0').appendTo('#contenedorFigura0');
	
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

	var contador_figura=1;
	for(var i=0;i<6;i++){
		crearObjetosDraggables(contador_denominador,contador_figura);
		cambiarTamObjetosDraggables(contador_denominador,contador_figura,i);
		contador_figura++;
	}
	
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
		//quitarClaseTamObjetosDraggables(contador_denominador,contador_figura);
		contador_denominador++;
		$denominador_texto .text(contador_denominador);
		creaFiguraDND(contador_denominador,contador_contenedores);
		
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i+1);


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
		//quitarClaseTamObjetosDraggables(contador_denominador,contador_figura);
		contador_denominador--;
		creaFiguraDND(contador_denominador,contador_contenedores);
		
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i+1);

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

function crearObjetosDraggables(contador_denominador,contador_figura){
	
	$('<div class="figura-propiedades figura-rectangulo-horizontal-'+contador_denominador+'"></div>')
	    .attr('id','figura'+contador_figura)
	    .appendTo( '#contenedor-objetos-draggables').draggable( {
		containment: '.bloque-central',
			stack: '#contenedor-objetos-draggables div',
		    cursor: 'move',
		   	revert: true
		});


	    $('#figura'+contador_figura).css({
	    	top: '10px',
	    	right: 10*contador_figura+'px'
	    });    
}

function quitarClaseTamObjetosDraggables(contador_denominador,contador_figura){
	for(var i=0;i<contador_figura;i++)
		$('#figura'+(i+1)).removeClass('figura-rectangulo-horizontal-'+contador_denominador);
}
function cambiarTamObjetosDraggables(contador_denominador,contador_figura,i){
	var tam= 280/contador_denominador;
	$('#figura'+i).css({
		z_index: '4',
		height: '100px',
		width: tam+'px',
  		border: '2px dashed rgb(176,176,176)',
		top: '10px ',
		right: Math.floor(Math.random() * 50) + 15*contador_denominador+'px'
	});;
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
			$('<div class="figura-rectangulo-horizontal-'+contador_denominador+'"> ').attr('id','figuraDND'+i+'CF'+j).appendTo('#contenedorFigura'+j);
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

