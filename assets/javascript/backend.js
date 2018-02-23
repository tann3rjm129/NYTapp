$(document).ready(function (){
    console.log("test")

    $("#searchButton").on("click", function (event) {
        event.preventDefault()
        console.log("button press")
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bd2ce8623fb048b697f2ddbc2abef055&q=" + "banjo";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.response.docs;
            console.log(results);
        })
    });

}) 