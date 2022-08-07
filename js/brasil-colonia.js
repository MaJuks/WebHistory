feather.replace()

function botao_clicado1(){
    if(document.getElementById("botao1").checked){
        var xxx = document.getElementById('div-texto-oculto1').style.display = 'flex';
        var xx = document.getElementById('prego3').style.marginTop = '52.6rem';
        var x = document.getElementById('prego4').style.marginTop = '52.6rem';


    }
    else{
        var xxx = document.getElementById('div-texto-oculto1').style.display = 'none';
        var xx = document.getElementById('prego3').style.marginTop = '38rem';
        var x = document.getElementById('prego4').style.marginTop = '38rem';


    }
}
function botao_clicado2(){
    if(document.getElementById("botao2").checked){
        var xxx = document.getElementById('div-texto-oculto2').style.display = 'flex';
        var x = document.getElementById('prego7').style.top = '107.5rem';
        var x = document.getElementById('prego8').style.top = '107.5rem';


    }
    else{
        var xxx = document.getElementById('div-texto-oculto2').style.display = 'none';
        var x = document.getElementById('prego7').style.top = '91rem';
        var x = document.getElementById('prego8').style.top = '91rem';


    }
}

