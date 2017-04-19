console.log('script is sourced');


$(document).ready(onReady);
console.log('in the onReady');




function onReady() {
  var imgNew = $.ajax({  url: 'http://www.omdbapi.com/?t=hackers',
    success: function(response) { response.Poster}
    });
//end imgNew

  $.ajax ({
    url: 'http://www.omdbapi.com/?t=hackers',
    success: function(response) {
      console.log('Movie Title: ', response.Title);
      $('#poster-frame').append('<img src="'+ response.Poster +'">');
      $('#movie-holder').append('<div class="movie-title">' + response.Title + '</div>');
    }//end function response


  });//end $.ajax

// <img src="response.poster" alt="Poser for Hackers" style="width:304px;height:228px;">

}//end onReady function
