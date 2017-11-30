let page;
window.onload = getNews(1);


let strony = document.querySelectorAll('.pages');

strony.forEach(function(strona) {
  console.log(strona.value)
  strona.addEventListener('click', ()=>{
    document.querySelector('.container').innerHTML= '';
    getNews(strona.value)
  });
});

function getNews(page)
{
  var url = `https://newsapi.org/v2/everything?sources=techcrunch&language=en&page=${page}&apiKey=a3e15f82f1024a96b5c43b621d21c26d`;
  console.log(url);

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
