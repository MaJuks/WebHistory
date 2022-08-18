feather.replace()

function btn_checked(){
    if(document.getElementById("btn-intro").checked){
        var xxx = document.getElementById('nav-hidden-intro').style.display = 'flex';
    }
    else{
        var xxx = document.getElementById('nav-hidden-intro').style.display = 'none';
    }
}
function btn_checked2(){
    if(document.getElementById("btn-native").checked){
        var yyy = document.getElementById('nav-hidden-native').style.display = 'flex';
    }
    else{
        var yyy = document.getElementById('nav-hidden-native').style.display = 'none';
    }
}
function btn_checked3(){
    if(document.getElementById("btn-white").checked){
        var zzz = document.getElementById('nav-hidden-white').style.display = 'flex';
    }
    else{
        var zzz = document.getElementById('nav-hidden-white').style.display = 'none';
    }
}
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");

var disp = document.getElementById("display");
  
btn_right.onclick = function () {
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
btn_left.onclick = function () {
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

        

