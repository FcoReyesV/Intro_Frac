	
	/*Variables globales que controlan el contenido*/
        var nodo_usuario=0;
        var nodo_creados=0;
        var opciones=0;
        var nombre_profesor=$('.usuario-bloque p').text();
        var codigo_contenedor_principal;
        var codigo_contenedor_objetos_draggables;
	var draggables_colocados=0;
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

	var $guardar=$('.guardar-btn');
        var $cargar=$('#cargar');
        var $nuevo=$('#nuevo');
        var $eliminar=$('#eliminar');

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
        verificarUsuario();
$(document).ready(function(){
               
        cargarOption();
        //propiedadesFigura();
        //creaFiguraDND(contador_denominador,contador_contenedores);
	$flecha_agregar_contenedor.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_contenedores++;
		controladorFlechaAgregarContenedor();
		destruirContenedorFigura(contador_contenedores);
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);
		ajustarDraggableContenedorNuevo();
		
	});

	$flecha_quitar_contenedor.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		destruirContenedorFigura(contador_contenedores);
		//contador_contenedores--;
		controladorFlechaQuitarContenedor();
		crearContenedorFigura(contador_contenedores);
		creaFiguraDND(contador_denominador,contador_contenedores);
		ajustarDraggableContenedorRemovido();

	});

	$denominador_agregar_btn.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_denominador++;
		controladorDenominadorAgregarBoton();
		creaFiguraDND(contador_denominador,contador_contenedores);
		
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i);
		
		ajustarDraggableContenedorNuevo();
			
		
	});

	$denominador_quitar_btn.click(function(event) {
		destruirFiguraDND(contador_denominador,contador_contenedores);
		//contador_denominador--;
		controladorDenominadorQuitarBoton();
		creaFiguraDND(contador_denominador,contador_contenedores);
		for(var i=0;i<contador_figura;i++)
			cambiarTamObjetosDraggables(contador_denominador,contador_contenedores,i);
		ajustarDraggableContenedorRemovido();

		
	});

	$numerador_agregar_btn.click(function(event) {
		controladorNumeradorAgregarBoton();
		draggables_colocados++;
		crearObjetosDraggables(contador_denominador,contador_figura);
		agregarDraggable();
		}
	);

	$numerador_quitar_btn.click(function(event) {
		controladorNumeradorQuitarBoton();
		draggables_colocados--;
		quitarDraggable();
	});

	 /*Botones de opciones de la barra lateral izquierda*/
	var $opc1 = $('#opc1');
	var $opc2 = $('#opc2');
	var $opc3 = $('#opc3');
	var $opc4 = $('#opc4');


	$opc1.click(function(event) {
		$('body').attr('name','RH');
                propiedadesFigura();
	});

	$opc2.click(function(event) {
		$('body').attr('name','RV');
                propiedadesFigura();
	});

	$guardar.click(function(event){
                event.preventDefault();
                guardar();
		
	});
        
        $cargar.click(function(event){
            event.preventDefault();
            cargar();
        });
        
        $eliminar.click(function(event){
            removerOption();
            event.preventDefault();
            eliminarTrabajo();
            cargarOption();
            
        });
        
        $nuevo.click(function(event){
            var titulo=prompt("Ingresa un Titulo");
            console.log(titulo);
            event.preventDefault();
            removerOption();
            nuevoTrabajo(titulo);
            cargarOption();
        });
	
});

function crearObjetosDraggables(contador_denominador,contador_figura){
	propiedadesFigura();
 
	$('<div class="figuraDraggable '+figura_propiedades+' '+figura_rectangulo+'-'+contador_denominador+'"></div>')
	    .attr('id','figura'+contador_figura)
	    .attr('lugar','')
	    .appendTo( '#contenedor-objetos-draggables').draggable( {
		containment: '.bloque-central',
			stack: '#contenedor-objetos-draggables div',
		    cursor: 'move',
		   	revert: true
		});

	    $('#figura'+contador_figura).css({
	    	//Si quieres modificar la posicion inicial, solo modifica el valor de las variables 'top_inicial' y 'left_inicial'
	    	top: '10px',//Todos se los draggables creados se crearan uno debajo de otro, paa que no se vean todos feos ahi encimados
	    	right: '0px'//Todos se los draggables creados se crearan uno debajo de otro, paa que no se vean todos feos ahi encimados
	    });      
	    var $figura= $('#figura'+contador_figura);
	    var left= $figura.position().left;//Se obtiene el left inicial
	   	var top= $figura.position().top;//Se obtiene el top inicial
	    $figura.attr('top',top);//Se guarda su posicion en left en cada uno de los elementos
	    $figura.attr('left',left);//Se guarda su posicion en top en cada uno de los elementos
}

function destruirObjetosDraggables(contador_figura){
    for(var i=0;i<contador_figura;i++)
        $('#figura'+i).remove();
    
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
		right: /*Math.floor(Math.random() * 50) + 15*contador_denominador+*/'0px'
	});;

}

function crearContenedorFigura(num_contenedores){
	for(var i=0; i<num_contenedores;i++){
		$('<div class="'+contenedor_figura+'"><div>').attr('id', 'contenedorFigura'+i).appendTo('.contenedor-principal');
                
        }

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
							$(this).attr('ocupado',elemento.attr('id'));//Guardamos el id del cuadro azul, para saber por cual cuadro fue ocupado
							elemento.draggable({
								revert:false//Se quita el revert, para evitar que se regrese el cuadro azul
							}).offset({
								left:$(this).offset().left,//El offset se copia, para que el cuadro azul se ajuste al cuadro punteado
								top:$(this).offset().top
							}).attr('lugar',$(this).attr('id'));//Guardamos el lugar en el que se pone la caja azul, es decir el id de la subcaja punteada
							$(this).attr('name', 'disable');
							controladorNumeradorAgregarBoton();//Actualizamos el numerador
		 					crearObjetosDraggables(contador_denominador,contador_figura);//Creamos una nueva figurita azul
		 					contador_figura++;//Actualizamos el contador de las figuras azules
		 					draggables_colocados++;//Actualizamos que se coloco un nuevo cuadro azul
						}
					},
					out: function(event,ui){
						var elemento=ui.draggable;
						if($(this).attr('ocupado')==elemento.attr('id')){//Verificamos que el cuadro punteado este ocupado, esto para ver si disminuimos o no el contador del numerador
							controladorNumeradorQuitarBoton();//Actualizamos el contador del numerador
							$(this).attr('name', 'enable');	//Habilitamos el cuadro punteado
							$(this).attr('ocupado','');
							draggables_colocados--;//Actualizamos que se quito un draggable
						}
						elemento.draggable({
							revert:function() {//Se restablece un nuevo revert, solo que este no regresara al cuadro punteado, si no al contenedor original, en el que estaba el elemento
								var elemento=$(this);
								var topElemento=$(this).attr('top');//Se recupera la posicion en top que tenia la figura inicialmente
								var leftElemento=$(this).attr('left');//Se recupera la posicion en left que tenia la figura inicialmente
								elemento.animate({top:topElemento,left:leftElemento},'slow')//La animacion es la que genera el efecto de que vuelve la figuara a la posicion inicial
								.attr('lugar','');
							}
						});						
					}
			}).appendTo('#contenedorFigura'+j).attr('ocupado','');
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

function quitarDraggable(){
	for (var j = contador_contenedores-1; j >= 0; j--){
			for (var i = contador_denominador-1; i >=0; i--){
				if($('#figuraDND'+i+'CF'+j).attr('ocupado')!=''){
					var elemento='#'+$('#figuraDND'+i+'CF'+j).attr('ocupado');
					var topElemento=$(elemento).attr('top');//Se recupera la posicion en top que tenia la figura inicialmente
					var leftElemento=$(elemento).attr('left');//Se recupera la posicion en left que tenia la figura inicialmente
					$(elemento).animate({
						top: topElemento,
						left: leftElemento
					},'slow').offset({
						top: topElemento,
						left: leftElemento
					}).attr('lugar','');
					$('#figuraDND'+i+'CF'+j).attr('ocupado','');
					$('#figuraDND'+i+'CF'+j).attr('name','enable');
					i=0;
					j=0;
				}
			}
			
		}
}

function agregarDraggable(){
	for (var j = contador_contenedores-1; j >= 0; j--) {
				for (var i = contador_denominador-1; i >= 0; i--) {
					if($('#figuraDND'+i+'CF'+j).attr('name')=='enable'){
						$('#figura'+contador_figura).animate({//Posicionamos los cuadros azules en los cuadros punteados disponibles
							left: $('#figuraDND'+i+'CF'+j).offset().left - $('#contenedor-objetos-draggables').offset().left +470,
							top: $('#figuraDND'+i+'CF'+j).offset().top - $('#contenedor-objetos-draggables').offset().top
						},'slow').attr('lugar','figuraDND'+i+'CF'+j);
						$('#figuraDND'+i+'CF'+j).attr('name','disable');
						$('#figuraDND'+i+'CF'+j).attr('ocupado','figura'+contador_figura);//Guardamos en el cuadro punteado, el id del cuadro azul que lo ocupo
						contador_figura++;
						return;
					}
					
				}
			
			}
}

function ajustarDraggableContenedorNuevo(){
	for(var i=0;i<contador_figura;i++){
			for (var j = contador_contenedores-1; j >= 0; j--){
				for (var k = contador_denominador-1; k >= 0; k--){
					if($('#figuraDND'+k+'CF'+j).attr('id')==$('#figura'+i).attr('lugar')){//Ya que se eliminan todos las figuras dropabbles y se crean nuevamente, tenemos que agregar nuevamente aquellas figras que ya tenian un lugar asegurado
						$('#figuraDND'+k+'CF'+j).attr('ocupado','figura'+i);
						$('#figuraDND'+k+'CF'+j).attr('name','disable');
						$('#figura'+i).offset({
							left: $('#figuraDND'+k+'CF'+j).offset().left,
							top: $('#figuraDND'+k+'CF'+j).offset().top
						});
					}

				}
			}
		}
}

function ajustarDraggableContenedorRemovido(){
	var colocados=new Array();
	for (var i = 0; i < contador_figura; i++) {//Primero guardamos el indice de los draggables que ya estan colocados
		if($('#figura'+i).attr('lugar')!='' && $('#figura'+i).attr('lugar')!=null ){
			colocados[i]=i;
		}
	}

	for (var i = 0; i < colocados.length; i++) {//Aqui se colocan nuevamente los draggables que su droppable aun no ha sido eliminado
		for (var j = contador_contenedores-1; j >= 0; j--){
			for (var k = contador_denominador-1; k >= 0; k--){
				if($('#figuraDND'+k+'CF'+j).attr('id')==$('#figura'+colocados[i]).attr('lugar')){
					$('#figuraDND'+k+'CF'+j).attr('ocupado','figura'+colocados[i]);
					$('#figuraDND'+k+'CF'+j).attr('name','disable');
					$('#figura'+i).offset({
						left: $('#figuraDND'+k+'CF'+j).offset().left,
						top: $('#figuraDND'+k+'CF'+j).offset().top
					}).attr('lugar',$('#figuraDND'+k+'CF'+j).attr('id'));
					colocados[i]='';
				}
			}
		}
	}

	for (var i = 0; i < colocados.length; i++) {//Se colocan los draggables que su droppable fue eliminado
		for (var j = contador_contenedores-1; j >= 0; j--){
			for (var k = contador_denominador-1; k >= 0; k--){
				if(colocados[i]!=null && colocados[i]!='' && $('#figuraDND'+k+'CF'+j).attr('name')=='enable'){
					$('#figuraDND'+k+'CF'+j).attr('ocupado','figura'+colocados[i]);
					$('#figuraDND'+k+'CF'+j).attr('name','disable');
					$('#figura'+i).offset({
						left: $('#figuraDND'+k+'CF'+j).offset().left,
						top: $('#figuraDND'+k+'CF'+j).offset().top
					}).attr('lugar',$('#figuraDND'+k+'CF'+j).attr('id'));
					colocados[i]='';
				}
			}
		}
	}

	for (var i = 0; i < colocados.length; i++){//En caso de que aun sobren draggables hasta este punto, se devuelven a su lugar de origen
		if(colocados[i]!=null && colocados[i]!=''){
			var elemento='#figura'+colocados[i];
			var topElemento=$(elemento).attr('top');//Se recupera la posicion en top que tenia la figura inicialmente
			var leftElemento=$(elemento).attr('left');//Se recupera la posicion en left que tenia la figura inicialmente
			$(elemento).animate({
				top: topElemento,
				left: leftElemento
			},'slow').offset({
				top: topElemento,
				left: leftElemento
			}).attr('lugar','');
		}
	}


}
    function cargar(){
        destruirFiguraDND(contador_denominador,contador_contenedores);
        destruirContenedorFigura(contador_contenedores);
        destruirObjetosDraggables(contador_figura);
        contador_numerador=0;
            $.ajax({                
                type: "GET",
                url: "../Introduccion_Fracciones/xml/Modulo_Profesor.xml",
                dataType: "xml",
                success:function(xml){
                    var j=0,k=0;
                    $(xml).find("usuario").each(function(){ 
                        if(nombre_profesor==$(this).find("nombre").text()){

                        $(this).find("introduccion").each(function(){
                            $(this).find('creados').each(function(){
                                var $creados=$(this);
                                var titulo=$(this).find('titulo').text();                                
                                if(titulo==$('select option:selected').text()){                                    
                                    nodo_usuario=j;
                                    nodo_creados=k;
                                    //contador_numerador=parseInt($creados.find('contador_numerador').text())-1;
                                    contador_denominador=parseInt($creados.find('contador_denominador').text())-1;
                                    contador_contenedores=parseInt($creados.find('contador_contenedores').text())-1;
                                    contador_figura=parseInt($creados.find('contador_figura').text());
                                    codigo_contenedor_principal=$creados.find('contenedor-principal').text();
                                    codigo_contenedor_objetos_draggables=$creados.find('contenedor-objetos-draggables').text();                                    
                                    $('body').attr('name',$creados.find('tipo').text());//Cambia la forma de la figura
                                    
                                    //console.log(codigo_contenedor_principal);
                                    controladorFlechaAgregarContenedor();
                                    controladorDenominadorAgregarBoton();
                                    //controladorNumeradorAgregarBoton();
                                    
                                    propiedadesFigura();
                                    crearContenedorFigura(contador_contenedores);
                                    creaFiguraDND(contador_denominador,contador_contenedores);
                                    for(var i=0;i<contador_figura;i++){
                                        crearObjetosDraggables(contador_denominador,i);
                                        cambiarTamObjetosDraggables(contador_denominador,contador_figura,i)
                                    }
                                    //var cadena=codigo_contenedor_principal.replace("&lt;","<");
                                    /*codigo_contenedor_principal=cadena;
                                    cadena=codigo_contenedor_principal.replace("&gt;",">");
                                    codigo_contenedor_principal=cadena;*/
                                    //$('.contenedor-principal').html(cadena);
                                    //$('#contenedor-objetos-draggables').append(codigo_contenedor_objetos_draggables);
                                    /*Faltaria agregar el codigo html de contenedor_principal*/
                                    
                                }
                                k++;
                            });
                        });
                    }
                        j++;
                        
                    });
                }
            });
        }
        function guardar(){
            var url="GuardarFracciones";//Ubicacion y nombre del servlet
		$.ajax({ //Metodo para enviar datos al servidor                       
                    type: "POST",//Se enviaran los datos usando el metodo post                 
                    url: "../Introduccion_Fracciones/GuardarFracciones",//a donde se enviaran                     
                    data: {tipo:$('body').attr('name'),titulo:$('option').text(),contador_figura:contador_figura,contador_denominador:contador_denominador,contador_numerador:contador_numerador,contador_contenedores:contador_contenedores,contenedor_principal:$( '.contenedor-principal').html(),contenedor_objetos_draggables:$( '#contenedor-objetos-draggables').html(),nodo_usuario:nodo_usuario,nodo_creados:nodo_creados},
                    success:function(resp){
                        alert("Guardado con exito");
                        console.log(resp);
                    }
                });
        }
        function cargarOption(){
            removerOption();
            $.ajax({ //Metodo para enviar datos al servidor                       
                type: "GET",
                url: "../Introduccion_Fracciones/xml/Modulo_Profesor.xml",
                dataType: "xml",
                success:function(xml){
                    
                    $(xml).find("usuario").each(function(){
                        
                        if(nombre_profesor==$(this).find("nombre").text()){
                        $(this).find("introduccion").each(function(){
                            $(this).find('creados').each(function(){                                
                                $("<option value='' id='opcion"+opciones+"'>"+$(this).find('titulo').text()+"</option>").appendTo('select');
                                
                                opciones++;
                            });
                        });
                    }   
                    });
                }
            });
        }
        function removerOption(){
            
                $('select').children().each(function(){
                    $(this).remove();
                });

        }
        
        function eliminarTrabajo(){
                console.log("Eliminar");
		$.ajax({ //Metodo para enviar datos al servidor                       
                    type: "POST",//Se enviaran los datos usando el metodo post                 
                    url: "../Introduccion_Fracciones/EliminarFracciones",//a donde se enviaran                     
                    data: {nodo_usuario:nodo_usuario,nodo_creados:nodo_creados},
                    success:function(resp){
                        alert("Eliminado");
                        console.log("succes");
                        console.log(resp);
                    }
                });
                location.reload();
        }
        
        function nuevoTrabajo(titulo){
            //console.log(nodo_usuario);
                $.ajax({ //Metodo para enviar datos al servidor                       
                    type: "POST",//Se enviaran los datos usando el metodo post                 
                    url: "../Introduccion_Fracciones/NuevaFraccion",//a donde se enviaran                     
                    data: {titulo:titulo,nodo_usuario:nodo_usuario,nodo_creados:nodo_creados},
                    success:function(resp){
                        alert("Creado");
                        console.log("succes");
                        console.log(resp);
                    }
                });
                location.reload();
        }
        
        function crearUsuario(){
            $.ajax({                
                type: "POST",
                url: "../Introduccion_Fracciones/AgregarProfesor",
                data: {userName:nombre_profesor},
                success:function(resp){
                    console.log();
                }
            });
            
        }
        
        function verificarUsuario(){        
        var bandera=true;
            $.ajax({                
                type: "GET",
                url: "../Introduccion_Fracciones/xml/Modulo_Profesor.xml",
                dataType: "xml",
                success:function(xml){                    
                    $(xml).find("usuario").each(function(){ 
                        if(nombre_profesor==$(this).find("nombre").text()){
                            bandera=false;
                        }
                        
                    });
                    if(bandera){
                        crearUsuario();
                    }
                }
            });
            console.log("bandera "+bandera);
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
		/*if(contador_denominador<contador_numerador){//-------¿Esto para que es?---------	
				contador_numerador--;
				$numerador_texto.text(contador_numerador);	
		}*/
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