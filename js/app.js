for(let i = 0; i <= 6; i++){
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
profilePicture.src="img/default-pp.jpg"
imgContainer.appendChild(profilePicture);

const topUl = document.createElement('ul');
imgContainer.appendChild(topUl);

const liUsername = document.createElement('li');
liUsername.textContent="username";
topUl.appendChild(liUsername);

const liSponso = document.createElement('li');
liSponso.textContent="Sponsored";
topUl.appendChild(liSponso);

const pointsDiv = document.createElement('div');
pointsDiv.classList.add('points-div');
topDiv.appendChild(pointsDiv);
const pointsImg = document.createElement('img');
pointsImg.src="img/more.png";  
pointsDiv.appendChild(pointsImg);
//Main div (img/post)

const mainDiv = document.createElement('main-div');
mainDiv.classList.add('main-div');
article.appendChild(mainDiv);

const postImg = document.createElement('img');
postImg.src="https://random.imagecdn.app/500/500";
mainDiv.appendChild(postImg);

//Bottom div
const bottomDiv = document.createElement('div');
bottomDiv.classList.add('bottom-div');
article.appendChild(bottomDiv);

//Ul contains like, comment, share...
const bottomUl = document.createElement('ul');
bottomDiv.appendChild(bottomUl);

//Like li with img into
const likedLi = document.createElement('li');
bottomUl.appendChild(likedLi);

//Like img
const likedImg = document.createElement('img');
likedImg.src="img/like.png";
likedLi.appendChild(likedImg);

// Comment li with img into
const commentLi = document.createElement('li');
bottomUl.appendChild(commentLi);

//Comment img
const commentImg = document.createElement('img');
commentImg.src="img/comment.png";
commentLi.appendChild(commentImg);

// Share li with img into
const shareLi = document.createElement('li');
bottomUl.appendChild(shareLi);

//Share img
const shareImg = document.createElement('img');
shareImg.src="img/send.png";
shareLi.appendChild(shareImg);


//Bookmark button at right of likes, comment, sharePlive
const bookmarked = document.createElement('div');
bookmarked.classList.add('bookmarked');
bottomDiv.appendChild(bookmarked);

const bookmarkedImg = document.createElement('img');
bookmarkedImg.src="img/bookmark.png";
bookmarked.appendChild(bookmarkedImg);

/*
//Number of likes (paragraph)
const nbOfLikes = document.createElement('p');
nbOfLikes.textContent="400594"
bottomDiv.appendChild(nbOfLikes);
*/

likedImg.addEventListener('click', ()=>{
    likedImg.setAttribute('src', `${likedImg.src.endsWith("liked.png") ? "img/like.png" : "img/liked.png"}`);
})


}