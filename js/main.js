window.onload = getNews();

function getNews()
{
  var url = 'https://newsapi.org/v2/everything?sources=techcrunch&language=en&apiKey=a3e15f82f1024a96b5c43b621d21c26d';
  $.getJSON( url, { articles: ""} )
    .done(function( json ) {
        num_news = 20;
        for (i = 0; i < num_news; i++)
        {
          var title = json.articles[i].title;
          var image = json.articles[i].urlToImage;
          var description = json.articles[i].description;
          var author = json.articles[i].author;
          document.getElementsByClassName('container')[0].innerHTML = document.getElementsByClassName('container')[0].innerHTML +
            '<div class="wiadomosc"> <div class="wiadomoscTlo" style="background-image: url('+image+')"></div><h1 class="wiadomoscNaglowek">'+title+
            '</h1><p class="wiadomoscP">'+description+'</p><h5 class="wiadomoscAutor">'+author+'</h5></div>'
        }
    })
    .fail(function( jqxhr, textStatus, error ) {
      var err = textStatus + ", " + error;
      console.log( "Request Failed: " + err );
  });
}

function portals()
{
  document.getElementById("#menuB:hover > ul").style.display = "block";
}
