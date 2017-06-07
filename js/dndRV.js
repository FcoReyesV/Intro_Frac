	
	/*Variables globales que controlan el contenido*/
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

	/*Propiedades de cada figura*/
	var figura_propiedades;
	var figura_rectangulo;
	var tam_figura;
	var figura_width;
	var figura_height;
	var figura_top;
	var contenedor_figura;


	function propiedadesFigura(){//Se crean figuras
		switch($('body').attr('name')){
			case 'RH':
				figura_propiedades="figura-propiedades";
				figura_rectangulo="figura-rectangulo-horizontal";
				tam_figura=280/contador_denominador;
				figura_height=100;
				figura_width=tam_figura;
				figura_top=10;
				contenedor_figura="contenedor-figura";
			break;
			case 'RV':
				figura_propiedades="figura-propiedadesRV";
				figura_rectangulo="figura-rectangulo-vertical";
				tam_figura=200/contador_denominador;
				figura_width=130;
				figura_height=tam_figura;
				figura_top=-40;
				contenedor_figura="contenedor-figuraRV";
			break;
		}
	}

$(document).ready(function(){
	 propiedadesFigura();
	

	


	//Creamos por defecto un rectangulo que será el contenedor
	crearContenedorFigura(1);
	creaFiguraDND(contador_denominador,contador_contenedores);

	for(var i=0;i<1;i++){
		crearObjetosDraggables(contador_denominador,contador_figura);
		cambiarTamObjetosDraggables(contador_denominador,contador_figura,i);
		contador_figura++;
	}


	$flecha_agregar_contenedor.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_contenedores++;
		controladorFlechaAgregarContenedor();
		destruirContenedorFigura(contador_contenedores);
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);

		
	});

	$flecha_quitar_contenedor.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		destruirContenedorFigura(contador_contenedores);
		//contador_contenedores--;
		controladorFlechaQuitarContenedor();
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);
		
	});

	$denominador_agregar_btn.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_denominador++;
		controladorDenominadorAgregarBoton();
		creaFiguraDND(contador_denominador,contador_contenedores);
		
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i+1);
		

			
		
	});

	$denominador_quitar_btn.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_denominador--;
		controladorDenominadorQuitarBoton();
		creaFiguraDND(contador_denominador,contador_contenedores);
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i+1);
		
	});

	$numerador_agregar_btn.click(function(event) {
		controladorNumeradorAgregarBoton();
		crearObjetosDraggables(contador_denominador,contador_figura);
			for (var j = 0; j < contador_contenedores; j++) {
				for (var i = 0; i < contador_denominador; i++) {
					if($('#figuraDND'+i+'CF'+j).attr('name')=='enable'){
						$('#figura'+contador_figura).animate({
							left: $('#figuraDND'+i+'CF'+j).offset().left - $('#contenedor-objetos-draggables').offset().left +470,
							top: $('#figuraDND'+i+'CF'+j).offset().top - $('#contenedor-objetos-draggables').offset().top
						},'slow').data('lugar','#figuraDND'+i+'CF'+j);
						$('#figuraDND'+i+'CF'+j).attr('name','disable');
						contador_figura++;
						return;
					}
					
				}
			
			}
		}
				

	);

	$numerador_quitar_btn.click(function(event) {
		controladorNumeradorQuitarBoton();
		for (var i=1;i<contador_figura;i++){
			if($('#figura'+i).data('lugar')!=''){
				$($('#figura'+i).data('lugar')).attr('name','enable');
				$('#figura'+i).animate({
					top: $('#figura'+i).data('top'),
					left: $('#figura'+i).data('left')
				},'slow').data('lugar','');
			}
			
		}
		
	});

	 /*Botones de opciones de la barra lateral izquierda*/
	var $opc1 = $('#opc1');
	var $opc2 = $('#opc2');
	var $opc3 = $('#opc3');
	var $opc4 = $('#opc4');


	$opc1.click(function(event) {
		limpiarContenedores();
		reiniciarContadores(contador_contenedores,contador_numerador,contador_denominador,contador_figura);
		inicializarRectanguloHorizontal();
		for(var i=0;i<6;i++){
			crearObjetosDraggables(contador_denominador,contador_figura);
			cambiarTamObjetosDraggables(contador_denominador,contador_figura,i);
			contador_figura++;
		}
	});

	$opc2.click(function(event) {
		limpiarContenedores();
		reiniciarContadores(contador_contenedores,contador_numerador,contador_denominador,contador_figura);
	});
	
});


function crearObjetosDraggables(contador_denominador,contador_figura){
	propiedadesFigura();
 
	$('<div class="figuraDraggable '+figura_propiedades+' '+figura_rectangulo+'-'+contador_denominador+'"></div>')
	    .attr('id','figura'+contador_figura)
	    .data('lugar','')
	    .appendTo( '#contenedor-objetos-draggables').draggable( {
		containment: '.bloque-central',
			stack: '#contenedor-objetos-draggables div',
		    cursor: 'move',
		   	revert: true
		});

	    $('#figura'+contador_figura).css({
	    	top: '10px',
	    	right: 3*contador_figura+'px'
	    });      
	    var $figura= $('#figura'+contador_figura);
	    var left= $figura.position().left;//Se obtiene el left inicial
	   	var top= $figura.position().top;//Se obtiene el top inicial
	    $figura.data('top',top);//Se guarda su posicion en left en cada uno de los elementos
	    $figura.data('left',left);//Se guarda su posicion en top en cada uno de los elementos
}

function cambiarTamObjetosDraggables(contador_denominador,contador_figura,i){
	
	propiedadesFigura();
	if(contador_denominador>1 && figura_propiedades=="figura-propiedadesRV")
		var bottom=10;
	$('#figura'+i).css({
		z_index: '4',
		height: figura_height+'px',
		width: figura_width+'px',
  		border: '2px dashed rgb(176,176,176)',
		bottom: bottom*contador_denominador+'px',
		right: Math.floor(Math.random() * 50) + 15*contador_denominador+'px'
	});;

}

function crearContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++)
		$('<div class="'+contenedor_figura+'"><div>').attr('id', 'contenedorFigura'+i).appendTo('.contenedor-principal');
}
function destruirContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++)
		$('#contenedorFigura'+i).remove();
}

function creaFiguraDND(contador_denominador,contenedorFigura){
	for(var j=0;j<contenedorFigura;j++){
		for(var i=0;i<contador_denominador;i++){
			$('<div class="'+figura_rectangulo+'-'+contador_denominador+'"> ')
				.attr({
					id: 'figuraDND'+i+'CF'+j,
					name: 'enable'
			}).droppable({					
					accept: '.figuraDraggable',//Solo se acepataran las figuras con dicha clase
					drop: function(event,ui){
						if($(this).attr('name')=='enable'){//Verificamos que la caja punteada este disponible
							tolerance: 'fit'//Solo se aceptan si estan adentro por completo las figuras
							var elemento=ui.draggable;
							elemento.draggable({
								revert:false//Se quita el revert, para evitar que se regrese el cuadro azul
							}).offset({
								left:$(this).offset().left,//El offset se copia, para que el cuadro azul se ajuste al cuadro punteado
								top:$(this).offset().top
							}).data('lugar','figuraDND'+i+'CF'+j);//Guardamos el lugar en el que se pone la caja azul, es decir el id de la subcaja punteada
							$(this).attr('name', 'disable');
							controladorNumeradorAgregarBoton();//Actualizamos el numerador
		 					crearObjetosDraggables(contador_denominador,contador_figura);//Creamos una nueva figurita azul
		 					contador_figura++;//Actualizamos el contador de las figuras azules
						}
					},
					out: function(event,ui){
						var elemento=ui.draggable;
						elemento.draggable({
							revert:function() {//Se restablece un nuevo revert, solo que este no regresara al cuadro punteado, si no al contenedor original, en el que estaba el elemento
								var elemento=$(this);
								var topElemento=$(this).data('top');//Se recupera la posicion en top que tenia la figura inicialmente
								var leftElemento=$(this).data('left');//Se recupera la posicion en left que tenia la figura inicialmente
								elemento.animate({top:topElemento,left:leftElemento},'slow')//La animacion es la que genera el efecto de que vuelve la figuara a la posicion inicial
								.data('lugar','');
								controladorNumeradorQuitarBoton();//Actualizamos el contador del numerador
							}
						});
							$(this).attr('name', 'enable');	//Habilitamos el cuadro punteado						
					}
			}).appendTo('#contenedorFigura'+j);
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

/*Controladores de flechas. Estos se actualizan cuando se hacen modificaciones*/

function controladorFlechaAgregarContenedor(){
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
}

function controladorFlechaQuitarContenedor(){
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
}

function controladorDenominadorAgregarBoton(){
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
}

function controladorDenominadorQuitarBoton(){
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
}

function controladorNumeradorAgregarBoton(){
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
}

function controladorNumeradorQuitarBoton(){
		if((contador_numerador-1)>0){
			contador_numerador--;
			$numerador_texto.text(contador_numerador);
			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
			$numerador_quitar_btn.removeAttr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
		}else{
			contador_numerador=0;
			$numerador_texto.text(0);
			$numerador_quitar_btn.attr('disabled','true');
			$numerador_agregar_btn.removeAttr('disabled','true');
			$numerador_quitar_btn.removeClass('add-flecha-btn');
			$numerador_quitar_btn.addClass('add-flecha-btn-desact');
			$numerador_agregar_btn.removeClass('add-flecha-btn-desact');
			$numerador_agregar_btn.addClass('add-flecha-btn');
			
		}
}