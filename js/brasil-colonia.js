feather.replace()

function botao_clicado1(){
    if(document.getElementById("btn1").checked){
        var xxx = document.getElementById('div-hidden-text1').style.display = 'flex';
    }
    else{
        var xxx = document.getElementById('div-hidden-text1').style.display = 'none';
    }
}
function botao_clicado2(){
    if(document.getElementById("btn2").checked){
        var yyy = document.getElementById('div-hidden-text2').style.display = 'flex';
    }
    else{
        var yyy = document.getElementById('div-hidden-text2').style.display = 'none';
    }
}
function botao_clicado3(){
    if(document.getElementById("btn3").checked){
        var zzz = document.getElementById('div-hidden-text3').style.display = 'flex';
    }
    else{
        var zzz = document.getElementById('div-hidden-text3').style.display = 'none';
    }
}
var count = 0;
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn4-5");

var disp = document.getElementById("display");
  
btn5.onclick = function () {
    count++;
    disp.innerHTML = count;
    if(count==0){
        var sete = document.getElementById('woman1').style.display = 'flex';
        var anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';

    }
    // barbara alencar
    if(count==1 || count == (1*-6)){
        var sete = document.getElementById('woman1').style.display = 'none';

        var seis = document.getElementById('woman2').style.display = 'flex';
        var anim = document.getElementById('woman2').style.animation = 'fade-right 1s';

        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==2 || count == (1*-5)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';

        var cinco = document.getElementById('woman3').style.display = 'flex';
        var anim = document.getElementById('woman3').style.animation = 'fade-right 1s';

        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==3 || count == (1*-4)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';

        var quatro = document.getElementById('woman4').style.display = 'flex';
        var anim = document.getElementById('woman4').style.animation = 'fade-right 1s';

        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==4 || count == (1*-3)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';

        var tres = document.getElementById('woman5').style.display = 'flex';
        var anim = document.getElementById('woman5').style.animation = 'fade-right 1s';

        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==5  || count == (1*-2)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';

        var dois = document.getElementById('woman6').style.display = 'flex';
        var anim = document.getElementById('woman6').style.animation = 'fade-right 1s';

        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==6 || count == (1*-1)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';

        var um = document.getElementById('woman7').style.display = 'flex';
        var anim = document.getElementById('woman7').style.animation = 'fade-right 1s';

    }
    if(count >= 7){
        count = 0;
        disp.innerHTML = count;
        var sete = document.getElementById('woman1').style.display = 'flex';
        var anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
}
btn4.onclick = function () {
    count--;
    disp.innerHTML = count;
    if(count >= 7){
        count = 0;
        disp.innerHTML = count;

    }
    if(count==0){
        var sete = document.getElementById('woman1').style.display = 'flex';
        var anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';

    }
    // barbara alencar
    if(count==1 || count == (1*-6)){
        var sete = document.getElementById('woman1').style.display = 'none';

        var seis = document.getElementById('woman2').style.display = 'flex';
        var anim = document.getElementById('woman2').style.animation = 'fade-left 1s';

        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==2 || count == (1*-5)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';

        var cinco = document.getElementById('woman3').style.display = 'flex';
        var anim = document.getElementById('woman3').style.animation = 'fade-left 1s';

        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==3 || count == (1*-4)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';

        var quatro = document.getElementById('woman4').style.display = 'flex';
        var anim = document.getElementById('woman4').style.animation = 'fade-left 1s';

        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==4 || count == (1*-3)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';

        var tres = document.getElementById('woman5').style.display = 'flex';
        var anim = document.getElementById('woman5').style.animation = 'fade-left 1s';

        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==5  || count == (1*-2)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';

        var dois = document.getElementById('woman6').style.display = 'flex';
        var anim = document.getElementById('woman6').style.animation = 'fade-left 1s';

        var um = document.getElementById('woman7').style.display = 'none';
    }
    if(count==6 || count == (1*-1)){
        var sete = document.getElementById('woman1').style.display = 'none';
        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';

        var um = document.getElementById('woman7').style.display = 'flex';
        var anim = document.getElementById('woman7').style.animation = 'fade-left 1s';
    }
    if(count >= 7 || count == (1*-7)){
        count = 0;
        disp.innerHTML = count;
        var sete = document.getElementById('woman1').style.display = 'flex';
        var anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var seis = document.getElementById('woman2').style.display = 'none';
        var cinco = document.getElementById('woman3').style.display = 'none';
        var quatro = document.getElementById('woman4').style.display = 'none';
        var tres = document.getElementById('woman5').style.display = 'none';
        var dois = document.getElementById('woman6').style.display = 'none';
        var um = document.getElementById('woman7').style.display = 'none';
    }
}

AOS.init();

        

