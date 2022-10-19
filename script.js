const api_key = 'f102eddaf04f428bb14093b83807e0ba';
const api_url = `https://newsapi.org/v2/everything?q=Apple&from=2022-10-18&sortBy=popularity&apiKey=${api_key}`;

async function getApi(url) {
  const response = await fetch(url);

  var data = await response.json();
  console.log(data.articles);
  if (response) {
    hideLoader();
  }
  show(data.articles);
}

getApi(api_url);
console.log('hello world');

function hideLoader() {
  document.getElementById('loading').style.display = 'none';
}

function show(data) {
  let div = ``;
  let title = ``;

  for (let i = 0; i < 5; i++) {
    console.log(data[i].title);
    div += `
    <div class='news_box'>
    <a href=${data[i].url} target="_blank">
    <h1 class='news_box_title'>${data[i].title}</h1>
    </a>
        <p class='news_box_author'>~${data[i].author}</p>
        <p class='news_box_description'>${data[i].description}</p>
        <img class='image' height="400px" width="800px" src=${data[i].urlToImage} alt="image" />
        <p class='news_box_content'>${data[i].content}
        <a class='news_box_readmore' href=${data[i].url} target="_blank">
        <span>Read More</span>
        </a>
        </p>
    </div>

        `;
    title += `
    <div class='title'>
        <p class='title_no'>${i + 1}</p>
        <h3 class='title_text'>${data[i].title}</h3>
    </div>
    `;
  }

  document.getElementById('news_1').innerHTML = div;
  document.getElementById('news_title').innerHTML = title;
}
