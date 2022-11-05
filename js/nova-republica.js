feather.replace()

// variaveis para o carrossel
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
var women_total = 10; //variable page
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
