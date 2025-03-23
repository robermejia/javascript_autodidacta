// ================== indexOf() =======================
let nombres = ["Roberto", "Agustín","Brando"];
console.log(nombres.indexOf("Agustín"));
console.log(nombres.indexOf("Robert"));
// ================== includes() =======================
let nombres2 = ["Roberto", "Agustín","Brando"];
console.log(nombres2.includes("Roberto"));
console.log(nombres2.includes("Robert"));
// ================== find() =======================
let nombres3 = ["Roberto", "Agustín","Brando"];
console.log(nombres3.find(function(ele){
    return ele === "Roberto";
}));
let nombres4 = ["Roberto", "Agustín","Brando"];
console.log(nombres3.find(function(ele, posc){
    return ele === "Roberto" && posc === 0 ;
}));
let nombres5 = ["Roberto", "Agustín","Brando"];
console.log(nombres5.find(function(ele, posc, arr){
    return ele === "Roberto" && posc === 1 ;
}));
// ================== findIndex() =======================
let nombres6 = ["Roberto", "Agustín","Brando"];
console.log(nombres6.findIndex(function(ele, posc, arr){
    return ele === "Roberto";
}));
let nombres7 = ["Roberto", "Agustín","Brando"];
console.log(nombres7.findIndex(function(ele, posc, arr){
    return ele === "Roberto" && posc === 1 ;
}));
// ================== some() =======================
let nombres8 = ["Roberto", "Agustín","Brando"];
console.log(nombres8.some(function(ele, posc, arr){
    return ele === "Roberto";
}));
let nombres9 = ["Roberto", "Agustín","Brando"];
console.log(nombres9.some(function(ele, posc, arr){
    return ele === "Roberto" && posc === 1 ;
}));




