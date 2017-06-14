$(document).ready(function(){

	/*En este archivo se validan con las flechas los números máximos de contenedores 
	como también los máximos y mínimos en los contenedores. Se agregan y quitan estilos
	del boton 'activado' y 'desactivado' */	
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
		contador_contenedores++;
		$num_max.text(contador_contenedores);
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

	});

	$flecha_quitar_contenedor.click(function(event) {
		contador_contenedores--;
		$num_max .text(contador_contenedores);
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
			

			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
			//$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
		}
		
	});

	$denominador_quitar_btn.click(function(event) {
		
		contador_denominador--;
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
	});
	
});
