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
        var yyy = document.getElementById('div-texto-oculto2').style.display = 'flex';
        var y = document.getElementById('prego7').style.top = '107.5rem';
        var y = document.getElementById('prego8').style.top = '107.5rem';


    }
    else{
        var yyy = document.getElementById('div-texto-oculto2').style.display = 'none';
        var y = document.getElementById('prego7').style.top = '91rem';
        var y = document.getElementById('prego8').style.top = '91rem';


    }
}
function botao_clicado3(){
    if(document.getElementById("botao3").checked){
        var zzz = document.getElementById('div-texto-oculto3').style.display = 'flex';
 


    }
    else{
        var zzz = document.getElementById('div-texto-oculto3').style.display = 'none';



    }
}
var count = 0;
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");

var disp = document.getElementById("display");
  
btn.onclick = function () {
    count++;
    disp.innerHTML = count;
    
    
    if(count==0){
        var sete = document.getElementById('mulher1').style.display = 'flex';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';

    }
    // barbara alencar
    if(count==1 || count == (1*-6)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'flex';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==2 || count == (1*-5)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'flex';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==3 || count == (1*-4)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'flex';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==4 || count == (1*-3)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'flex';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==5  || count == (1*-2)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'flex';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==6 || count == (1*-1)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'flex';
    }
    if(count >= 7){
        count = 0;
        disp.innerHTML = count;
        var sete = document.getElementById('mulher1').style.display = 'flex';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
}
btn2.onclick = function () {
    count--;
    disp.innerHTML = count;
    if(count >= 7){
        count = 0;
        disp.innerHTML = count;

    }
    if(count==0){
        var sete = document.getElementById('mulher1').style.display = 'flex';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';

    }
    // barbara alencar
    if(count==1 || count == (1*-6)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'flex';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==2 || count == (1*-5)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'flex';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==3 || count == (1*-4)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'flex';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==4 || count == (1*-3)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'flex';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==5  || count == (1*-2)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'flex';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
    if(count==6 || count == (1*-1)){
        var sete = document.getElementById('mulher1').style.display = 'none';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'flex';
    }
    if(count >= 7 || count == (1*-7)){
        count = 0;
        disp.innerHTML = count;
        var sete = document.getElementById('mulher1').style.display = 'flex';
        var seis = document.getElementById('mulher2').style.display = 'none';
        var cinco = document.getElementById('mulher3').style.display = 'none';
        var quatro = document.getElementById('mulher4').style.display = 'none';
        var tres = document.getElementById('mulher5').style.display = 'none';
        var dois = document.getElementById('mulher6').style.display = 'none';
        var um = document.getElementById('mulher7').style.display = 'none';
    }
}


        

