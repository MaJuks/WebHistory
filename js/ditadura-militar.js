feather.replace()

function btn_checked(){
    if(document.getElementById("btn-worker").checked){
        var xxx = document.getElementById('nav-hidden-worker').style.display = 'flex';
    }
    else{
        var xxx = document.getElementById('nav-hidden-worker').style.display = 'none';
    }
}
function btn_checked2(){
    if(document.getElementById("btn-midia").checked){
        var yyy = document.getElementById('nav-hidden-midia').style.display = 'flex';
    }
    else{
        var yyy = document.getElementById('nav-hidden-midia').style.display = 'none';
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
    }
    if(count==1 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-right 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';

    }
    if(count==2 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-right 1s';
    }
    if(count==3 || count == (1*-3)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-right 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
    }
}
btn_left.onclick = function () {
    count--;
    if(count==0){
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
    }
    if(count==1 || count == (1*-2)){
        var wom1 = document.getElementById('woman1').style.display = 'none';

        var wom2 = document.getElementById('woman2').style.display = 'flex';
        var wom2_anim = document.getElementById('woman2').style.animation = 'fade-left 1s';

        var wom3 = document.getElementById('woman3').style.display = 'none';

    }
    if(count==2 || count == (1*-1)){
        var wom1 = document.getElementById('woman1').style.display = 'none';
        var wom2 = document.getElementById('woman2').style.display = 'none';

        var wom3 = document.getElementById('woman3').style.display = 'flex';
        var wom3_anim = document.getElementById('woman3').style.animation = 'fade-left 1s';
    }
    if(count==3 || count == (1*-3)){
        count = 0;
        var wom1 = document.getElementById('woman1').style.display = 'flex';
        var wom1_anim = document.getElementById('woman1').style.animation = 'fade-left 1s';

        var wom2 = document.getElementById('woman2').style.display = 'none';
        var wom3 = document.getElementById('woman3').style.display = 'none';
    }

}
