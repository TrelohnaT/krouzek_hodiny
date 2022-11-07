

class myCanvas
{
    constructor(id)
    {
        this.id = id;
        this.el = document.getElementById(this.id);

        this.ctx = this.el.getContext("2d");

        this.shapes = Array();

    }

    /**
     * Tato metoda vykresli vsechny body, jenz jsou znamy pro nas canvas.
     */
     display()
     {
        for(let i = 0; i < this.shapes.length; i++)
        {
            this.shapes[i].draw(this.ctx);

        }
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


