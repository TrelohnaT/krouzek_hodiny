
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

