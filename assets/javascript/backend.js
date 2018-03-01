$(document).ready(function (){


    $("#searchButton").on("click", function (event) {
        
        //prevents submits by button
        event.preventDefault();
        
        //defines query from search value on form
        var searchTerm = $("#searchTerm").val().trim();
        var startYear = $("#startYear").val().trim();
        var endYear = $("#endYear").val().trim();
        var numberOfRecords = $("#numberOfRecords").val().trim();
        // var yearRange = null;

        var query = searchTerm;
        
        //checks to see if there are years entered in the form for the search
        // function createYearRange(startYear,endYear) {
        //     if( startYear == "" ){
        //         console.log("empty")
        //     }
        // }
        // createYearRange(startYear,endYear)
        // console.log(startYear)

        

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bd2ce8623fb048b697f2ddbc2abef055&q=" + query;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            $("#topArticles").empty();


            for ( var i=0; i<numberOfRecords; i++) {

                var articleBlock = $("<div>");
                articleBlock.addClass("card");
                articleBlock.addClass("fonts");
                articleBlock.addClass("articleCard");

                articleBlock.append("<h5 class='card-body card-title lines' style='margin-top: 20px;'>"+ response.response.docs[i].headline.main +"</h5>" +
               ("<p class='card-body card-text lines'>"+ response.response.docs[i].section_name +"</p>") +
                ("<p class='card-body card-text lines'>"+ response.response.docs[i].pub_date +"</p>") +
                ("<p class='card-body card-text lines'>"+ response.response.docs[i].snippet +"</p>") +
                ("<p class='card-body card-text lines'>"+ response.response.docs[i].byline.original +"</p>") +
                ("<a href='"+response.response.docs[i].web_url+"' class='btn btn-danger card-body lines' style='margin-bottom:20px; margin-left: 20px;''>Read more here</a>"));

                $("#topArticles").append(articleBlock);
            };
        })
        
    });

});