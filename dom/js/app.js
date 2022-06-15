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

//Main div (img/post)

const mainDiv = document.createElement('main-div');
mainDiv.classList.add('main-div');
article.appendChild(mainDiv);

const postImg = document.createElement('img');
postImg.src="https://random.imagecdn.app/500/150";
mainDiv.appendChild(postImg);

const bottomDiv = document.createElement('div');
bottomDiv.classList.add('bottom-div');
article.appendChild(bottomDiv);

const bottomUl = document.createElement('ul');
bottomDiv.appendChild(bottomUl);

const likedLi = document.createElement('li');
bottomUl.appendChild(likedLi);
const likedImg = document.createElement('img');
likedImg.src="../img/like.png";
likedLi.appendChild(likedImg);

const commentLi = document.createElement('li');
bottomUl.appendChild(commentLi);

const commentImg = document.createElement('img');
commentImg.src="../img/comment.png";
commentLi.appendChild(commentImg);

const shareLi = document.createElement('li');
bottomUl.appendChild(shareLi);

const shareImg = document.createElement('img');
shareImg.src="../img/send.png";
shareLi.appendChild(shareImg);