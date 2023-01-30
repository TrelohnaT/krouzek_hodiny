

class Point
{

    constructor(x, y, id)
    {
        this.id = id;
        this.x = x;
        this.y = y;
        this.color = "#000000";

    }

    draw(context)
    {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, 2, 0, 360);
        context.stroke();
        context.fill();

    }

    debug()
    {
        console.log("Point.js");
        console.log("id: " + this.id);
        console.log("x: " + this.x);
        console.log("y: " + this.y);

    }


}



