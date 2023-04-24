

let articles = document.getElementsByClassName("article");

let article_showed = 0;
articles[article_showed].style.display = "flex";

let tempppp = new Comment("a", "article_a");

tempppp.generate_editor();


let memes = Array();
memes.push("meme_0.jpg");
memes.push("meme_1.jpg");
memes.push("meme_2.jpg");
memes.push("meme_3.jpg");
memes.push("meme_4.jpg");

let last_random_number = 0;

function get_meme()
{

    let random_number = Math.floor(Math.random() * memes.length);
    if(random_number == last_random_number)
    {
        if((random_number + 1) < memes.length)
        {
            random_number = random_number + 1;
        }
        else
        {
            random_number = random_number - 1;
        }

    }

    document.getElementById("meme_img").src = "./memes/" + memes[random_number];
    document.getElementById("meme_img").style.width = "300px";
    document.getElementById("meme_img").style.height = "300px";

    last_random_number = random_number;


}

function go_home()
{
    location.reload();



}


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

function rotate_articles(direction)
{

    articles[article_showed].style.display = "none";

    if(direction == "left")
    {
        if(article_showed == 0)
        {
            article_showed = articles.length - 1;

        }
        else
        {
            article_showed = article_showed - 1;

        }

    }
    else if(direction == "right")
    {
        if(article_showed == articles.length - 1)
        {
            article_showed = 0;
        
        }
        else
        {
            article_showed = article_showed + 1;

        }

    }
    else
    {
        console.log("neznamy smer: " + direction);

    }

    articles[article_showed].style.display = "flex";


}




