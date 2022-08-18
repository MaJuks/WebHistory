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