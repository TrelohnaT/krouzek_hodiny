

let myCan = new myCanvas("myCanvas");

let frames_count = 0;

let flag_run = true;

window.addEventListener("keydown", (event) => {
    
    if(event.key == " ")
    {
        console.log("mezernik");

        if(flag_run)
        {
            flag_run = false;

        }
        else
        {
            flag_run = true;

        }

    }

});

function test()
{
    console.log("test");

    myCan.add_shape(new shape("sqr", new Point(150, 10), 15, new Vector("vc", 2, 1)));
    myCan.add_shape(new shape("sqr", new Point(10, 10), 10, new Vector("vc", 2, 9)));
    myCan.add_shape(new shape("sqr", new Point(150, 100), 5, new Vector("vc", 1, 1)));
    myCan.add_shape(new shape("sqr", new Point(42, 42), 150, new Vector("vc", 0, 1)));

    
    myCan.add_shape(new shape("line", new Point(4, 4), 150, new Vector("vc", 0, 1)));
    
    myCan.debug();

    

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



function loop()
{
    if(flag_run)
    {
        myCan.clear();

        myCan.display();

        let fps = Math.floor(myCan.get_fps());

        if(frames_count == 10)
        {
            document.getElementById("fps_counter").innerHTML = "FPS: " + fps;
            frames_count = 0;
        }

        frames_count = frames_count + 1;
    }

    window.requestAnimationFrame(loop);

}


window.requestAnimationFrame(loop);



