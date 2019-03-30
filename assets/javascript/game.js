//Global Variables//
var random_result;
var losses = 0;
var wins = 0;
var previous = 0;


var resetAndStart = function (){
    $(".crystals").empty();
var images = [
    "assets/images/diamond-isolated-background-gem-jewel-precious-stone-precious-gem-precious-jewel-91456547.png", 
    "assets/images/emerald-on-a-black-background-vector-15882721.png", 
    "assets/images/blue-sapphire-example-5.png", 
    "assets/images/wall-murals-realistic-ruby-on-black-background.png" ];
//Creates a random number between 19 and 120 //
    random_result = Math.floor(Math.random() * (120 - 19)) + 19;
//To display randomly chosen number in the target number space on html doc//
    $("#result").html(random_result);


//To create random numbers for each of the jewels//
for(var i = 0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
   
    var crystal = $("<div>");
    crystal.attr({"class": "crystal", "data-random": random
    });
    
    crystal.css({
        "background-image":"url('" + images[i] + "')",
        "background-size":"cover"
    });

    $(".crystals").append(crystal);

    }   
    $("#previous").html(previous);
}



resetAndStart();

//Event delegation//
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html(previous);

    console.log(previous);
    console.log(previous, random_result)
    if(previous > random_result){
        console.log("foo")
        losses++;
        $("#lossesSpan").text(losses);
        previous = 0;

        resetAndStart();
    }

    else if(previous===random_result){
        wins++;
        $("#winsSpan").text(wins);
        previous = 0;

        resetAndStart();
    }
    
    
});


