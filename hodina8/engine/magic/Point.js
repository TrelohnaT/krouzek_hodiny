

class Point
{

    constructor(x, y, id)
    {
        this.id = id;
        this.x = x;
        this.y = y;

    }

    draw(context)
    {
        context.beginPath();
        context.arc(this.x, this.y, 2, 0, 360);
        context.stroke();


    }

    debug()
    {
        console.log("Point.js");
        console.log("id: " + this.id);
        console.log("x: " + this.x);
        console.log("y: " + this.y);

    }


}



