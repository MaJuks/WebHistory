feather.replace()

// variaveis para o carrosel
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
var disp = document.getElementById("display");
var women_total = 18; //variable page

// função das divs off (default)
function divOff(ids) {
    var idList = ids.split(" ");
    for (var i = 0; i < idList.length; i++) {
        item = document.getElementById(idList[i]).style.display = "none";
    }
}
// função das div on (default)
function divOn(id,side) {
    item = document.getElementById(id).style.display = "flex";
    if (side == 1){
        item2 = document.getElementById(id).style.animation = 'fade-right 1s';
    }
    else if (side== 2 ){
        item2 = document.getElementById(id).style.animation = 'fade-left 1s';
    }
}
// função carrossel (default)
function carousel(num,side){
    if (num >= 0){  
        num_img = num+1;
        id_on = "woman" + String(num_img);
        divOn(id_on,side);
        id_off = "";
        for (var i = 1; i <= women_total; i++) {  
            if (i != num_img){
                id_off += "woman" + String(i)+" ";
            }
        }
        divOff(id_off);
    }
    if (num < 0 ){ 
        num_img = num+(women_total+1); 
        id_on = "woman" + String(num_img);
        divOn(id_on,side);
        id_off = "";
        for (var i = 1; i <= women_total; i++) { 
            if (i != num_img){
                id_off += "woman" + String(i)+" ";
            }
        }
        divOff(id_off);
    }
}
// função main (clicado) (default)
btn_right.onclick = function () {
    count++;
    disp.innerHTML = count;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,1)
    }
    carousel(count,1)
}
btn_left.onclick = function () {
    count--;
    disp.innerHTML = count;
    if(count >= women_total || count == (1*-women_total)){
        count = 0;
        carousel(count,2)
    }
    carousel(count,2)
}

AOS.init();
