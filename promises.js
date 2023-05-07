// Criação de promessa e validando usando jquery
$(document).ready(function(){

    const nome = 'admin'

    $('form').submit(function(e) {
        e.preventDefault();

        var pass = false
        if($('input[name="nome"]').val() === nome){
            pass = true
        }else {
            pass = false
        }

        const myPromise = new Promise((resolve,reject) => {
            if(pass === true){
                resolve('Usuário permitido')
            }else{
                reject('Usuário não permitido')
                $('resultado').html('<p class="alert alert-danger">Usuário não permitido</p>'); ' '
            }
        })

        myPromise.then((data) => {
            console.log(data)
        })

    })
    
});
