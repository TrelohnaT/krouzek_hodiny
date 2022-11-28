

// deklarujte promněnnou (variable)
let mojePromenna;

// vzlozte do promene mojePromenna hodnotu 42
mojePromenna = 42;

// vypište promenou mojePromenna do konzole
console.log(mojePromenna);

// deklarujte funkci load
function load()
{
    // vypište do konzole "load"
    console.log("load");

    // do promněnné sum vložte součet num_a a num_b
    let num_a = 10;
    let num_b = 5;
    let sum = num_a + num_b;

    // deklaruje pole jmenem arr
    let arr = Array();

    // do pole arr vlozte své jmeno (push-nete)
    arr.push("Vaclav");
    arr.push("Ondra");
    arr.push("Petr");
    arr.push("Radim");

    // napište cyclus for ktery vypiše všechny jmena z pole arr do konzole
    for (let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);
    }




}



