$(document).ready(function(){
    $('#btnSend').click(function(){
        
        var errores = '';
        
        // validar nombre
        
        if( $('#nombres').val() == '' ){
            errores += '<p>Escriba un nombre</p>';
          $('#nombres').css("border-bottom-color","#F14B4B")  
        }
        else{ 
          $('#nombres').css("border-bottom-color", "#000000")
        }
        // validar telefono
        
        if( $('#telefono').val() == ''){
            errores += '<p>Escriba un telefono</p>';
           $('#telefono').css("border-bottom-color","#F14B4B") 
        }
        else{
           $('#telefono').css("border-bottom-color", "#000000")
        }
        // validar correo
        
        if( $('#correo').val() == ''){
            errores += '<p>Escriba un correo</p>';
            $('#correo').css("border-bottom-color","#F14B4B") 
        }
        else{
            $('#correo').css("border-bottom-color", "#000000")  
        }
        // validar comentario
             
         if( $('#comentario').val() == ''){
            errores += '<p>Escriba un comentario</p>';
            $('#comentario').css("border-bottom-color","#F14B4B")
         }else{
            $('#comentario').css("border-bottom-color", "#000000")
         }
        //ENVIAR MENSAJE 
        
         if( errores == '' == false){
            var mensajeError = '<div class="error">'+
                                    '<div class="mensaje_error">'+
                                        '<h3>Errores Encontrados</h3>'+
                                        errores +  
                                        '<span id ="btnCerrar">Cerrar</span>'+
                                    '</div>'+
                                '</div>'
            
            $('body').append(mensajeError);
        }
        
        
        
        $('#btnCerrar').click(function(){
            
            $('.error').remove();   
            
        });
             
        
    });
    
});

