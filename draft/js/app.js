const body = document.body;
const article = document.createElement('article');
body.appendChild(article);

const topDiv = document.createElement('div');
topDiv.classList.add('top-div');
article.appendChild(topDiv);

const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container')
topDiv.appendChild(imgContainer);

const profilePicture = document.createElement('img');
profilePicture.src="../img/default-pp.jpg"
imgContainer.appendChild(profilePicture);

const topUl = document.createElement('ul');
imgContainer.appendChild(topUl);

const liUsername = document.createElement('li');
liUsername.textContent="username";
topUl.appendChild(liUsername);

const liSponso = document.createElement('li');
liSponso.textContent="Sponsored";
topUl.appendChild(liSponso);

