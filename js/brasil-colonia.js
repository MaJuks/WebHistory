feather.replace()
// função dos botão de mais informações
function btn_checked(){
    if(document.getElementById("btn-intro").checked){
        var xxx = document.getElementById('nav-hidden-intro').style.display = 'flex';
    }
    else{
        var xxx = document.getElementById('nav-hidden-intro').style.display = 'none';
    }
}
function btn_checked2(){
    if(document.getElementById("btn-native").checked){
        var yyy = document.getElementById('nav-hidden-native').style.display = 'flex';
    }
    else{
        var yyy = document.getElementById('nav-hidden-native').style.display = 'none';
    }
}
function btn_checked3(){
    if(document.getElementById("btn-white").checked){
        var zzz = document.getElementById('nav-hidden-white').style.display = 'flex';
    }
    else{
        var zzz = document.getElementById('nav-hidden-white').style.display = 'none';
    }
}

// variaveis para o carrossel
var count = 0;
var btn_right = document.getElementById("btn-left");
var btn_left = document.getElementById("btn-right");
var women_total = 8; //variable

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

// modal
function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    if(modal){ 
        modal.classList.add('mostrar');
        modal.addEventListener("click", (e) =>{
        if (e.target.id == modalID || e.target.className == "fechar"){
            modal.classList.remove("mostrar")
        }
        });
    }
}
// img-native
var img_nat1 = document.getElementById('img-native1');
img_nat1.addEventListener('click', () => {
    iniciaModal('modal-id-native1')});
var img_nat2 = document.getElementById('img-native2');
img_nat2.addEventListener('click', () => {
    iniciaModal('modal-id-native2')});
var img_nat3 = document.getElementById('img-native3');
img_nat3.addEventListener('click', () => {
    iniciaModal('modal-id-native3')});

// img-black
// bloco1
var img_blck1 = document.getElementById('img-black1');
img_blck1.addEventListener('click', () => {
    iniciaModal('modal-id-black1')});
var img_blck2 = document.getElementById('img-black2');
img_blck2.addEventListener('click', () => {
    iniciaModal('modal-id-black2')});
// bloco2
var img_blck3 = document.getElementById('img-black3');
img_blck3.addEventListener('click', () => {
    iniciaModal('modal-id-black3')});
var img_blck4 = document.getElementById('img-black4');
img_blck4.addEventListener('click', () => {
    iniciaModal('modal-id-black4')});
var img_blck5 = document.getElementById('img-black5');
img_blck5.addEventListener('click', () => {
    iniciaModal('modal-id-black5')});

// img-white
// bloco2
var img_white2 = document.getElementById('img-white2');
img_white2.addEventListener('click', () => {
    iniciaModal('modal-id-white2')});
var img_white3 = document.getElementById('img-white3');
img_white3.addEventListener('click', () => {
    iniciaModal('modal-id-white3')});
var img_white4 = document.getElementById('img-white4');
img_white4.addEventListener('click', () => {
    iniciaModal('modal-id-white4')});




AOS.init();

        

