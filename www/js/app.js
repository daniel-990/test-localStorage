jQuery(document).ready(function(event){

var enviar = $("#boton_enviar");
var borrar = $("#boton_borrar");
var login = $("#boton_login");

// enviar.on('touchstart',function(event) {
enviar.on('touchstart',function(event){
    enviar_datos();
    return false;
    location.reload();
});

function enviar_datos(){
    var user = $("#user").val();
    var mail = $("#mail").val();
    var pass = $("#pass").val();

    if(user == ""){
        alert("por favor llena el campo nombre");
    }else if(mail == ""){
        alert("por favor llena el campo correo");
    }else if(pass == ""){
        alert("por favor llena el campo contraseña");
    }else{
        confirmar(); 
        localStorage.user1 = user;
        localStorage.mail1 = mail;
        localStorage.pass1 = pass;
    }
}
function confirmar() {
    var user2 = $("#user").val();
    var nombre = prompt("por favor confirme su nombre de usuario");
    if (nombre == localStorage.user1) {
      alert("este nombre ya existe escribe otro!");
      location.reload();
    }else if(nombre == ""){
        alert("falta informacion");
        location.reload();
    }else if(nombre !== user2){
        alert("escribe bien la informacion");
        location.reload();
    }else{ 
      mostrar_datos(); 
    }
}
function mostrar_datos(){
    alert("tu resgistro se hizo con exito!!")
    location.href='index.html';
}
borrar.on('touchstart',function(event) {
        // localStorage.removeItem('user1');
        // localStorage.removeItem('mail1');
        // localStorage.removeItem('pass1');
        alert('esta seguro que desea borrar los datos');
        localStorage.clear();
        location.reload();
});
login.on('touchstart', function(event) {
    var usuario = prompt("nombre de usuario");
    if(usuario == undefined){
       alert("error");
       location.href='index.html';
    }else if (usuario == localStorage.user1) {
      contraseña();
    }else if (usuario == "") {
      alert("por favor llenar los campos")
    }else if(prompt() == null){
      location.href='index.html';
      alert("esto esta mal");
    }else if (usuario !== localStorage.user1) {
      alert("este usuario no es valido");
      location.href='index.html';
    };

function contraseña(){
var contraseña = prompt("ingrese su contraseña");
if(contraseña == undefined){
    alert("error");
    location.href='index.html';
}else if (contraseña == localStorage.pass1) {
    alert("vienvenido!")
    location.href='canvas/index.html';
}else if (contraseña == ""){
    alert("por favor llene los campos");
}else if (contraseña !== localStorage.pass1){
    alert("datos incorrectos!");
    location.href='index.html';
};
}
});

});
