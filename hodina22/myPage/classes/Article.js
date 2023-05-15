

class HTML_element
{

    constructor(id, className, parentID)
    {
        this.id = id;
        this.className = className;
        this.parentID = parentID;

        this.el = null;

    }

    generate(header_text, p_text)
    {
        this.el = document.createElement("div");
        this.el.setAttribute("id", this.id);
        this.el.setAttribute("class", this.className);
        this.el.setAttribute("onmouseenter", "article_text_show(this.id)");
        this.el.setAttribute("onmouseleave", "article_text_hide(this.id)");

        let button_left = document.createElement("button");
        button_left.setAttribute("type", "button");
        button_left.setAttribute("class", "rotation_button");
        button_left.setAttribute("onclick", "rotate_articles('left')");
        button_left.innerHTML = "vlevo";

        let picture_el = document.createElement("div");
        picture_el.setAttribute("id", "article_picture_" + this.id);
        picture_el.setAttribute("class", "article_component");

        let img_el = document.createElement("img");
        img_el.setAttribute("width", "200px");
        img_el.setAttribute("height", "400px");
        img_el.setAttribute("src", "../obrazky/peepo_happy.png");

        picture_el.appendChild(img_el);

        let text_el = document.createElement("div");
        text_el.setAttribute("id", "article_text_" + this.id);
        text_el.setAttribute("class", "article_component article_text");

        let text_h1_el = document.createElement("h1");
        text_h1_el.innerHTML(header_text);

        let text_p_el = document.createElement("p")
        text_p_el.innerHTML(p_text);



        this.el.appendChild(button_left);
        this.el.appendChild(picture_el);
        
    }

}



