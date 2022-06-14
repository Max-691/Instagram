const body = document.body;
const article = document.createElement('article');
body.appendChild(article);

const topDiv = document.createElement('div');
topDiv.id="top-div";
article.appendChild(topDiv);

const imgContainer = document.createElement('div');

const mainDiv = document.createElement('div');
mainDiv.id="main-div";
article.appendChild(mainDiv);

const bottomDiv = document.createElement('div');
bottomDiv.id="bottom-div";
article.appendChild(bottomDiv);

