
//Variables para manejar los niveles

var $nivel_a=[];
var $nivel_b=[];
var $nivel_a_contador_figura=[];
var $nivel_b_contador_figura=[];
var $nivel_a_correctos=[];
var $nivel_b_correctos=[];
var figuraObtenidaOpc;

for(var i=1;i<=5;i++){
	$nivel_a[i]=$('#nivel'+i+'a');
	$nivel_b[i]=$('#nivel'+i+'b');
	$nivel_a_contador_figura[i]=0;
	$nivel_b_contador_figura[i]=0;
	$nivel_a_correctos[i]=0;
	$nivel_b_correctos[i]=0;
}

$(document).ready(function() {
	$('#regresarMenu').hide();

	$nivel_a[1].click(function() {
		//Primero comprobamos que exista en el DOM el nivel, sino lo crea
		if(!$('#nivelfnc1a').length){
			contenedorFuncionNivel('1a');	
		}
		mostrarAreaPrincipal(1,'1a');
		agregarContenedor('1a');
		
		
	});

	$nivel_a[2].click(function() {
		if(!$('#nivelfnc2a').length){
			contenedorFuncionNivel('2a');	
		}
		mostrarAreaPrincipal(2,'2a');
		agregarContenedor('2a');
	});

	$nivel_a[3].click(function() {
		if(!$('#nivelfnc3a').length){
			contenedorFuncionNivel('3a');	
		}
		mostrarAreaPrincipal(3,'3a');
		agregarContenedor('3a');
	});
	$nivel_a[4].click(function() {
		if(!$('#nivelfnc4a').length){
			contenedorFuncionNivel('4a');	
		}
		mostrarAreaPrincipal(4,'4a');
		agregarContenedor('4a');
	
	});
	$nivel_a[5].click(function() {
		if(!$('#nivelfnc5a').length){
			contenedorFuncionNivel('5a');	
		}
		mostrarAreaPrincipal(5,'5a');
		agregarContenedor('5a');
		
	});
	$nivel_b[1].click(function() {
		if(!$('#nivelfnc1b').length){
			contenedorFuncionNivel('1b');	
		}
		mostrarAreaPrincipal(1,'1b');
		agregarContenedor('1b');
	});
	$nivel_b[2].click(function() {
		if(!$('#nivelfnc2b').length){
			contenedorFuncionNivel('2b');	
		}
		mostrarAreaPrincipal(2,'2b');
		agregarContenedor('2b');
	});
	$nivel_b[3].click(function() {
		if(!$('#nivelfnc3b').length){
			contenedorFuncionNivel('3b');	
		}
		mostrarAreaPrincipal(3,'3b');
		agregarContenedor('3b');
	});
	$nivel_b[4].click(function() {
		if(!$('#nivelfnc4b').length){
			contenedorFuncionNivel('4b');	
		}
		mostrarAreaPrincipal(4,'4b');
		agregarContenedor('4b');
	});
	$nivel_b[5].click(function() {
		if(!$('#nivelfnc5b').length){
			contenedorFuncionNivel('5b');	
		}
		mostrarAreaPrincipal(5,'5b');
		agregarContenedor('5b');
	});
	
	nivelesCompletos();
	regresarMenu();
	removerElementoCorrecto();
	removerDraggable();
	reiniciarNivel();
	agregarObjetosArrastrables();
	agregarObjetosCorrectos();
    guardarCambios();
    cargarCambiosOption();
    cargarCambios();
    
	
	
});

function regresarMenu(){
	$('#regresarMenu').click(function() {
		nivelesCompletos();
		for(var i=1;i<=5;i++){
			$('#nivelfnc'+i+'a').hide();
			$('#nivelfnc'+i+'b').hide();
		}
		
		$('#contenedor-niveles').fadeIn(800);
		$('.encabezado-titulo').text("Crear una Fracción");
		$('#regresarMenu').hide();
		$('body').css('cursor', 'auto');

		
		
	});
}




//Este contenedor es el que guarda las figuras que se introducen al arrastrar y soltar
function contenedorDraggable($nivel_contador_figura,$nivel){

	$('<div class="figuraDraggable propiedades-contenedores"></div>')
	    .attr({
	    	id: 'figura'+$nivel_contador_figura+'lvl'+$nivel,
	    	name: '0'
	    })
	    .appendTo( '#nivelfnc'+$nivel+' .contenedor-figuras').draggable({
		containment: '.bloque-central',
			
		    cursor: 'move',
		    revert: true,
		    zIndex: 1
		})
		.droppable({
			accept: '.figuras-draggables', //son los ractangulos que se agregan
			drop: function(event,ui){
				var $item=ui.draggable;
				var valor_contenedor=parseFloat($(this).attr('name'));
				var valor_draggable=parseFloat($item.attr('name'));
				
				valor_contenedor+=valor_draggable;
				$(this).attr('name', valor_contenedor); //Le asigname el valor del draggable que se colocó 
				//Se hace la comparación para que el contenedor solo acepte un entero
				if(valor_contenedor<=1){
					var $remover_bloque=$('<button class="remover-draggable"><span title="Remover figura" class="glyphicon glyphicon-remove"></span></button>');

					$item.append($remover_bloque);

					//Se agrega un subbloque para que se orden de manera horizontal. Es necesario porque la posicion de los originales es absolute.
					switch($item.width()+2){
						case 150:
							$('<div class="rectangulo-1"></div>').css({
								backgroundColor: 'none',
								position: 'relative'
							})
							.appendTo($(this)).append($item.css({
								top: '',
								left: ''
							}));

						break;
						case 75:
							$('<div class="rectangulo-2"></div>').css({
								backgroundColor: 'none',
								position: 'relative'
							})
							.appendTo($(this)).append($item.css({
								top: '',
								left: ''
							}));
						break;
						case 50:
							$('<div class="rectangulo-3"></div>').css({
								backgroundColor: 'none',
								position: 'relative'
							})
							.appendTo($(this)).append($item.css({
								top: '',
								left: ''
							}));
						break;
						case 37.5:
							$('<div class="rectangulo-4"></div>').css({
								backgroundColor: 'none',
								position: 'relative'
							})
							.appendTo($(this)).append($item.css({
								top: '',
								left: ''
							}));
						break;
						case 30:
							$('<div class="rectangulo-5"></div>').css({
									backgroundColor: 'none',
									position: 'relative'
								})
								.appendTo($(this)).append($item.css({
									top: '',
									left: ''
							}));
						break;
						case 25:
							$('<div class="rectangulo-6"></div>').css({
									backgroundColor: 'none',
									position: 'relative'
								})
								.appendTo($(this)).append($item.css({
									top: '',
									left: ''
							}));
						break;
					}	//Fin del switch
					$item.draggable( 'option', 'revert', false );
					$item.position({
						my: "left",
						at: "left",
						of: $(this)
					});

					
				}//Fin del if que acepta solo un entero
				else{
					valor_contenedor-=valor_draggable;
					$(this).attr('name', valor_contenedor);
				}

			}//Fin de la función anónima del drop


		});
}


//Este contenedor es el que guarda las figuras que se introducen al arrastrar y soltar de los niveles 'b'
function contenedorDraggableB($nivel_contador_figura,$nivel){
	var $numerador=$('<div class="numerador"></div>')
	.attr({
		id: 'num'+$nivel_contador_figura+'lvl'+$nivel,
		name: '0'
	});
	var $denominador=$('<div id class="denominador"></div>')
	.attr({
		id: 'den'+$nivel_contador_figura+'lvl'+$nivel,
		name: '0'
	});
	$('<div class="figuraDraggable propiedades-contenedoresB"></div>')
	.attr({
	    	id: 'figura'+$nivel_contador_figura+'lvl'+$nivel,
	    	name: '0'
	})
	.append($numerador,$denominador)
	.appendTo( '#nivelfnc'+$nivel+' .contenedor-figuras')
	.draggable({
			containment: '.bloque-central',
		    cursor: 'move',
		    revert: true,
		    zIndex: 1
	});

	//Droppable del numerador
	$('#num'+$nivel_contador_figura+'lvl'+$nivel)
		.droppable({
			accept: '.figuras-draggables', //son los ractangulos que se agregan
			drop: function(event,ui){
				var $item=ui.draggable;
				//Condicion para aceptar solo una figura
				if($(this).is(':empty')){
					var $remover_bloque=$('<button class="remover-draggable"><span title="Remover figura" class="glyphicon glyphicon-remove"></span></button>');
					$item.append($remover_bloque);
					
					//Obtenemos los valores del objeto que se depositó y del denominador
					var numerador=parseFloat($item.attr('name'));
					var denominador=parseFloat($(this).siblings().attr('name'));
					$(this).attr('name', numerador);
					var resultado=parseFloat(numerador/denominador);
					//El resultado se guarda en la caja padre que es la que compara con los bloques correctos
					$(this).parent().attr('name', resultado);

					$item.appendTo($(this))
					.css({
						top: '',
						left: '',
						borderBottom: '2px solid black'
					}).draggable( 'option', 'revert', false );
						$item.position({
							my: "left",
							at: "left",
							of: $(this)
					});
				
				} //fin de la condicion que acepta solo un objeto

			}//Fin de la función anónima del drop
		});


		//Droppable del denominador
		$('#den'+$nivel_contador_figura+'lvl'+$nivel)
		.droppable({
			accept: '.figuras-draggables', //son los ractangulos que se agregan
			drop: function(event,ui){
				var $item=ui.draggable;
				//Condicion para aceptar solo una figura
				if($(this).is(':empty')){
					var $remover_bloque=$('<button class="remover-draggable"><span title="Remover figura" class="glyphicon glyphicon-remove"></span></button>');
					$item.append($remover_bloque);
					
					//Obtenemos los valores del objeto que se depositó y del numerador
					var numerador=parseFloat($(this).siblings().attr('name'));
					var denominador=parseFloat($item.attr('name'));
					$(this).attr('name', denominador);
					var resultado=parseFloat(numerador/denominador);
					//El resultado se guarda en la caja padre que es la que compara con los bloques correctos
					$(this).parent().attr('name', resultado);
					$item.appendTo($(this))
					.css({
						top: '',
						left: ''
					}).draggable( 'option', 'revert', false );
					$item.position({
							my: "left",
							at: "left",
							of: $(this)
					});
				
				}//Fin del if para aceptar solo una figura

			}//Fin de la función anónima del drop
		});
}





function mostrarAreaPrincipal(nivel,niveltipo){
	$('#contenedor-niveles').fadeOut(600,function(){
		$('#nivelfnc'+niveltipo).fadeIn(600);
		$('.encabezado-titulo').text("Nivel "+nivel);
		$('#regresarMenu').show();
	});	
}


function agregarContenedor(nivel){
	$(document).on('click', '#agregarContenedor'+nivel, function() {
	
		var aux; //Variable auxiliar para controlar los contadores
		//Controlamos los contadores de cada figura creada en cada nivel
		if(nivel.charAt(1)=='a'){

				for(var i=1;i<=5;i++){
					if(parseInt(nivel.charAt(0))==i){
						$nivel_a_contador_figura[i]++;
						aux=$nivel_a_contador_figura[i];
						
					}
				}
		}else{
			for(var i=1;i<=5;i++){
				if(parseInt(nivel.charAt(0))==i){
					$nivel_b_contador_figura[i]++;
					aux=$nivel_b_contador_figura[i];
						
				}
			}
		}

		
		if(aux<=3){
			$(this).parent().siblings('.contenedor-figuras').css('background-image', 'none');
			//Separamos los contenedores draggables-droppables dependiendo si es nivel 'a' o 'b'
			if($(this).attr('id').slice(18,19)=='a')
				contenedorDraggable(aux,nivel);
			else	
				contenedorDraggableB(aux,nivel);
		}
		if(aux==3){
				$(this).removeClass('agregar-contenedor');
				$(this).addClass('contenedor-completo');
				$(this).prop('disabled', true);
		}	

		if($(this).parent().siblings('.contenedor-figuras').is(':empty')){
			for(var i=1;i<=5;i++){
				$nivel_a_contador_figura[i]=0;
				$nivel_b_contador_figura[i]=0;
			}
			
		}
	

	});
}




function droppablesCorrectos(nivel,i,tam_numerador,tam_denominador,figuraObtenidaOpc){
	var nivel_valor=tam_numerador/tam_denominador;
	var nivel_valorb=[1/3,2/3,1/2,1/4,2/4,4/5,2/6,4/6,1/6,1,4/4,6/9,1/4,3/3];	
	
	if(nivel.charAt(1)=='a'){
		$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
		.attr('name',nivel_valor); 
		$('<div class="numerador-droppable"></div>').text(tam_numerador).appendTo('#numero-droppable-'+nivel);
		$('<div class="denominador-droppable"></div>').text(tam_denominador).appendTo('#numero-droppable-'+nivel);		
	}else{
		$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
		.attr('name',nivel_valorb[figuraObtenidaOpc])
		.css('background-image', 'url("images/'+figuraObtenidaOpc+'.png")');
	}

	$('#correcto'+i+'lvl'+nivel).css('z-index', '1').droppable({
		accept:'.figuraDraggable',
		drop: function(event,ui){
			var $item=ui.draggable;
			var valor_correcto=parseFloat($(this).attr('name'));
			var valor_item=parseFloat($item.attr('name'));
			$item.css('z-index', '1');
			//Se compara con el valor que toman al agregar los valores si está vacío true y sino false

			if(valor_correcto == valor_item && $(this).is(':empty')){


				if(nivel.charAt(1)=='a'){	
					$item.droppable('disable');
					//Aumentamos los niveles correctos;
					$nivel_a_correctos[parseInt(nivel.charAt(0))]++;
					
					//Si son 3 quiere decir que ya se ha ganado el nivel
					if($nivel_a_correctos[parseInt(nivel.charAt(0))]==3){
						
						var $ganador=$('<div></div>').addClass('nivel-completo');
						var $texto=$('<div class="texto-nivel-completo">¡Nivel completado!</div>');
						$(this).parent().siblings('.contenedor-figuras').append($ganador.hide(),$texto.hide());
						$ganador.fadeIn(800);
						$texto.fadeIn(800);
						$('body').css('cursor', 'default');
					}
				}
				else{
					$item.children().each(function() {
						$(this).droppable('disable');
					});
					//también en los niveles b se aumentan los correctos
					$nivel_b_correctos[parseInt(nivel.charAt(0))]++;
					if($nivel_b_correctos[parseInt(nivel.charAt(0))]==3){
						var $ganador=$('<div></div>').addClass('nivel-completo');
						var $texto=$('<div class="texto-nivel-completo">¡Nivel completado!</div>');
						$(this).parent().siblings('.contenedor-figuras').append($ganador.hide(),$texto.hide());
						$ganador.fadeIn(800);
						$texto.fadeIn(800);
						$('body').css('cursor', 'default');
					}
					
				} 

				var $remover_bloque=$('<button class="remover-bloque"><span title="Remover bloque" class="glyphicon glyphicon-remove"></span></button>');

				$item.append($remover_bloque);

				$item.children().children().each(function() {
					$(this).children('.remover-draggable').remove();
				});

				$item.css({"left":""-12, "top":""-12, "bottom":"", "right":"" });
				$item.draggable( 'option', 'revert', false ); 	
				$(this).append($item);
				$item.position({
					my: "left",
					at: "left",
					of: $(this)
				});
			
				
			
				
			} //fin del if que compara si es correcto el valor de la figura arrastrada	

		},//fin de la funcion anonima del droppable
		over:function(event,ui){
			ui.draggable.css('z-index', '1');
		}

	});

}





function crearFigurasDraggables(tam_denominador,num_draggables,nivel,numero_divs,color){
		if(nivel.charAt(1)=='a'){
			for(var i=0;i<num_draggables;i++){
				figura(nivel,i,'#fig'+numero_divs+nivel,color,tam_denominador);
			}
		}else{	
			for(var i=0;i<num_draggables;i++){
				figuraNivelB(nivel,i,'#fig'+numero_divs+nivel,tam_denominador);	
			}
		}
		
}

//Funciones para crear las figuras draggables que se depositan en el bloque
function figura(nivel,i,appendPadre,color,tam_denominador){
	var valor= 1/tam_denominador;
	$('<div name="'+valor+'" class="figuras-draggables rectangulo-'+tam_denominador+'"></div>')
		.css({
			backgroundColor: color,
			bottom: i*5,
			right: i*5
		})
		.appendTo(appendPadre)
		.draggable( {
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
}


function figuraNivelB(nivel,i,appendPadre,tam_denominador){
	$('<div id="draggable'+i+'flvl'+nivel+'num'+tam_denominador+'" name="'+tam_denominador+'" class="figuras-draggables figuras-numeros"></div>')
	.text(tam_denominador).css({
		bottom: 20+i*5,
		right: 30+i*5
	})
	.appendTo(appendPadre)
	.draggable({
		containment: '.bloque-central',
		cursor: 'move',
		revert: true
	});
}


function contenedorFuncionNivel(nivel){
	//contenedor de funciones
	$('<div class="contenedor-funcion"></div>').attr('id', 'nivelfnc'+nivel).appendTo('.bloque-central');
	//contenedor de figuras 
	$('<div class="contenedor-figuras"></div>').appendTo('#nivelfnc'+nivel);
	//Contenedor de figuras draggables
	$('<div id="contenedor-manejable-'+nivel+'" class="contenedor-manejables"><button  id="agregarContenedor'+nivel+'" class="agregar-contenedor" title="Agregar nuevo contenedor"><span class="glyphicon glyphicon-plus"></span></button></div>').appendTo('#nivelfnc'+nivel);
	//Contenedor de figuras correctas
	$('<div id="contenedor-droppable-'+nivel+'" class="contenedor-droppables"></div><button title="Reiniciar nivel" class="reiniciar"><span class="glyphicon glyphicon-refresh"></span></button>').appendTo('#nivelfnc'+nivel);
	//Numero en fraccion de las figuras correctas
	$('<div id="numero-droppable-'+nivel+'" class="numeros-droppables"></div>').appendTo('#nivelfnc'+nivel);

	//Creamos el agregar caja pora cada nivel
	$('<button type="button"  data-toggle="modal" data-target="#agregarArrastrable'+nivel+'" title="Agregar contenido arrastrable" class="btn-agregar-contenedor-arrastrable"></button>').appendTo('#nivelfnc'+nivel);
	//Boton para agregar los contenedores correctos con su respectivo modal asignado
	$('<button type="button" data-toggle="modal" data-target="#agregarCorrecto'+nivel+'" title="Agregar contenedores correctos" class="btn-agregar-contenedor-correcto"></button>').appendTo('#nivelfnc'+nivel);
	//Boton para mostrar lo guardado por el usuario
	$('<button id="mostrarCreadosbtn'+nivel+'" type="button" data-toggle="modal" data-target="#mostrarCreados'+nivel+'" title="Mostrar creados" class="btn-mostrar-creados btn btn-primary">Mostrar <br/>creados</button>').appendTo('#nivelfnc'+nivel);
	//Boton para guardar los cambios hechos por el usuario
	$('<button id="guardar'+nivel+'" type="button" data-toggle="modal"  title="Guardar" data-target="#guardarCambios'+nivel+'"  class="btn-guardar btn btn-primary">Guardar</button>').appendTo('#nivelfnc'+nivel);
	formularioAgregarArrastrable(nivel); 
}
//Modals de boostrap (ventanas emergentes)
function formularioAgregarArrastrable(nivel){
	//Creamos el modal para guardar los cambios 
	$('<div id="guardarCambios'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Guardar cambios</h3></div><div class="modal-body"><form action="" id="formGuardar'+nivel+'" class="formulario-modal" style="display: flex; flex-direction: column;"><label for="nombre_guardado">Nombre a guardar</label><input type="text" name="nombre_guardado" id="nombre_guardado'+nivel+'"></form></div><div class="modal-footer"><button type="submit" class="btn btn-success btn-guardar-Cambios" data-dismiss="modal">Completado</button></div></div></div></div>').appendTo('#nivelfnc'+nivel);
	//Creamos el modal para mostrar los guardados
	$('<div id="mostrarCreados'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Cargar creados</h3></div><div class="modal-body"><form id="formularioCargar'+nivel+'" class="formulario-modal" style="display: flex; flex-direction: column;"><label for="selectCreados">Seleccionar contenido creado</label><select></select></form></div><div class="modal-footer"><button type="submit" class="btn btn-success btn-cargar-Cambios" data-dismiss="modal">Completado</button></div></div></div></div>').appendTo('#nivelfnc'+nivel);

	if(nivel.charAt(1)=='a'){
		//Creamos los modals para los niveles 'a' 
		$('<div id="agregarArrastrable'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Figuras arrastrables</h3></div><div class="modal-body"><form class="formulario-modal" style="display: flex; flex-direction: column;"><label for="tam_denominador">Tamaño del denominador</label><input type="number" name="tam_denominador" id="tam_denominador'+nivel+'" min="1" max="6" value="1"><label for="num_draggables">Número de figuras arrastrables</label><input type="number" name="num_draggables" value="1" id="num_draggables'+nivel+'" min="1" max="4" ><label for="color_draggable">Color de la figura</label><input type="color" name="color_draggable" id="color_draggable'+nivel+'" value="#ffffff"></form></div><div class="modal-footer"><button type="submit" class="btn btn-success btn-agregar-draggables" data-dismiss="modal">Completado</button></div></div></div></div> ').appendTo('#nivelfnc'+nivel);
		$('<div id="agregarCorrecto'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Contenedores correctos</h3></div><div class="modal-body"><form id="form'+nivel+'" class="formulario-modal" style="display: flex; flex-direction: column;"><label for="tam_numerador">Tamaño del numerador</label><input type="number" name="tam_numerador" id="tam_numerador'+nivel+'" value="1" min="1" max="6"><label for="tam_denominador">Tamaño del denominador</label><input type="number" value="1" name="tam_denominador" id="tam_denominador'+nivel+'" min="1" max="6"></form></div><div class="modal-footer"><button type="button" class="btn btn-success btn-agregar-correctos" data-dismiss="modal">Completado</button></div></div></div></div> ').appendTo('#nivelfnc'+nivel);
	}
	else{
		//Modals para niveles 'b'
		$('<div id="agregarArrastrable'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Figuras arrastrables</h3></div><div class="modal-body"><form class="formulario-modal" style="display: flex; flex-direction: column;"><label for="tam_denominador">Número de la tarjeta</label><input type="number" name="tam_denominador" id="tam_denominador'+nivel+'" min="1" max="6" value="1"><label for="num_draggables">Número de figuras arrastrables</label><input type="number" name="num_draggables" value="1" id="num_draggables'+nivel+'" min="1" max="4"></form></div><div class="modal-footer"><button type="button" class="btn btn-success btn-agregar-draggables" data-dismiss="modal">Completado</button></div></div></div></div> ').appendTo('#nivelfnc'+nivel);
		$('<div id="agregarCorrecto'+nivel+'" class="modal fade" role="dialog"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h3 class="modal-title">Contenedores correctos</h3></div><div class="modal-body"><form id="form'+nivel+'" class="formulario-modal" style="display: flex; flex-direction: column;"><label for="selector-images">Seleccione una figura</label><select id="selector-images'+nivel+'" name="selector-images"></select></form></div><div class="modal-footer"><button type="button" class="btn btn-success  btn-agregar-correctos" data-dismiss="modal">Completado</button></div></div></div></div> ').appendTo('#nivelfnc'+nivel);
		

		//Dropdown que despliega las figuras que el usuario elige
		for(var i=0;i<15;i++){
			var $option=$('<option value="'+i+'" data-imagesrc="images/'+i+'.png"> </option>');
			$option.appendTo('#selector-images'+nivel);

		}
		$('#selector-images'+nivel).ddslick({
		onSelected: function(data){
			 figuraObtenida(data);
		}
	});

	

		$('.formulario-modal ul').css({
			overflowY: 'auto',
			height: '250px',
			width:'150px'
		});

		$('.formulario-modal div.dd-select').css({
			width:'150px'
		});

	}
}

function agregarObjetosArrastrables(){
	$(document).on('click', '.btn-agregar-draggables', function() {
		
		var $formulario=$(this).parent().siblings('.modal-body').children('form');
		var nivel=$formulario.children('input[name=tam_denominador]').attr('id').slice(15, 17);
		var tam_denominador=parseInt($formulario.children('input[name=tam_denominador]').val());
		var num_draggables=parseInt($formulario.children('input[name=num_draggables]').val());
		var numero_divs=0;
		//Contamos el numero de divs dentro del manejador de draggables y ese numero se le asignara como id a la figura contenedora
		$('#contenedor-manejable-'+nivel).children().each(function() {
				numero_divs++;
			});
		

		if(nivel.charAt(1)=='a'){
			
			var color=$formulario.children('input[name=color_draggable]').val();
			//Comprobamos que no haya más de 3 bloques 
			if($('#contenedor-manejable-'+nivel).children('div.contenedor-draggables').length <3){
					$('<div id="fig'+numero_divs+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel)
					.css('background-image', 'url("images/rect'+tam_denominador+'.png")');
					crearFigurasDraggables(tam_denominador,num_draggables,nivel,numero_divs,color);
			 }else{
			 	alert("Ya no puedes agregar más contenedores arrastrables. El número máximo es tres");
			 }
		
		}else{
			if($('#contenedor-manejable-'+nivel).children('div.contenedor-draggables').length <4){
					$('<div id="fig'+numero_divs+nivel+'" class="contenedor-draggables"></div>').css('background-color', 'rgb(225,225,225)').appendTo('#contenedor-manejable-'+nivel);
					crearFigurasDraggables(tam_denominador,num_draggables,nivel,numero_divs,color);
			 }else{
			 	alert("Ya no puedes agregar más contenedores arrastrables. El número máximo es cuatro");
			 }

		}


	});
}


function figuraObtenida(data){
 	figuraObtenidaOpc= data.selectedData.value;
 	return figuraObtenidaOpc;
}

function agregarObjetosCorrectos(){
	$(document).on('click', '.btn-agregar-correctos', function() {
		
		var $formulario=$(this).parent().siblings('.modal-body').children('form');
		var nivel=$formulario.attr('id').slice(4, 6);
		var tam_numerador=parseInt($formulario.children('input[name=tam_numerador]').val());
		var tam_denominador=parseInt($formulario.children('input[name=tam_denominador]').val());
		var numero_divs=0;
		//Contamos el numero de divs dentro del manejador de correctos y ese numero se le asignara como id al contenedor correcto
	
		if(tam_numerador>tam_denominador){
			alert("El numerador debe ser menor que el denominador");
		}else{
			$('#contenedor-droppable-'+nivel).children().each(function() {
				numero_divs++;
		});
		if(nivel.charAt(1)=='a'){
			
			//Comprobamos que solo se aceptan 3 cajas
			if($('#contenedor-droppable-'+nivel).children('div.droppable-correctos').length <3){
				droppablesCorrectos(nivel,numero_divs,tam_numerador,tam_denominador,figuraObtenidaOpc);
			 }else{
			 	alert("Ya no puedes agregar más contenedores correctos. El número máximo es tres");
			 }
		}else{
			if($('#contenedor-droppable-'+nivel).children('div.droppable-correctos').length <3){
				droppablesCorrectos(nivel,numero_divs,1,1,figuraObtenidaOpc);
			 }else{
			 	alert("Ya no puedes agregar más contenedores correctos. El número máximo es tres");
			 }
		}
		}
		
	});
}


function removerElementoCorrecto(){
	//Como se crean de manera dinámica las 'x', se tiene que buscar en el documento
	$(document).on('click', '.remover-bloque',function() {

		var figura_drag_drop=$(this).parent();
		//Primero vamos a obtener su id para hacerlo de nuevo con las propiedades
		$('.nivel-completo,.texto-nivel-completo').remove();
		var nivel_contador_figura=figura_drag_drop.attr('id').slice(6,7);
		var nivel=figura_drag_drop.attr('id').slice(10,12);
		//De acuerdo al nivel se agrega el contenedor draggable-droppable
		$(this).parent().remove();
		
		if(nivel.charAt(1)=='a'){
			contenedorDraggable(nivel_contador_figura,nivel);
			$nivel_a_correctos[parseInt(nivel.charAt(0))]--;
		}else{
			contenedorDraggableB(nivel_contador_figura,nivel);
			$nivel_b_correctos[parseInt(nivel.charAt(0))]--;
		}
		
		
	});

}

function removerDraggable(){
	$(document).on('click', '.remover-draggable', function() {
		var valor_contenedor=0;
		var $contenedor=$(this).parent().parent().parent();
		var nivel = $contenedor.attr('id').slice(10, 12);
		if(nivel.charAt(1)=='a'){
			$(this).parent().parent().remove();
			//recorremos todas las figuras que se encuentran dentro para obtener su valor
			$contenedor.children().children().each(function() {
				valor_contenedor+=parseFloat($(this).attr('name'));
			});
			
		}else{
			$(this).parent().remove();

		}
		
		$contenedor.attr('name',parseFloat(valor_contenedor));
		
	});
	
}

function reiniciarNivel(){
	$(document).on('click', '.reiniciar', function() {
		var nivel = $(this).siblings('.contenedor-manejables').attr('id').slice(21,23);
		var $manejables=$(this).siblings('.contenedor-manejables');
		var $correctos=$(this).siblings('.contenedor-droppables');
		var $correctosTexto=$(this).siblings('.numeros-droppables');
		//Ocultamos y mostramos de nuevo el contenedor principal 

		if(nivel.charAt(1)=='a'){
			$nivel_a_correctos[parseInt(nivel.charAt(0))]=0;
			
		}else{
			$nivel_b_correctos[parseInt(nivel.charAt(0))]=0;
			
		}
		

		$(this).parent().fadeOut(100, function() {
			//Eliminamos el contenido del DOM que se creó de manera dinámica 
			$(this).children().siblings('.contenedor-figuras').children().remove();
			$(this).children().siblings('.contenedor-manejables').children('.contenedor-completo').prop('disabled', false).removeClass('contenedor-completo').addClass('agregar-contenedor');
			$(this).children().siblings('.contenedor-droppables').children().each(function() {
				$(this).children().remove();
			});
			$manejables.children('.contenedor-draggables').remove();
			$correctos.children().remove();
			$correctosTexto.children().remove();

			$(this).children('.contenedor-figuras').css('background-image', 'url("images/agregar_contenedor.png")');
			$('body').css('cursor', 'auto');
		});

		$(this).parent().fadeIn(1000);
		nivelesCompletos();

	});
}

function nivelesCompletos(){
	//Se recorren los hijos del contenedor de niveles para revisar cuales niveles ya está completos con las variables que controlan estos
	$('#contenedor-niveles').children().each(function() {
		var nivel = $(this).attr('id').slice(5,7);
		var $estrellas = $(this).children('.stars');
		if(nivel.charAt(1)=='a'){

			switch($nivel_a_correctos[parseInt(nivel.charAt(0))]){
				case 0:
					$estrellas.children().css('color', 'rgb(217,210,210)');
				break;
				case 1:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'rgb(217,210,210)');
					$estrellas.children().eq(2).css('color', 'rgb(217,210,210)');

				break;
				case 2:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'yellow');
					$estrellas.children().eq(2).css('color', 'rgb(217,210,210)');
				break;
				case 3:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'yellow');
					$estrellas.children().eq(2).css('color', 'yellow');
				break;
			}
		}else{
			switch($nivel_b_correctos[parseInt(nivel.charAt(0))]){
				case 0:
					$estrellas.children().css('color', 'rgb(217,210,210)');
				break;
				case 1:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'rgb(217,210,210)');
					$estrellas.children().eq(2).css('color', 'rgb(217,210,210)');
				break;
				case 2:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'yellow');
					$estrellas.children().eq(2).css('color', 'rgb(217,210,210)');
				break;
				case 3:
					$estrellas.children().eq(0).css('color', 'yellow');
					$estrellas.children().eq(1).css('color', 'yellow');
					$estrellas.children().eq(2).css('color', 'yellow');
				break;
			}
		}
		
	});
}



function guardarCambios() {

	$(document).on('click', '.btn-guardar-Cambios', function() {
		
		var $formulario=$(this).parent().siblings('.modal-body').children('form');
		var nivel=$formulario.attr('id').slice(11, 13);
		var $contenedoManejable=$('#contenedor-manejable-'+nivel).html();
		var $contenedorDroppable=$('#contenedor-droppable-'+nivel).html();
		var $contenedorNumeros=$('#numero-droppable-'+nivel).html();
		var $nombre_guardado=$formulario.children('input').val();
		var existe=1;
			//Validamos que al menos haya alguna figura y el campo esté lleno
			if(!$('#contenedor-droppable-'+nivel).children('div.droppable-correctos').length || !$('#contenedor-manejable-'+nivel).children('div.contenedor-draggables').length || $nombre_guardado==""){
				if($nombre_guardado=="")
					alert("Escribe un nombre para guardar");
				if(!$('#contenedor-droppable-'+nivel).children('div.droppable-correctos').length)
					alert("Agrega al menos un contenedor correcto");
				if( !$('#contenedor-manejable-'+nivel).children('div.contenedor-draggables').length)
					alert("Agrega al menos un objeto arrastrable");
			 }else{

				//Validamos si existe o no el guardado
				$.ajax({
					type: "GET",
	           		 url: "../Introduccion_Fracciones/xml/Modulo_Profesor_niveles.xml",
	            	dataType: "xml",     
	            	headers: {
				     'Cache-Control': 'no-cache, no-store, must-revalidate', 
				     'Pragma': 'no-cache', 
				     'Expires': '0'
   					},       
	            	success:function(xml){
	                        $(xml).find('usuario').each(function() {
			                if($(this).attr('nombre_usuario')==$('#userName').text()){
			                    $(this).find('nivel_'+nivel).each(function(){
			                        if($nombre_guardado==$(this).find('Nombre_guardado').text()){
			                           existe=2;   
			                         }
			                    }
			                )}
			                
			            });
	                    //Si no existe el nommbre del nivel manda otra petición de ajax y lo crea
						if(existe==1) {
						  $.ajax({
				            type: "POST",
				            url: "../Introduccion_Fracciones/GuardarCrearUnaFiguraAjax",
				            data: {nombre_usuario:$('#userName').text(),nombre_guardado:$nombre_guardado, codigo1:$contenedoManejable, codigo2: $contenedorDroppable,codigo3:$contenedorNumeros,nivel: 'nivel_'+nivel}
				          });
				          alert("Guardado correctamente");
						}else{
							alert("El nombre ya existe");
						}

				   }
				}); 
			}
		
		    
	});
		
}

function cargarCambiosOption() {
	$(document).on('click', '.btn-mostrar-creados', function() {
            var nivel=$(this).attr('id').slice(17,19);
		var $formulario=$('#formularioCargar'+nivel);
        $formulario.children('select').children().remove();
	$.ajax({
            type: "GET",
            url: "../Introduccion_Fracciones/xml/Modulo_Profesor_niveles.xml",
            dataType: "xml", 
            cache:false,
			headers: {
			     'Cache-Control': 'no-cache, no-store, must-revalidate', 
			     'Pragma': 'no-cache', 
			     'Expires': '0'
   			},
            success:function(xml){
                $(xml).find('usuario').each(function() {

                    if($(this).attr('nombre_usuario')==$('#userName').text()){
                        $(this).find('nivel_'+nivel).each(function() {
	                        var $option_cargar=$(this).find('Nombre_guardado').text();
	                        $('<option>'+$option_cargar+'</option>').appendTo($formulario.children('select'));

                        });
                    }
                });
              

            }
         });
	});
}

function cargarCambios(){
    $(document).on('click', '.btn-cargar-Cambios', function() {
                 var $formulario=$(this).parent().siblings('.modal-body').children('form');
                var nivel=$formulario.attr('id').slice(16, 18);
                 var nombre_guardado=$formulario.children('select').val();
                $('#contenedor-manejable-'+nivel).children().remove();
                $('#contenedor-droppable-'+nivel).children().remove();
             	$('#numero-droppable-'+nivel).children().remove();
            $.ajax({
                type: "GET",
                url: "../Introduccion_Fracciones/xml/Modulo_Profesor_niveles.xml",
                dataType: "xml", 
                 cache:false,
                headers: {
			     'Cache-Control': 'no-cache, no-store, must-revalidate', 
			     'Pragma': 'no-cache', 
			     'Expires': '0'
   				},           
                success:function(xml){
                    $(xml).find('usuario').each(function() {

                        if($(this).attr('nombre_usuario')==$('#userName').text()){
                            $(this).find('nivel_'+nivel).each(function() {
                               if(nombre_guardado==$(this).find('Nombre_guardado').text()){
                                  var $codigo1= $(this).find('Codigo1').text();
                                  var $codigo2= $(this).find('Codigo2').text();
                                  var $codigo3= $(this).find('Codigo3').text();

                                  
                                   $('#contenedor-manejable-'+nivel).append($codigo1);
                                   $('#contenedor-droppable-'+nivel).append($codigo2);
                                   $('#numero-droppable-'+nivel).append($codigo3);
                                    

                               }
                                 
                            });
                        }
                    });

    				$('.figuras-draggables').draggable( {
						containment: '.bloque-central',
						cursor: 'move',
						revert: true
					});
         			$('#contenedor-droppable-'+nivel).children().each(function() {
         				$(this).droppable({
						accept:'.figuraDraggable',
						drop: function(event,ui){
							var $item=ui.draggable;
							var valor_correcto=parseFloat($(this).attr('name'));
							var valor_item=parseFloat($item.attr('name'));
							$item.css('z-index', '1');
							//Se compara con el valor que toman al agregar los valores si está vacío true y sino false

							if(valor_correcto == valor_item && $(this).is(':empty')){


								if(nivel.charAt(1)=='a'){	
									$item.droppable('disable');
									//Aumentamos los niveles correctos;
									$nivel_a_correctos[parseInt(nivel.charAt(0))]++;
									
									//Si son 3 quiere decir que ya se ha ganado el nivel
									if($nivel_a_correctos[parseInt(nivel.charAt(0))]==3){
										
										var $ganador=$('<div></div>').addClass('nivel-completo');
										var $texto=$('<div class="texto-nivel-completo">¡Nivel completado!</div>');
										$(this).parent().siblings('.contenedor-figuras').append($ganador.hide(),$texto.hide());
										$ganador.fadeIn(800);
										$texto.fadeIn(800);
										$('body').css('cursor', 'default');
									}
								}
								else{
									$item.children().each(function() {
										$(this).droppable('disable');
									});
									//también en los niveles b se aumentan los correctos
									$nivel_b_correctos[parseInt(nivel.charAt(0))]++;
									if($nivel_b_correctos[parseInt(nivel.charAt(0))]==3){
										var $ganador=$('<div></div>').addClass('nivel-completo');
										var $texto=$('<div class="texto-nivel-completo">¡Nivel completado!</div>');
										$(this).parent().siblings('.contenedor-figuras').append($ganador.hide(),$texto.hide());
										$ganador.fadeIn(800);
										$texto.fadeIn(800);
										$('body').css('cursor', 'default');
									}
									
								} 

								var $remover_bloque=$('<button class="remover-bloque"><span title="Remover bloque" class="glyphicon glyphicon-remove"></span></button>');

								$item.append($remover_bloque);

								$item.children().children().each(function() {
									$(this).children('.remover-draggable').remove();
								});

								$item.css({"left":""-12, "top":""-12, "bottom":"", "right":"" });
								$item.draggable( 'option', 'revert', false ); 	
								$(this).append($item);
								$item.position({
									my: "left",
									at: "left",
									of: $(this)
								});

							} //fin del if que compara si es correcto el valor de la figura arrastrada	

							},//fin de la funcion anonima del droppable
							over:function(event,ui){
								ui.draggable.css('z-index', '1');
							}

						});//fin del .droppable 
         			});
                    
                } //fin del success
             });
	});
}


