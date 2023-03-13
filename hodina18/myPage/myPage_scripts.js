

function article_text_show(id)
{
    console.log("article_text_show: " + id);

    get_article_text(id, "block");

}

function article_text_hide(id)
{
    console.log("article_text_hide: " + id);
 
    get_article_text(id, "none");
    
}

function get_article_text(id, visibility)
{
    let parent = document.getElementById(id);

    let components = parent.getElementsByClassName("article_component");

    for(let i = 0; i < components.length; i++)
    {
        if (components[i].id.includes("text"))
        {
            console.log("selected id: " + components[i].id);

            components[i].style.display = visibility;
        }

    }

}

