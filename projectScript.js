
var wdpe = document.createElement("p"); //weight of discarded plastic element
var pocae = document.createElement("p"); //percentage of combined aggreagte  element
var wocae = document.createElement("p"); //weight of combined aggreagte  element
var pocoae = document.createElement("p"); //percentage of coarse aggreagte element
var wocoae = document.createElement("p"); //weight of coarse aggreagte element
var pofae = document.createElement("p"); //percentage of fine aggreagte element
var wofae = document.createElement("p"); //weight of fine aggreagte element
var tpe = document.createElement("p"); //total percentage element
var twe = document.createElement("p"); //total weight element

function add(){
    var resultDivBox = document.getElementById("resultDivBox");

    //declaring result div
    var resultDiv = document.getElementById("resultDiv")
    
    // declaring result 
    var result = document.querySelector(".results");
    
    // declaring  bitumen percentage input
    var bitumenInput = document.getElementById("inp").value;
    
    //declaring filler input
    var fillerInput = document.getElementById("inp2").value;
    
    //declaring default weight
    var weight = 1200;
    
    
        
    wob = (bitumenInput/ 100) * weight; //weight of bitumen input

    result.textContent = `Weight of Bitumen : ${wob}g`;

    //calculating weight of discarded palstic
    //total percentage of discarded plastic = 10%
    wdp = (10 / 100) * weight; // weight of discarded plastic
    wdpe.textContent = `Weight of Discarded Plastic : ${wdp}g`;

    poca = 100 - bitumenInput - 10; // percentage of combined aggreagate
    pocae.textContent = `Percentage of Combined Aggregate : ${poca}%`;

    woca = (poca /100)*1200; //weight of combined aggregate
    wocae.textContent = `Weight of Combined Aggregate : ${woca}g`;

    pocoa = (50/100)*poca;  //Percentage of coarse aggregate
    pocoae.textContent = `Percentage of Coarse Aggregate : ${pocoa}%`;

    wocoa = (pocoa/100)*weight; //Weight of Coarse aggregate
    wocoae.textContent = `Weight of Coarse Aggregate : ${wocoa}g`;
 
    pof = (fillerInput/100)*poca; //percentage of filler
    wof = (pof/100)*weight; //weight of filler

    pofa = pocoa - pof ; //percentage of fine aggregate 
    pofae .textContent = `Percentage of Fine Aggregate : ${pofa}%`;

    wofa = (pofa/100)*weight; //weight of fine aggregate
    wofae.textContent = `Weight of Fine Aggregate : ${wofa}g`;

    tp = ((wob/weight)*100)+ 10 + pocoa + pof +pofa; // Total Percentage
    tpe.textContent = `Total Percentage : ${tp}%`;
 
    tw = wob + wocoa + wdp + wof + wofa ; // total weight
    twe .textContent = `Total Weight : ${tw}g`;

    resultDiv.appendChild(wdpe);
    resultDiv.appendChild(pocae);
    resultDiv.appendChild(wocae);
    resultDiv.appendChild(pocoae);
    resultDiv.appendChild(wocoae);
    resultDiv.appendChild(pofae);
    resultDiv.appendChild(wofae);
    resultDiv.appendChild(tpe);
    resultDiv.appendChild(twe);

    resultDivBox.style.display = "flex";
}
function exit(){
    resultDivBox.style.display = "none";
    
}