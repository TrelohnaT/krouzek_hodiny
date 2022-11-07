



function test()
{
    console.log("test");

    let myCan = new myCanvas("myCanvas");

    myCan.add_shape(new shape("line", new Point(50, 50), 20));
    myCan.add_shape(new shape("line", new Point(60, 60), 30));

    myCan.add_shape(new shape("sqr", new Point(100, 100), 20));
    

    myCan.debug();

    myCan.display();

    

    let arr = Array();

    arr.push("a");
    arr.push("b");
    arr.push("c");

    console.log(arr);

    for(let i = 0; i < arr.length; i++)
    {
        console.log(arr[i]);

    }




}


