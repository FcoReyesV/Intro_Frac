
//Variables para manejar los niveles

var $nivel_a=[];
var $nivel_b=[];
var $nivel_a_contador_figura=[];
var $nivel_b_contador_figura=[];
for(var i=1;i<=5;i++){
	$nivel_a[i]=$('#nivel'+(i)+'a');
	$nivel_b[i]=$('#nivel'+(i)+'b');
	$nivel_a_contador_figura[i]=0;
	$nivel_b_contador_figura[i]=0;
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
	
	
	
	regresarMenu();
	removerElementoCorrecto();
	removerDraggable();
	reiniciarNivel();

	
});

function regresarMenu(){
	$('#regresarMenu').click(function() {
		
		for(var i=1;i<=5;i++){
			$('#nivelfnc'+i+'a').hide();
			$('#nivelfnc'+i+'b').hide();
		}
		
		$('#contenedor-niveles').fadeIn(800);
		$('.encabezado-titulo').text("Crear una Fracción");
		$('#regresarMenu').hide();
		//console.log("Valor de a[1] "+$nivel_a_contador_figura[1])
		
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



function mostrarAreaPrincipal(nivel,niveltipo){
	$('#contenedor-niveles').fadeOut(600,function(){
		$('#nivelfnc'+niveltipo).fadeIn(600);
		$('.encabezado-titulo').text("Nivel "+nivel);
		$('#regresarMenu').show();
	});	
}


function agregarContenedor(nivel){
	$('#agregarContenedor'+nivel).click(function() {
		
		if($(this).parent().siblings('.contenedor-figuras').is(':empty')){
			for(var i=1;i<=5;i++){
				$nivel_a_contador_figura[i]=0;
				$nivel_b_contador_figura[i]=0;
			}
			
		}
		var aux;
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
			contenedorDraggable(aux,nivel);
		}
		if(aux==3){
				$(this).removeClass('agregar-contenedor');
				$(this).addClass('contenedor-completo');
				$(this).prop('disabled', true);
		}	
	

	});
}




function droppablesCorrectos(nivel,i){
	var nivel_valor=[3];
	var nivel_valorb=[3];
	var imagen_figura=[3];
	var imagen_figurab=[3];
	switch(nivel.charAt(0)){
		case '1':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=1;
			nivel_valorb[0]=1/3;
			nivel_valorb[1]=2/3;
			nivel_valorb[2]=1/2;
		
			imagen_figura[0]="images/alvl1a.png";
			imagen_figura[1]="images/alvl1b.png";
			imagen_figura[2]="images/alvl1c.png";
			imagen_figurab[0]="images/blvl1a.png";
			imagen_figurab[1]="images/blvl1b.png";
			imagen_figurab[2]="images/blvl1c.png";
		break;
		case '2':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=2/5;
			nivel_valorb[0]=1/4;
			nivel_valorb[1]=2/4;
			nivel_valorb[2]=4/5;
			imagen_figura[0]="images/alvl1a.png";
			imagen_figura[1]="images/alvl1b.png";
			imagen_figura[2]="images/alvl2c.png";
			imagen_figurab[0]="images/blvl2a.png";
			imagen_figurab[1]="images/blvl2b.png";
			imagen_figurab[2]="images/blvl2c.png";
		break;
		case '3':
			nivel_valor[0]=2/6;
			nivel_valor[1]=1;
			nivel_valor[2]=1/2;
			nivel_valorb[0]=2/6;
			nivel_valorb[1]=4/6;
			nivel_valorb[2]=1/6;
			imagen_figura[0]="images/alvl3a.png";
			imagen_figura[1]="images/alvl1c.png";
			imagen_figura[2]="images/alvl3c.png";
			imagen_figurab[0]="images/blvl3a.png";
			imagen_figurab[1]="images/blvl3b.png";
			imagen_figurab[2]="images/blvl3c.png";
			
		break;
		case '4':
			nivel_valor[0]=1/5;
			nivel_valor[1]=1;
			nivel_valor[2]=3/4;
			nivel_valorb[0]=1;
			nivel_valorb[1]=4/4;
			nivel_valorb[2]=6/9;
			imagen_figura[0]="images/alvl4a.png";
			imagen_figura[1]="images/alvl1c.png";
			imagen_figura[2]="images/alvl4c.png";
			imagen_figurab[0]="images/blvl4a.png";
			imagen_figurab[1]="images/blvl4b.png";
			imagen_figurab[2]="images/blvl4c.png";
			
		break;
		case '5':
			nivel_valor[0]=2/5;
			nivel_valor[1]=1/4;
			nivel_valor[2]=2/3;
			nivel_valorb[0]=6/9;
			nivel_valorb[1]=1/4;
			nivel_valorb[2]=3/3;
			imagen_figura[0]="images/alvl5a.png";
			imagen_figura[1]="images/alvl5b.png";
			imagen_figura[2]="images/alvl1b.png";
			imagen_figurab[0]="images/blvl5a.png";
			imagen_figurab[1]="images/blvl5b.png";
			imagen_figurab[2]="images/blvl5c.png";
			
		break;
	}

	if(nivel.charAt(1)=='a'){
		$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
		.attr('name',nivel_valor[i])
		.css('background-image', 'url('+imagen_figura[i]+')');
	}else{
		$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
		.attr('name',nivel_valorb[i])
		.css('background-image', 'url('+imagen_figurab[i]+')');
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
				$item.droppable("disable");
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





function crearFigurasDraggables(nivel){
		switch(nivel){
			case '1a':
				//Si no existe el bloque, lo crea
				if(!$('#fig1'+nivel).length)
					$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1(nivel,i,'#fig1'+nivel,'rgb(0,101,144)');
				}
				
				if(!$('#fig2'+nivel).length)
					$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1_2(nivel,i,'#fig2'+nivel,'rgb(0,147,202)');
				}
				
				if(!$('#fig3'+nivel).length)
					$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_3(nivel,i,'#fig3'+nivel,'rgb(153,218,213)');
				}

			break;
			case '2a':
				if(!$('#fig1'+nivel).length)
					$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1_3(nivel,i,'#fig1'+nivel,'rgb(221,88,0)');
				}
				if(!$('#fig2'+nivel).length)
					$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_5(nivel,i,'#fig2'+nivel,'rgb(255,127,39)');
				}
				if(!$('#fig3'+nivel).length)
					$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_6(nivel,i,'#fig3'+nivel,'rgb(255,167,108)');
				}
			break;
			case '3a':
				if(!$('#fig1'+nivel).length)
					$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_3(nivel,i,'#fig1'+nivel,'rgb(163,73,164)');
				}
				if(!$('#fig2'+nivel).length)
					$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_4(nivel,i,'#fig2'+nivel,'rgb(206,101,255)');
				}
				if(!$('#fig3'+nivel).length)
					$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_6(nivel,i,'#fig3'+nivel,'rgb(206,153,255)');
				}

			break;
			case '4a':
				if(!$('#fig1'+nivel).length)
					$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1_2(nivel,i,'#fig1'+nivel,'rgb(225,174,0)');
				}
				if(!$('#fig2'+nivel).length)
					$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_4(nivel,i,'#fig2'+nivel,'rgb(255,203,21)');
				}
				if(!$('#fig3'+nivel).length)
					$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1_5(nivel,i,'#fig3'+nivel,'rgb(255,217,83)');
				}
			break;
			case '5a':
				if(!$('#fig1'+nivel).length)
					$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					figura1_4(nivel,i,'#fig1'+nivel,'rgb(137,176,19)');
				}
				if(!$('#fig2'+nivel).length)
					$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					figura1_5(nivel,i,'#fig2'+nivel,'rgb(163,208,23)');
				}
				if(!$('#fig3'+nivel).length)
					$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<4;i++){
					figura1_6(nivel,i,'#fig3'+nivel,'rgb(191,234,62)');
				}
			break;
			case '1b':
			break;
			case '2b':
			break;
			case '3b':
			break;
			case '4b':
			break;
			case '5b':
			break;
		}
}

//Funciones para crear las figuras draggables que se depositan en el bloque

function figura1(nivel, i,appendPadre,color){
	//Primero verifica si existe o no la figura
	if(!$('#draggable'+i+'alvl'+nivel).length){
		$('<div id="draggable'+i+'alvl'+nivel+'" name="1" class="figuras-draggables rectangulo-1"></div>')
		.css('background-color', color)
		.appendTo(appendPadre)
		.draggable( {
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'alvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}

function figura1_2(nivel,i,appendPadre,color){
	if(!$('#draggable'+i+'blvl'+nivel).length){
		$('<div id="draggable'+i+'blvl'+nivel+'" name="0.5" class="figuras-draggables rectangulo-2"></div>')
		.css('background-color', color)
		.appendTo(appendPadre)
		.draggable({
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'blvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}

function figura1_3(nivel,i,appendPadre,color){
	if(!$('#draggable'+i+'clvl'+nivel).length){
		$('<div id="draggable'+i+'clvl'+nivel+'" name="0.3333333333333333" class="figuras-draggables rectangulo-3"></div>')
		.css('background-color',color)
		.appendTo(appendPadre)
		.draggable({
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'clvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}

function figura1_4(nivel,i,appendPadre,color){
	if(!$('#draggable'+i+'dlvl'+nivel).length){
		$('<div id="draggable'+i+'dlvl'+nivel+'" name="0.25" class="figuras-draggables rectangulo-4"></div>')
		.css('background-color',color)
		.appendTo(appendPadre)
		.draggable({
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'dlvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}
function figura1_5(nivel,i,appendPadre,color){
	if(!$('#draggable'+i+'elvl'+nivel).length){
		$('<div id="draggable'+i+'elvl'+nivel+'" name="0.2" class="figuras-draggables rectangulo-5"></div>')
		.css('background-color',color)
		.appendTo(appendPadre)
		.draggable({
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'elvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}

function figura1_6(nivel,i,appendPadre,color){
	if(!$('#draggable'+i+'flvl'+nivel).length){
		$('<div id="draggable'+i+'flvl'+nivel+'" name="0.166666666666666666" class="figuras-draggables rectangulo-6"></div>')
		.css('background-color',color)
		.appendTo(appendPadre)
		.draggable({
			containment: '.bloque-central',
			cursor: 'move',
			revert: true
		});
		$('#draggable'+i+'flvl'+nivel).css({
			bottom: i*5,
			right: i*5
		});
	}
}



function contenedorFuncionNivel(nivel){
	$('<div class="contenedor-funcion"></div>').attr('id', 'nivelfnc'+nivel).appendTo('.bloque-central');
	$('<div class="contenedor-figuras"></div>').appendTo('#nivelfnc'+nivel);
	$('<div id="contenedor-manejable-'+nivel+'" class="contenedor-manejables"><button  id="agregarContenedor'+nivel+'" class="agregar-contenedor" title="Agregar nuevo contenedor"><span class="glyphicon glyphicon-plus"></span></button></div>').appendTo('#nivelfnc'+nivel);
	$('<div id="contenedor-droppable-'+nivel+'" class="contenedor-droppables"></div><button title="Reiniciar nivel" class="reiniciar"><span class="glyphicon glyphicon-refresh"></span></button>').appendTo('#nivelfnc'+nivel);
	
	for(var i=0;i<3;i++){
		droppablesCorrectos(nivel,i);
	}
	crearFigurasDraggables(nivel);

}


function removerElementoCorrecto(){
	//Como se crean de manera dinámica las flechas, se tiene que buscar en el documento
	$(document).on('click', '.remover-bloque',function() {

		//$(this).siblings().remove();
		var figura_drag_drop=$(this).parent();
		//Primero vamos a obtener su id para hacerlo de nuevo con las propiedades
		
		var nivel_contador_figura=figura_drag_drop.attr('id').slice(6,7);
		var nivel=figura_drag_drop.attr('id').slice(10,12);
		contenedorDraggable(nivel_contador_figura,nivel);
		$(this).parent().remove();
		crearFigurasDraggables(nivel);
		//$(this).remove();

		
	});

}

function removerDraggable(){
	$(document).on('click', '.remover-draggable', function() {
		var valor_contenedor=0;
		var $contenedor=$(this).parent().parent().parent();
		var nivel = $contenedor.attr('id').slice(10, 12);
		$(this).parent().parent().remove();
		//recorremos todas las figuras que se encuentran dentro para obtener su valor
		$contenedor.children().children().each(function() {
			valor_contenedor+=parseFloat($(this).attr('name'));
		});
		$contenedor.attr('name',parseFloat(valor_contenedor));
		crearFigurasDraggables(nivel);
	});
	
}

function reiniciarNivel(){
	$(document).on('click', '.reiniciar', function() {
		var nivel = $(this).siblings('.contenedor-manejables').attr('id').slice(21,23);
	
		//$(this).parent().fadeOut(1000);
		
			

		$(this).parent().fadeOut(100, function() {
			
			$(this).children().siblings('.contenedor-figuras').children().remove();
			agregarContenedor(nivel);
			$(this).children().siblings('.contenedor-manejables').children('.contenedor-completo').prop('disabled', false).removeClass('contenedor-completo').addClass('agregar-contenedor');
			$(this).children().siblings('.contenedor-droppables').children().each(function() {
				$(this).children().remove();
			});
			crearFigurasDraggables(nivel);
			$(this).children('.contenedor-figuras').css('background-image', 'url("images/agregar_contenedor.png")');
			
		});

		$(this).parent().fadeIn(1000);


	});
}

