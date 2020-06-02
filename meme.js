var search_term = "coronavirus%20quarantine";
var apikey = "C1ST54OS8S75";
var lmt = 1;

var memeUrl = "https://api.tenor.com/v1/random?q=" + search_term + "&key=" +
apikey + "&limit=" + lmt + "&contentfilter=high&locale=en_US";

$.ajax({
    url: memeUrl,
    method: "GET"
}).then(function (response) {
    console.log(response);
    var imageUrl = response.results[0].media[0].gif.url;
    console.log(imageUrl);
    var memeImage = $("<img>");

    memeImage.attr("src", imageUrl);
    memeImage.attr("alt", "meme image");
    
    $(".meme").append(memeImage);
})

