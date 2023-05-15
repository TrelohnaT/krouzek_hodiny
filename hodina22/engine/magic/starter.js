

let myCan = new myCanvas("myCanvas");

let frames_count = 0;

let playerA = new myPlayer("a");
let playerB = new myPlayer("b");


let flag_run = true;

let line_a_offset = 10;
let line_b_offset = myCan.width - 10;

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


function color_change(id, class_name) {
    console.log("color_change(" + id + ", " + class_name + ")");

    if(id.includes("_a"))
    {
        if (id.includes("red"))
        {
            playerA.set_color("#ff0000");
        }
        else if(id.includes("green"))
        {
            playerA.set_color("#00ff00");
        }
        else if(id.includes("blue"))
        {
            playerA.set_color("#0000ff");
        }

    }

    else if(id.includes("_b"))
    {
        if (id.includes("red"))
        {
            playerB.set_color("#ff0000");
        }
        else if(id.includes("green"))
        {
            playerB.set_color("#00ff00");
        }
        else if(id.includes("blue"))
        {
            playerB.set_color("#0000ff");
        }


    }


}


function test()
{
    console.log("test");

    myCan.add_shape(new shape("sqr", new Point(100, 100), 2, new Vector("svc", 2, 1)));

    
    
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

// optimalizovat dalsi hodinu
function name_change(id)
{
    console.log("name_change: " + id);

    let name_wip = document.getElementById(id).value;

    let name_len = name_wip.length;

    console.log(name_len);

    if (name_len > 13)
    {
        window.alert("Jmeno moc dlouhe");

        document.getElementById(id).value = name_wip.substring(0, 13);

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



