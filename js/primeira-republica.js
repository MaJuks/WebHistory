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
    if(document.getElementById("btn-worker").checked){
        var xxx = document.getElementById('nav-hidden-worker').style.display = 'flex';

    }
    else{
        var xxx = document.getElementById('nav-hidden-worker').style.display = 'none';
    }
}

var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
  
btn_right.onclick = function () {
    count++;
    if(count==0){
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==1 || count == (1*-7)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-right 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==2 || count == (1*-6)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-right 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==3 || count == (1*-5)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-right 1s';

        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==4 || count == (1*-4)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

        var wom5 = document.getElementById('woman5').style.display = 'flex';
        var wom5_anim = document.getElementById('woman5').style.animation = 'fade-right 1s';

        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 5 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

        var wom6 = document.getElementById('woman6').style.display = 'flex';
        var wom6_anim = document.getElementById('woman6').style.animation = 'fade-right 1s';

        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 6 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';

        var wom7 = document.getElementById('woman7').style.display = 'flex';
        var wom7_anim = document.getElementById('woman7').style.animation = 'fade-right 1s';

        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 7 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';

        var wom8 = document.getElementById('woman8').style.display = 'flex';
        var wom6_anim = document.getElementById('woman8').style.animation = 'fade-right 1s';
    }
    if(count >= 8 || count == (1*-8)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
}
btn_left.onclick = function () {
    count--;
    if(count==0){
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==1 || count == (1*-7)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-left 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==2 || count == (1*-6)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-left 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==3 || count == (1*-5)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-left 1s';

        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count==4 || count == (1*-4)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

        var wom5 = document.getElementById('woman5').style.display = 'flex';
        var wom5_anim = document.getElementById('woman5').style.animation = 'fade-left 1s';

        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 5 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';

        var wom6 = document.getElementById('woman6').style.display = 'flex';
        var wom6_anim = document.getElementById('woman6').style.animation = 'fade-left 1s';

        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 6 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';

        var wom7 = document.getElementById('woman7').style.display = 'flex';
        var wom7_anim = document.getElementById('woman7').style.animation = 'fade-left 1s';

        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
    if(count == 7 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';

        var wom8 = document.getElementById('woman8').style.display = 'flex';
        var wom6_anim = document.getElementById('woman8').style.animation = 'fade-left 1s';

    }
    if(count >= 8 || count == (1*-8)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';
        var wom5 = document.getElementById('woman5').style.display = 'none';
        var wom6 = document.getElementById('woman6').style.display = 'none';
        var wom7 = document.getElementById('woman7').style.display = 'none';
        var wom8 = document.getElementById('woman8').style.display = 'none';
    }
}

AOS.init();
