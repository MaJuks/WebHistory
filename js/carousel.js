
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
function carousel(num,women_total,side){
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