feather.replace()

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

    }
    if(count==1 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-right 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

    }
    if(count==2 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-right 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';

    }
    if(count==3 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-right 1s';

    }

    if(count >= 4 || count == (1*-4)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

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


    }
    if(count==1 || count == (1*-3)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-left 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';


    }
    if(count==2 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-left 1s';

        var wom4 = document.getElementById('woman4').style.display = 'none';

    }
    if(count==3 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';

        var wom4 = document.getElementById('woman4').style.display = 'flex';
        var wom4_anim = document.getElementById('woman4').style.animation = 'fade-left 1s';

    }

    if(count >= 4 || count == (1*-4)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
        var wom4 = document.getElementById('woman4').style.display = 'none';

    }
}

AOS.init();
