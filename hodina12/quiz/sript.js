
// dekraluj proměnou jmenem "myVar" a s hodnotou 42
let Myvar = 42;

// primitivni datové typy
// integer int cele čislo 42
// character pismeno "A"
// string slovo "Hello word"
// float desetine čislo 4.2


// přičti k promně Myvar 5 a vysledek vypiš do konzole
console.log(Myvar + 5);

// deklarujte funkci jmenem Load s žádnymi parametery
function Load()
{
    // vypište do konzole string "Hello World"
    console.log("Hello World");

    // vytvořte instanci třidy Cat a jako parametr konstruktoru předejde "Micka"
    let myCat = new Cat("Micka");

    // vytisknete na konzoli jmeno instace Cat v promene myCat
    console.log(myCat.name);

    // zavolejte nad instanci myCat jeji metodu Meow
    myCat.Meow(5);

}

class Cat
{

    constructor(name)
    {
        this.name = name;

    }
    // deklaruj metodu pro tridu Cat s nazvem Meow
    Meow(times)
    {

        for(let i = 0; i < times; i++)
        {

            console.log("meow!");

        }
        

    }   



}


