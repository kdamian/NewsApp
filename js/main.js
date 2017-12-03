let page;
let source;
window.onload = getNews(1, 'techcrunch');


let strony = document.querySelectorAll('.pages');

let techcrunch = document.querySelector('#techcrunch');
let abcnews = document.querySelector('#abcnews');
let bloomberg = document.querySelector('#bloomberg');
let buzzfeed = document.querySelector('#buzzfeed');
const pierwsza = document.querySelector('.first');

techcrunch.addEventListener('click', () =>{ getNews(1, 'techcrunch'); addActive(pierwsza)});
abcnews.addEventListener('click', () =>{ getNews(1, 'abc-news'); addActive(pierwsza)});
bloomberg.addEventListener('click', () =>{ getNews(1, 'bloomberg'); addActive(pierwsza)});
buzzfeed.addEventListener('click', () =>{ getNews(1, 'buzzfeed'); addActive(pierwsza)});



strony.forEach(function(strona) {
  console.log(strona.value)
  strona.addEventListener('click', ()=>{

    document.querySelector('.container').innerHTML= '';
    getNews(strona.value)
    addActive(strona);
  });
});

function addActive(strona){
  strony.forEach((strona)=>{
    if (strona.classList.contains('active')) {
      strona.classList.remove('active');
    }
  });

  strona.classList.add('active');
}

function getNews(page, source)
{
  var url = `https://newsapi.org/v2/everything?sources=${source}&language=en&page=${page}&apiKey=a3e15f82f1024a96b5c43b621d21c26d`;
  console.log(url);
  document.getElementsByClassName('container')[0].innerHTML = '';

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
