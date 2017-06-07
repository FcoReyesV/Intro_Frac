
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


function contenedorFraccionesCorrectas(){
	
}

function contenedorDraggable($nivel_contador_figura,$nivel){
	$('<div class="figuraDraggable propiedades-contenedores"></div>')
	    .attr('id','figura'+$nivel_contador_figura+'lvl'+$nivel)
	    .appendTo( '#nivelfnc'+$nivel+' .contenedor-figuras').draggable( {
		containment: '.bloque-central',
			stack: '.contenedor-figuras div',
		    cursor: 'move',
		   	revert: true
		});
}

function figurasDraggables(){

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
	switch(nivel.charAt(0)){
		case '1':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=1;
		break;
		case '2':
			nivel_valor[0]=1/3;
			nivel_valor[1]=2/3;
			nivel_valor[2]=3/5;
		break;
		case '3':
			nivel_valor[0]=2/6;
			nivel_valor[1]=1;
			nivel_valor[2]=1/2;
		break;
		case '4':
			nivel_valor[0]=1/5;
			nivel_valor[1]=1;
			nivel_valor[2]=3/4;
		break;
		case '5':
			nivel_valor[0]=2/5;
			nivel_valor[1]=1/4;
			nivel_valor[2]=2/3;
		break;
	}

	$('<div class="droppable-correctos"></div>').attr('id', 'correcto'+i+'lvl'+nivel).appendTo('#contenedor-droppable-'+nivel)
	.attr('name',nivel_valor[i])
	.droppable({
		accept:'.figuraDraggable',
		drop: function(nivel,i,event,ui){
			ui.draggable.draggable({
			revert:false//Se quita el revert, para evitar que se regrese el cuadro azul
			}).css({
				left:$(this).position().left,//El offset se copia, para que el cuadro azul se ajuste al cuadro punteado
				top:$(this).position().top
			})
		}
	});
}


function handleDropFigure(nivel,i,event,ui){
	console.log('attr: '+$('#correcto'+i+'lvl'+nivel).attr('name'));
	//se tiene que comparar con el valor que toman al agregar los valores
	/*if($('#correcto'+i+'lvl'+nivel).attr('name')){

	}*/
	
	
	
}


function contenedorFuncionNivel(nivel){
	$('<div class="contenedor-funcion"></div>').attr('id', 'nivelfnc'+nivel).appendTo('.bloque-central');
	$('<div class="contenedor-figuras"></div>').appendTo('#nivelfnc'+nivel);
	$('<div class="contenedor-manejables"><button  id="agregarContenedor'+nivel+'" class="agregar-contenedor" title="Agregar nuevo contenedor"><span class="glyphicon glyphicon-plus"></span></button></div>').appendTo('#nivelfnc'+nivel);
	$('<div id="contenedor-droppable-'+nivel+'" class="contenedor-droppables"></div><button class="btn btn-primary reiniciar">Reiniciar</button>').appendTo('#nivelfnc'+nivel);
	
	for(var i=0;i<3;i++){
		droppablesCorrectos(nivel,i);
	}
		

}