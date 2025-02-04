
let arrays = ["elemento1", "elemento2", "elemento3"];
console.log(arrays);

// ========================== For ==============================
for (let i = 0; i < arrays.length; i++) {
    console.log(arrays[i]);
}

// ========================= forEach ===========================
// forEach() - 1 parámetro
arrays.forEach(element => {
    console.log(element); 
});
// forEach() - 2 parámetros
arrays.forEach((ele, index) => {
    console.log(ele, index); 
});
// forEach() - 3 parámetros
arrays.forEach((ele, index, array) => {
    console.log(ele, index, array); 
});
