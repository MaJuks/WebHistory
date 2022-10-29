feather.replace()

function btn_checked(){
    if(document.getElementById("btn-midia").checked){
        var xxx = document.getElementById('nav-hidden-midia').style.display = 'flex';

    }
    else{
        var xxx = document.getElementById('nav-hidden-midia').style.display = 'none';
    }
}

// variaveis para o carrossel
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
var women_total = 5; //variable page
// função main (clicado) (default)
btn_right.onclick = function () {
    count++;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,women_total,1)
    }
    carousel(count,women_total,1)
}
btn_left.onclick = function () {
    count--;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,women_total,2)
    }
    carousel(count,women_total,2)
}

AOS.init();
