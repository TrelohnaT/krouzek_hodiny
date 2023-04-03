

// deklarujte funkci jmenem Load s žádnymi parametery
function Load()
{

    let notInit;
    let myVar = 4;

    console.log(notInit);
    console.log(myVar);

    let myList = new Array();

    myList.push(1); // 0
    myList.push(2); // 1
    myList.push(3); // 2
    myList.push(4); // 3
    myList.push(5); // 4
    myList.push(6); // 5

    for(let i = 0; i < myList.length ; i++)
    {
        console.log("na indexu: " + i + " je hodnota: " + myList[i]);


    }


}


