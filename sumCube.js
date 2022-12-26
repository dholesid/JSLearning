function sumCube(val){
    var total=0;
    for (let i = 1; i<val ; i++) {
       var cube= val*val*val;
       total += cube;
        console.log(total);
    }
}
sumCube(1);
sumCube(2); 
sumCube(3);
sumCube(4);
sumCube(5);
