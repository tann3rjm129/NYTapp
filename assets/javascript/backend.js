$(document).ready(function (){
    console.log("test")

    $("#searchButton").on("click", function (event) {
        
        //prevents submits by button
        event.preventDefault()
        
        //defines query from search value on form
        var searchTerm = $("#searchTerm").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();
        var numberOfRecords = $("#numberOfRecords").val();
        var yearRange = null;

        var query = searchTerm + startYear + endYear;
        
        //checks to see if there are years entered in the form for the search
        function createYearRange(startYear,endYear) {
            if( startYear == "" ){
                console.log("empty")
            }
        }
        createYearRange(startYear,endYear)
        console.log(startYear)

        

        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=bd2ce8623fb048b697f2ddbc2abef055&q=" + query;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {

            var results = response.response.docs;
            console.log(results);

            results
        })
    });

}) 