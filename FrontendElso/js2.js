 var versTomb=[
    {
        cím:"MAMA",
        szerző:"József Attila",
        vers:"Már egy hete csak a mamára<br>gondolok mindíg, meg-megállva.<br>Nyikorgó kosárral ölében,<br>ment a padlásra, ment serényen.",
        kép:"kepek/lapirotty.PNG",

    },
    {
        cím:"Füstbement Terv",
        szerző:"Petőfi Sándor",
        vers:"Egész uton - hazafelé -<br>Azon gondolkodám:<br>Miként fogom szólítani<br>Rég nem látott anyám?",
        kép:"kepek/hegyizsupsz.PNG",

    },
]; 

$(function(){
    $(":button").on("click",esemeny);
    /*$.ajax({url: "versek.json", success: function(result){
        $("header").html(result);
      }});*/
    
});
function esemeny(){
    for (let index = 0; index < versTomb.length; index++) {
        const element = versTomb[index];
        $(".elem1").append("<div><h3>"+element["cím"]+"</h3><p>"+element["vers"]+"</p><p>"+element["szerző"]+"</p><br></div>");
    }
}