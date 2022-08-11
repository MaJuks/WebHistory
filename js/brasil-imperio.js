feather.replace()

function btn_checked(){
    if(document.getElementById("btn-midia").checked){
        var xxx = document.getElementById('nav-hidden-midia').style.display = 'flex';

    }
    else{
        var xxx = document.getElementById('nav-hidden-midia').style.display = 'none';
    }
}

var count = 0;
var btn_esp = document.getElementById("btn-especific2");
var btn_esp2 = document.getElementById("btn-especific");

var disp = document.getElementById("display");
  
btn_esp.onclick = function () {
    count++;
    disp.innerHTML = count;
    if(count==0){
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
    }
    if(count==1 || count == (1*-4)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-right 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==2 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-right 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==3 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-right 1s';

        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==4 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

        var wom5 = document.getElementById('woman5').style.display = 'flex';
        var wom5_anim = document.getElementById('woman5').style.animation = 'fade-right 1s';
    }
    if(count == 5 || count == (1*-5)){
        count = 0;
        disp.innerHTML = count;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
    }
}
btn_esp2.onclick = function () {
    count--;
    disp.innerHTML = count;
    if(count >= 5){
        count = 0;
        disp.innerHTML = count;

    }
    if(count==0){
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    // barbara alencar
    if(count==1 || count == (1*-4)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-left 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var qwom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==2 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-left 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==3 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-left 1s';

        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
    if(count==4 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

        var wom5 = document.getElementById('woman5').style.display = 'flex';
        var wom5_anim = document.getElementById('woman5').style.animation = 'fade-left 1s';


    }
    if(count >= 5 || count == (1*-5)){
        count = 0;
        disp.innerHTML = count;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

    }
}

AOS.init();

        

