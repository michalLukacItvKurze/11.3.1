// globalne premenne 
let prvaHodnota = 4;
let druhaHodnota = 2;

//funkcia do ktorej zadam parametre v premenných vyssie 
function kalkulacka(prvaHodnota,druhaHodnota){
    console.log("prva hodnota je "+ prvaHodnota + " a " + "druha hodnota je " +  druhaHodnota);
    console.log("vykonavam matematicke operacie : ")
    console.log("operácia sčítania:")
    let scitanie = prvaHodnota+druhaHodnota;
    console.log(prvaHodnota + " + " + druhaHodnota + " = " + scitanie);
    console.log("operácia odčítania:")
    let odcitanie = prvaHodnota-druhaHodnota;
    console.log(prvaHodnota + " - " + druhaHodnota + " = " + odcitanie);
    console.log("operácia násobenia:")
    let nasobenie = prvaHodnota*druhaHodnota;
    console.log(prvaHodnota + " * " + druhaHodnota + " = " + nasobenie);
    console.log("operácia delenia:")
    let delenie = prvaHodnota/druhaHodnota;
    console.log(prvaHodnota + " / " + druhaHodnota + " = " + delenie);
}
// zavolanie funkcie 
kalkulacka(); // bez parametrov
kalkulacka(prvaHodnota,druhaHodnota); // s parametrami 

