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

// variaveis para o carrossel
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
var women_total = 11; //variable page

// função main (clicado) (default)
btn_right.onclick = function () {
    count++;
    disp.innerHTML = count;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,women_total,1)
    }
    carousel(count,women_total,1)
}
btn_left.onclick = function () {
    count--;
    disp.innerHTML = count;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,women_total,2)
    }
    carousel(count,women_total,2)
}


AOS.init();
