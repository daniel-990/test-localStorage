jQuery(document).ready(function(event){
    if(localStorage.user1 == null)
    {
    alert('Aun No te Has Registrado');
    location.href="../index.html";  
    }

	cargar();
	function cargar(){
		if(history.forward(1)){
			location.replace("../index.html");
		}
	}

	var atras = $("#boton_atras");
	atras.css({
		marginLeft: '9%',
		marginTop: '-10%',
	});
	var borrar = $("#btn_borrar");
		borrar.css({
		marginLeft: '5%',
	});

borrar.on('touchstart',function(event) {
	borrado();
        // localStorage.removeItem('user1');
        // localStorage.removeItem('mail1');
        // localStorage.removeItem('pass1');
        function borrado(){
        	var alertar = confirm("estas a punto de borrar a \n" +localStorage.user1+'');
        	if (alertar == true){
        		localStorage.clear();
        		location.reload();
        		location.href="index.html";
        	}else{
        		var none = null;
        	}
        }
});
	atras.on('touchstart', function(event){
	alerta();
	function alerta() {
    var alertar = confirm("estas a punto de salir quieres continuar?");
    if (alertar == true) {
        location.href="../index.html";
        localStorage.removeItem('');
        $("h1").text('null');
    }else{
         var none = null;
    }
}
	});

	$("#h1").text('Hola ' + localStorage.user1 +'');
	// document.write('Usas el navegador: '+navigator.appName);
// if (true) {};
});
