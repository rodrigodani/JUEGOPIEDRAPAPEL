var socket= io();

let username = document.getElementById('username');
let escoger = document.getElementById('escoger');
let btn = document.getElementById('send');
let output = document.getElementById('output');


btn.addEventListener('click',function(){
    document.getElementById('escoger').style.display = 'none';
    socket.emit('enviarmensaje',{
        nombre: username.value,
        escogido: escoger.value
    });
});
socket.on('connect', function(){
    console.log('conectado al servidor');
})
socket.on('disconnect', function(){
    console.log('perdimos conexion con el servidor ')
})
//enviar informacion
socket.on('enviarmensaje',function(mensaje){  
    output.innerHTML += `<p>
        <strong>${mensaje.usuario}</strong>:
        <p>${mensaje.respuesta}</p>     
    </p>`
})

