

class shape
{
    /**
     * Tato instance module tvar jenz bude vykreslen v Canvasu
     * @param {string} id - identificator tvaru
     * @param {Point} center_point - teziste
     * @param {int} radius - velikost opsane kruznice
     */
    constructor(id, center_point, radius)
    {
        this.id = id;
        this.center_point = center_point;
        this.radius = radius;

        this.points = Array();

        this.init();

    }

    init()
    {
        if(this.id == "line")
        {
            console.log("line");
            let half_radius = this.radius / 2;
            this.points.push(new Point(this.center_point.x - half_radius, this.center_point.y));
            this.points.push(new Point(this.center_point.x + half_radius, this.center_point.y));
            
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
            this.points[i].draw(ctx);
        }


    }


}


