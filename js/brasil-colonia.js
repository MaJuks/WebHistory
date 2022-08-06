feather.replace()

function botao_clicado1(){
    if(document.getElementById("botao1").checked){
        var xxx = document.getElementById('div-texto-oculto1').style.display = 'flex';
        var xx = document.getElementById('prego3').style.top = '51.9rem';
        var x = document.getElementById('prego4').style.top = '51.9rem';


    }
    else{
        var xxx = document.getElementById('div-texto-oculto1').style.display = 'none';
        var xx = document.getElementById('prego3').style.top = '37.5rem';
        var x = document.getElementById('prego4').style.top = '37.5rem';


    }
}
function botao_clicado2(){
    if(document.getElementById("botao2").checked){
        var xxx = document.getElementById('div-texto-oculto2').style.display = 'flex';
        


    }
    else{
        var xxx = document.getElementById('div-texto-oculto2').style.display = 'none';
      


    }
}

