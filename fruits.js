    $("button").on("click", function() {

      var fruit = $(this).attr("data-fruit");
    
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        fruit + "&api_key=dc6zaTOxFJmzC&limit=10";
        // console.log(queryURL);
    
      $.ajax({
          url: queryURL,
          method: "GET"
        })
        .done(function(response) {
        
          var results = response.data;

      
          for (var i = 0; i < results.length; i++) { 

            
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
              
              var gifDiv = $("<div class='item'>");

              var rating = results[i].rating;

              var p = $("<p>").text("Rating: " + rating);

              var fruitImage = $("<img>");
              
              fruitImage.attr("src", results[i].images['480w_still'].url);

              var still = results[i].images.fixed_height_still.url
              var animate = results[i].images.fixed_height.url

              fruitImage.attr("data-state", "results[i].images.fixed_height_still.url");
              fruitImage.attr("data-animate", "results[i].images.fixed_height.url");
              fruitImage.attr("data-still", "results[i].images.fixed_height_still.url");
      

              gifDiv.append(p);
              gifDiv.append(fruitImage);

              $("#gifs-appear-here").prepend(gifDiv);
            }
          }
        });
    });

    $("body").on("click", ".item", function() {
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });

