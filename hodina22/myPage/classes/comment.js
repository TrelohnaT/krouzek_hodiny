


class Comment
{

    constructor(id, parentID)
    {
        this.id = id;
        this.parentID = parentID;

        this.html_el = document.createElement("div");

    }

    generate_editor()
    {
        this.html_el.setAttribute("id", this.id + "_comment_editor");
        this.html_el.setAttribute("class", "article_component");

        let text = document.createElement("input");
        text.setAttribute("type", "text");

        this.html_el.appendChild(text);

        document.getElementById(this.parentID).appendChild(this.html_el);

    }

}



