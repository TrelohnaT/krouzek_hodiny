




function test()
{
    // deklarace aktualniho casu
    let myDate = Date.now();

    let xmasDate = parseInt(new Date(2022, 11, 24, 0, 0, 0).getTime());

    

    let diff = xmasDate - myDate;


    let days = parseFloat(diff / 86400000);

    let hours = (days - Math.floor(days)) * 24;

    let minutes = (hours - Math.floor(hours)) * 60;

    let seconds = (minutes - Math.floor(minutes)) * 60;

    let output = Math.floor(days) + " dny " + Math.floor(minutes) + " minuty " + Math.floor(seconds) + " seconds ";


    document.getElementById("vystup").innerHTML = output;


    console.log("myDate: " + myDate);
    
    console.log("xmasDate: " + xmasDate);

    console.log("diff: " + diff);

    console.log("days: " + days);

    console.log("hours: " + hours);

    console.log("minutes: " + minutes);

    console.log("seconds: " + seconds);
    
    window.requestAnimationFrame(test);

}


window.requestAnimationFrame(test);

