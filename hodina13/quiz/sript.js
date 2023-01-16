

// napište jakoukoliv hodnotu datového typu int
// 56

// deklarujte promnenou s názvem "myVar" a inicializujte ji na hodnotu "Hello"
let MyVar = "hello";

// promnenou MyVar vytiskněte do console
console.log(MyVar); 

// deklarujte funkci jmenem load, funkce neočekává žádne argumenty

function load()
{
    // deklarujte pole (array) s hodnotou 42
    let arr = Array();
    arr.push(42);

    let arrr = [42];
   
    console.log(arr[0]);
    console.log(arrr[0]);

    // zavolejte funkci myFun a předejte jí hodnotu 7 jako parametr
    myFun(7);

}


// deklaruj funcki myFun ktera očekavá parametr jménem param
function myFun(param)
{
    console.log("param: " + param);

}

