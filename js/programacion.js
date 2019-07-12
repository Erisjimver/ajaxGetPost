
$(document).ready(function() {

	$("#login").submit(function(){
/*
		var datosFormulario={
							usuario:$("#usuario").val(),
							contra:$("#contra").val()
							}
		$.get("login.php",datosFormulario,procesarDatos);

		return false;
*/
		var datosFormulario=$(this).serialize();
		$.get("login.php",datosFormulario,procesarDatos).fail(ProcesarError);

		return false;
		//preventDefault();
 
	});

	function procesarDatos(datos_devueltos){

		if(datos_devueltos=="autorizado"){
			$("#contenidos_externos").html("<p>Usuario correcto. Bienvenido de nuevo </p>");
		}else{
			$("#contenidos_externos").html("<p>Usuario no autorizado. </p>");
		}

	}

	function ProcesarError(){

		var msgError="Opps!! ha ocurrido algo inesperado. Por favor Intentalo mas tarde";

		$("#contenidos_externos").html("<p>"+msgError+"</p>");

	}


});