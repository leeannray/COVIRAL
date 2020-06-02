var numWho = 1;
var numNih = 1;
var numCdc = 1;
var defaultImages = ["https://cdn.shrm.org/image/upload/c_crop,h_617,w_1099,x_0,y_0/c_fit,f_auto,q_auto,w_767/v1/Legal%20and%20Compliance/coronavirus4m_utz5jt?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjoxMDk5LCJ5MiI6NjE3LCJ3IjoxMDk5LCJoIjo2MTd9fQ%3D%3D", "https://resize.hswstatic.com/w_907/gif/becoming-doctor.jpg", "https://media.newyorker.com/photos/5e6baf0f0d121d00087dbc7c/master/w_1600%2Cc_limit/Radiohour-Coronavirus.jpg"];

// news API gets stuff from who.int -----------------------------------------------------------------------------------------------------------------
function newsAPIWho(numWho) {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=who.int&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[numWho].title.slice(0, 70) + "...";
        var url = response.articles[numWho].url;
        var img = response.articles[numWho].urlToImage;
        var summary = response.articles[numWho].description;
        $("#whoText").html(summary);
        $("#whoTitle").text(title);
        $("#whoLink").attr("href", url);
        if (img !== null) {
            $("#whoImg").attr("src", img);
        }
        else {
            $("#whoImg").attr("src", defaultImages[0]);
        }
    });
}

// news API gets stuff from nih.gov -----------------------------------------------------------------------------------------------------------------
function newsAPINih(numNih) {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=nih.gov&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[numNih].title.slice(0, 70) + "...";
        var url = response.articles[numNih].url;
        var img = response.articles[numNih].urlToImage;
        var summary = response.articles[numNih].description;
        $("#nihText").html(summary);
        $("#nihTitle").text(title);
        $("#nihLink").attr("href", url);
        if (img !== null) {
            $("#nihImg").attr("src", img);
        }
        else {
            $("#nihImg").attr("src", defaultImages[1]);
        }
    });
}

// news API gets stuff from cdc.gov -----------------------------------------------------------------------------------------------------------------
function newsAPICdc(numCdc) {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=cdc.gov&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // gets first 90 characters of the article title
        var title = response.articles[numCdc].title.slice(0, 70) + "...";
        var url = response.articles[numCdc].url;
        var img = response.articles[numCdc].urlToImage;
        var summary = response.articles[numCdc].description;
        $("#cdcText").html(summary);
        $("#cdcTitle").text(title);
        $("#cdcLink").attr("href", url);
        if (img !== null) {
            $("#cdcImg").attr("src", img);
        }
        else {
            $("#cdcImg").attr("src", defaultImages[2]);
        }
    });
}

// move through who articles with buttons
$("#leftWho").click(function () {
    if (numWho === 0) {
        return;
    }
    else {
        numWho--;
        newsAPIWho(numWho);
    }
});
$("#rightWho").click(function () {
    // if statement should protect against out of bounds
    numWho++;
    newsAPIWho(numWho);

});
// move through nih articles with buttons
$("#leftNih").click(function () {
    if (numNih === 0) {
        return;
    }
    else {
        numNih--;
        newsAPINih(numNih);
    }
});
$("#rightNih").click(function () {
    // if statement should protect against out of bounds
    numNih++;
    newsAPINih(numNih);

});
// move through cdc articles with buttons
$("#leftCdc").click(function () {
    if (numCdc === 0) {
        return;
    }
    else {
        numCdc--;
        newsAPICdc(numCdc);
    }
});
$("#rightCdc").click(function () {
    // if statement should protect against out of bounds
    numCdc++;
    newsAPICdc(numCdc);

});

// default calls for news page
newsAPIWho(numWho);
newsAPINih(numNih);
newsAPICdc(numCdc);

// update homepage headlines ---------------------------------------------------------------------------------------------------------------------
function homePageWho() {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=who.int&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var title = response.articles[3].title.slice(0, 30) + "...";
        var upTitle = title.toUpperCase();
        var url = response.articles[3].url;
        var summary = response.articles[3].description;
        summary = summary.slice(0,190) + "...";
        var img = response.articles[numCdc].urlToImage;
        $("#homeTitleWho").html('<p class="subtitle"> <a href="'+url+'" target="_blank">'+upTitle+'</a></p>');
        $("#homeSummaryWho").html(summary);
        if (img !== null) {
            $("#whoThumbnail").attr("src", img);
        }
        else {
            $("#whoThumbnail").attr("src", defaultImages[0]);
        }
    });
}
function homePageNih() {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=nih.gov&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var title = response.articles[0].title.slice(0, 30) + "...";
        var upTitle = title.toUpperCase();
        var url = response.articles[0].url;
        var summary = response.articles[0].description;
        summary = summary.slice(0,190) + "...";
        var img = response.articles[numCdc].urlToImage;
        $("#homeTitleNih").html('<p class="subtitle"> <a href="'+url+'" target="_blank">'+upTitle+'</a></p>');
        $("#homeSummaryNih").html(summary);
        if (img !== null) {
            $("#nihThumbnail").attr("src", img);
        }
        else {
            $("#nihThumbnail").attr("src", defaultImages[1]);
        }
    });
}
function homePageCdc() {
    var search = "q=coronavirus&";
    var queryURL = "https://newsapi.org/v2/everything?domains=cdc.gov&language=en&" + search + "apiKey=cf9a884cae0d44aeaf4ca0d7c2183f9d";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var title = response.articles[0].title.slice(0, 30) + "...";
        var upTitle = title.toUpperCase();
        var url = response.articles[0].url;
        var summary = response.articles[0].description;
        summary = summary.slice(0,190) + "...";
        var img = response.articles[numCdc].urlToImage;
        $("#homeTitleCdc").html('<p class="subtitle"> <a href="'+url+'" target="_blank">'+upTitle+'</a></p>');
        $("#homeSummaryCdc").html(summary);
        if (img !== null) {
            $("#cdcThumbnail").attr("src", img);
        }
        else {
            $("#cdcThumbnail").attr("src", defaultImages[2]);
        }
    });
}

// default calls for homepage
homePageWho();
homePageNih();
homePageCdc();