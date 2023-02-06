

class shape
{
    /**
     * Tato instance module tvar jenz bude vykreslen v Canvasu
     * @param {string} id - identificator tvaru
     * @param {Point} center_point - teziste
     * @param {int} radius - velikost opsane kruznice
     * @param {Vector} vector - vector pohybu tohoto bodu
     */
    constructor(id, center_point, radius, vector = null, color = "#000000")
    {
        this.id = id;
        this.center_point = center_point;
        this.radius = radius;

        this.points = Array();

        this.vector = vector;

        this.color = color;

        this.init();

    }

    /**
     * 
     * @param {int} w - sirka canvasu
     * @param {int} h - vyska canvasu
     */
    move(w, h)
    {

        let temp_x = this.center_point.x + this.vector.x;
        let temp_y = this.center_point.y + this.vector.y;
        
        if(temp_y > h || temp_y < 0)
        {
            this.vector.y = this.vector.y * (-1);

        }

        if(temp_x > w || temp_x < 0)
        {
            this.vector.x = this.vector.x * (-1);

        }

        this.center_point.x = this.center_point.x + this.vector.x;
        this.center_point.y = this.center_point.y + this.vector.y;

        this.init();
        
    }

    init()
    {

        this.points = Array();

        if(this.id.includes("line"))
        {
            let half_radius = this.radius / 2;
            this.points.push(new Point(this.center_point.x, this.center_point.y - half_radius, this.id + "_a"));
            this.points.push(new Point(this.center_point.x, this.center_point.y + half_radius, this.id + "_b"));
            
        }
        else if(this.id == "sqr")
        {
            let half_radius = this.radius / 2;
            this.points.push(new Point(this.center_point.x - half_radius, this.center_point.y, this.id + "_a"));
            this.points.push(new Point(this.center_point.x, this.center_point.y + half_radius, this.id + "_b"));
            this.points.push(new Point(this.center_point.x + half_radius, this.center_point.y, this.id + "_c"));
            this.points.push(new Point(this.center_point.x, this.center_point.y - half_radius, this.id + "_d"));

        }

    }
    
    /**
     * tato metoda vykresli vsechny body 
     * @param {context} ctx - context z canvasu 
     */
    draw(ctx)
    {
        for(let i = 0; i < this.points.length; i++)
        {
            this.points[i].color = this.color;
            this.points[i].draw(ctx);
        }

        for(let i = 0; i < this.points.length; i++)
        {
            ctx.strokeStyle = this.color;
            ctx.beginPath();
            if(i != (this.points.length - 1))
            {
                ctx.moveTo(this.points[i].x, this.points[i].y);
                ctx.lineTo(this.points[i+1].x, this.points[i+1].y);
            }
            else
            {
                ctx.moveTo(this.points[i].x, this.points[i].y);
                ctx.lineTo(this.points[0].x, this.points[0].y);
            }

            ctx.stroke();
            ctx.strokeStyle = "#ffffff";


        }


    }


    debug()
    {
        console.log("Shape.js");
        console.log("id: " + this.id);
        console.log("radius: " + this.radius);
        this.center_point.debug();

        for(let i = 0; i < this.points.length; i++)
        {
            //this.points[i].debug();
        }


    }


}


