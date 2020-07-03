const {io} = require('../server.js');
var numerocon = []
var mensajers=[]
io.on('connection',(client)=>{
    numerocon.push('us');
    console.log(numerocon.length);
    
    client.on('disconnect',()=>{
        console.log('usuario desconectado');
        numerocon.pop();
        console.log(numerocon.length);
    });

   
   
    client.on ('enviarmensaje',(mensaje, callback)=>{
        mensajers.push(mensaje)
        console.log(mensajers);          
        console.log(mensajers.length);
        if(mensajers.length==2){
            if(mensajers[0].escogido==mensajers[1].escogido){
                io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"empate"});
            }else{
                if(mensajers[0].escogido=='piedra'){
                    if(mensajers[1].escogido=='tijera'){
                        io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[0].nombre});
                    }else{
                        if(mensajers[1].escogido=='papel'){
                            io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[1].nombre});
                        }
                    }
                }else{
                    if(mensajers[0].escogido=='tijera'){
                        if(mensajers[1].escogido=='papel'){
                            io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[0].nombre});
                        }else{
                            if(mensajers[1].escogido=='piedra'){
                                io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[1].nombre});
                            }
                        }
                    }else{
                        if(mensajers[0].escogido=='papel'){
                            if(mensajers[1].escogido=='piedra'){
                                io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[0].nombre});
                            }else{
                                if(mensajers[1].escogido=='tijera'){
                                    io.sockets.emit('enviarmensaje',{usuario:"sever",respuesta:"gano :"+mensajers[1].nombre});
                                }
                            }
                        }
                    }
                }
            }
            mensajers=[]
        }


    });
    

});
