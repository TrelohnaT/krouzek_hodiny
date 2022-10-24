

class Point
{

    constructor(x, y, context)
    {
        this.x = x;
        this.y = y;
        this.context = context;

    }

    draw()
    {
        this.context.beginPath();
        this.context.arc(this.x, this.y, 2, 0, 360);
        this.context.stroke();


    }


}



