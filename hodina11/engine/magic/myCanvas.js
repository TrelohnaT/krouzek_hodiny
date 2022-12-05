

class myCanvas
{
    constructor(id)
    {
        this.id = id;
        this.el = document.getElementById(this.id);

        this.ctx = this.el.getContext("2d");

        this.shapes = Array();

        this.width = this.el.width;
        this.height = this.el.height;

        this.fps = 0;
        this.lastCalledTime = 0;

    }

    get_shape(id)
    {
        for(let i = 0; i < this.shapes.length; i++)
        {
            if(id == this.shapes[i].id)
            {
                return this.shapes[i];

            }

        }


    }

    get_fps()
    {
        let delta = (Date.now() - this.lastCalledTime) / 1000;
        this.lastCalledTime = Date.now();
        this.fps = 1 / delta;

        return this.fps;
    }

    /**
     * Tato metoda vykresli vsechny body, jenz jsou znamy pro nas canvas.
     */
     display()
     {
        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].draw(this.ctx);

            if(this.shapes[i].vector != null)
            {
                this.shapes[i].move(this.width, this.height);
                
            }

            if(this.shapes[i].id == "sqr")
            {
                if(this.shapes[i].center_point.x < line_a_offset)
                {
                    let line_a = this.find_shape("line_a");

                    if(this.shapes[i].center_point.y < (line_a.center_point.y + (line_a.radius / 2)) && 
                    (line_a.center_point.y - (line_a.radius / 2)) < this.shapes[i].center_point.y)
                    {
                        this.shapes[i].vector.x = this.shapes[i].vector.x * (-1);


                    }

                }

                if(this.shapes[i].center_point.x > line_b_offset)
                {
                    let line_b = this.find_shape("line_b");

                    if(this.shapes[i].center_point.y < (line_b.center_point.y + (line_b.radius / 2))  && (line_b.center_point.y - (line_b.radius / 2)) < this.shapes[i].center_point.y)
                    {
                        this.shapes[i].vector.x = this.shapes[i].vector.x * (-1);


                    }

                }

            }

        }

     }

     find_shape(id)
     {
        for(let i = 0; i < this.shapes.length; i++)
        {
            if(id == this.shapes[i].id)
            {   
                return this.shapes[i];

            }

        }

     }

     clear()
     {
        this.ctx.clearRect(0, 0, this.el.width, this.el.height);

     }

    /**
     * Tato funkce usnadnuje pridavani bodu do Canvasu, ktere budou vykresleny.
     * @param {shape} new_shape - novy bod pro vykresleni
     */
    add_shape(new_shape)
    {
        this.shapes.push(new_shape);
        
    }



    debug()
    {
        console.log("id: " + this.id);
        
        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].debug();

        }



    }
    


}


