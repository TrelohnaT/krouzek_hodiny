/**
 * Verze: 1.0
 * Autor: Vaclav Dolecek
 * 
 * 
 */

// ulozeni casu vanoc
let xmas = parseInt(new Date(2022, 11, 24, 0, 0, 0, 0).getTime());

// pro testovani, cas bude ted + 10s
//let xmas = parseInt(Date.now() + 10000); 

// ulozeni html DOM elementu pro snadnejsi pristup
let el_countdown = document.getElementById("countdown");
let el_peepo_xmas = document.getElementById("peepo_xmas");
let el_peepo_wait = document.getElementById("peepo_wait");

/**
 * Hlavni smycka.
 * Tato funkce se zavola kdyz se vykresli novy frame.
 */
function loop()
{
    // ulozeni aktualniho casu
    let now = parseInt(Date.now()); 

    // vypocet rozdil mezi ted a sledovanym casem
    let diff = xmas - now;

    // je diff veci nez 0, sledovany cas jeste nenastal
    if(diff > 0)
    {
        // vypocet vzdalenosti k sledovanemu casu
        getDistance(diff);

    }
    else
    {
        // chovani cekajiciho peepa
        el_peepo_wait.style.display = "none";
        // ukazani oslavujiciho peepa
        el_peepo_xmas.style.display = "block";
        // vykresleni nuloveho odpocut
        el_countdown.innerHTML = "0 dnů : 0 hodin : 0 minut : 0 vteřin";

    }

    // znovu zavolani teto funkce pri dalsim snimku
    window.requestAnimationFrame(loop);
}


window.requestAnimationFrame(loop);


/**
 * Funcke vypocita kolik dnu, hodin, minut a vterin zbyva do sledovaneho casu a zobrazi to na obrazovku.
 * @param {int} mlsec - pocet milivterin mezi ted a sledovanym casem 
 */
function getDistance(mlsec)
{  
    // prevedeni na dny
    let days = parseFloat(mlsec / 86400000);
    // ziskani poctu hodin
    let hours = (days - Math.floor(days)) * 24;
    // ziskani poctu minut
    let minutes = (hours - Math.floor(hours)) * 60;
    // ziskani poctu vterin
    let seconds = Math.round(((minutes - Math.floor(minutes)) * 60) * 100) / 100;

    // vypsani casu do sledovaneho casu na obrazovku
    el_countdown.innerHTML = Math.floor(days) + " dnů : " + Math.floor(hours) + " hodin : " + Math.floor(minutes) + " minut : " + Math.floor(seconds) + " vteřin";


}



