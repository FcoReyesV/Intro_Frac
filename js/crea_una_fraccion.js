
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
	

});


//Este contenedor es el que guarda las figuras que se introducen al arrastrar y soltar
function contenedorDraggable($nivel_contador_figura,$nivel){
	$('<div class="figuraDraggable propiedades-contenedores"></div>')
	    .attr({
	    	id: 'figura'+$nivel_contador_figura+'lvl'+$nivel,
	    	name: '0'
	    })
	    .appendTo( '#nivelfnc'+$nivel+' .contenedor-figuras').draggable({
		containment: '.bloque-central',
			stack: '.contenedor-figuras div',
		    cursor: 'move',
		    revert: true
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
		var aux;
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
			contenedorDraggable(aux,nivel);
		}
		if(aux==3){
				$(this).removeClass('agregar-contenedor');
				$(this).addClass('contenedor-completo');
				$(this).attr('disabled', 'true');
		}	
	

	});
}




function droppablesCorrectos(nivel,i){
	var nivel_valor=[3];
	var imagen_figura=[3];
	switch(nivel.charAt(0)){
		case '1':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=1;
		
			imagen_figura[0]="images/alvl1a.png";
			imagen_figura[1]="images/alvl1b.png";
			imagen_figura[2]="images/alvl1c.png";
		break;
		case '2':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=3/5;
			imagen_figura[0]="images/alvl1a.png";
			imagen_figura[1]="images/alvl1b.png";
			imagen_figura[2]="images/alvl2c.png";
		break;
		case '3':
			nivel_valor[0]=2/6;
			nivel_valor[1]=1;
			nivel_valor[2]=1/2;
			imagen_figura[0]="images/alvl3a.png";
			imagen_figura[1]="images/alvl1c.png";
			imagen_figura[2]="images/alvl3c.png";
		break;
		case '4':
			nivel_valor[0]=1/5;
			nivel_valor[1]=1;
			nivel_valor[2]=3/4;
			imagen_figura[0]="images/alvl4a.png";
			imagen_figura[1]="images/alvl1c.png";
			imagen_figura[2]="images/alvl4c.png";
			
		break;
		case '5':
			nivel_valor[0]=2/5;
			nivel_valor[1]=1/4;
			nivel_valor[2]=2/3;
			imagen_figura[0]="images/alvl5a.png";
			imagen_figura[1]="images/alvl5b.png";
			imagen_figura[2]="images/alvl1b.png";
			
		break;
	}

	$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
	.attr('name',nivel_valor[i])
	.css('z-index', '1')
	.droppable({
		accept:'.figuraDraggable',
		drop: function(event,ui){
			var $item=ui.draggable;
			var valor_correcto=parseFloat($(this).attr('name'));
			var valor_item=parseFloat($item.attr('name'));
			//se compara con el valor que toman al agregar los valores
			if(valor_correcto == valor_item){
				var $item=ui.draggable;
				$item.css({"left":""-12, "top":""-12, "bottom":"", "right":"" });
				$item.draggable( 'option', 'revert', false ); 	
				$(this).append($item);
				$item.position({
					my: "left",
					at: "left",
					of: $(this)
				});

				
			} //fin del if que compara si es correcto el valor de la figura arrastrada	
		}
	});

	if(nivel.charAt(1)=='a'){
		$('#correcto'+i+'lvl'+nivel).css('background-image', 'url('+imagen_figura[i]+')');
	}else{
		//$('#correcto'+i+'lvl'+nivel).css('background-image', 'url(../images/myimage.jpg)');
	}


}


function crearFigurasDraggables(nivel){
		switch(nivel){
			case '1a':
				$('<div id="fig1'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					$('<div id="draggable'+i+'alvl'+nivel+'" name="1" class="figuras-draggables rectangulo-1"></div>').css('background-color', 'rgb(60,134,174)').appendTo('#fig1'+nivel)
					
					.draggable( {
						containment: '.bloque-central',
						stack: '#contenedor-manejable-'+nivel,
					    cursor: 'move',
					   	revert: true
					});
					$('#draggable'+i+'alvl'+nivel).css({
						bottom: i*5,
						right: i*5
					});

				}
				
				
				$('<div id="fig2'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<2;i++){
					$('<div id="draggable'+i+'blvl'+nivel+'" name="0.5" class="figuras-draggables rectangulo-2"></div>').css('background-color', 'rgb(60,134,174)').appendTo('#fig2'+nivel)
					.draggable( {
						containment: '.bloque-central',
						stack: '#contenedor-manejable-'+nivel,
					    cursor: 'move',
					   	revert: true
					});
					$('#draggable'+i+'blvl'+nivel).css({
						bottom: i*5,
						right: i*5
					});
				}
				
				
				$('<div id="fig3'+nivel+'" class="contenedor-draggables"></div>').appendTo('#contenedor-manejable-'+nivel);
				for(var i=0;i<3;i++){
					$('<div id="draggable'+i+'clvl'+nivel+'" name="0.3333333333333333" class="figuras-draggables rectangulo-3"></div>').css('background-color', 'rgb(60,134,174)').appendTo('#fig3'+nivel)
					.draggable({
						containment: '.bloque-central',
						stack: '#contenedor-manejable-'+nivel,
					    cursor: 'move',
					   	revert: true
					});
					$('#draggable'+i+'clvl'+nivel).css({
						bottom: i*5,
						right: i*5
					});
				}

			break;
			case '2a':
			break;
			case '3a':
			break;
			case '4a':
			break;
			case '5a':
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



function contenedorFuncionNivel(nivel){
	$('<div class="contenedor-funcion"></div>').attr('id', 'nivelfnc'+nivel).appendTo('.bloque-central');
	$('<div class="contenedor-figuras"></div>').appendTo('#nivelfnc'+nivel);
	$('<div id="contenedor-manejable-'+nivel+'" class="contenedor-manejables"><button  id="agregarContenedor'+nivel+'" class="agregar-contenedor" title="Agregar nuevo contenedor"><span class="glyphicon glyphicon-plus"></span></button></div>').appendTo('#nivelfnc'+nivel);
	$('<div id="contenedor-droppable-'+nivel+'" class="contenedor-droppables"></div><button class="btn btn-primary reiniciar">Reiniciar</button>').appendTo('#nivelfnc'+nivel);
	
	for(var i=0;i<3;i++){
		droppablesCorrectos(nivel,i);
	}
	crearFigurasDraggables(nivel);

}


function nivel1a(nivel){

}