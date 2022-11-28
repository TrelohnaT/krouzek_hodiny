

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
            myCan.get_shape("line_a").vector.y = 0;
            myCan.get_shape("line_b").vector.y = 0;

        }
        else
        {
            flag_run = true;

        }

    }
    else if(event.key == "w")
    {
        console.log("w - line_a up");
        myCan.get_shape("line_a").vector.y--;

    }
    else if(event.key == "s")
    {
        console.log("s - line_a down");
        myCan.get_shape("line_a").vector.y++;

    }
    else if(event.key == "i")
    {
        console.log("i - line_b up");
        myCan.get_shape("line_b").vector.y--;

    }
    else if(event.key == "k")
    {
        console.log("k - line_b down");
        myCan.get_shape("line_b").vector.y++;

    }

});

function test()
{
    console.log("test");

    myCan.add_shape(new shape("line_a", new Point(10, myCan.height / 2), 20, new Vector("vc", 0, 0)));
    myCan.add_shape(new shape("line_b", new Point(myCan.width - 10, myCan.height / 2), 20, new Vector("vc", 0, 0)));
    
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



