const body = document.body;
//Section that contains ALL articles (all posts)
const section = document.createElement('section');
section.id="allCards";
body.appendChild(section);

//Article that contains ALL post  (header, media, footer)
const article = document.createElement('article');
article.classList.add('card');
section.appendChild(article);

//Post Header 
const header = document.createElement('header');
header.classList.add('header');
article.appendChild(header);

//Header div that contains:  username, profile picture, sponsored or not
const imgContainer = document.createElement('div');
imgContainer.classList.add('img-container');
header.appendChild(imgContainer);

//User's profile picture
const profilePicture = document.createElement('img');
profilePicture.src="https://random.imagecdn.app/50/50";
profilePicture.alt="profile picture";
imgContainer.appendChild(profilePicture);

//Username and sponsor
const usernameParagraph = document.createElement('p');//Random usernames
imgContainer.appendChild(usernameParagraph);
const sponsoParagraph = document.createElement('span');//Random sponsored posts
usernameParagraph.appendChild(sponsoParagraph);

//Media div contains  'media'  that is posted picture)
const mediaDiv = document.createElement('div');
mediaDiv.classList.add('media');
article.appendChild(mediaDiv);

const media = document.createElement('img');
media.src="https://random.imagecdn.app/500/500";
media.alt="posted picture";
mediaDiv.appendChild(media);

//Post Footer
const footer = document.createElement('footer');
footer.classList.add('footer');
article.appendChild(footer);

const interactButtonDiv = document.createElement('div');
interactButtonDiv.classList.add('interactButton');
footer.appendChild(interactButtonDiv);

//Like Button
const likeButton = document.createElement('a');// 'a' contains like logo (likeImg) 
likeButton.href="#";
interactButtonDiv.appendChild(likeButton);
// (likeImg)
const likeImg = document.createElement('img');
likeImg.src="img/like.png";
likeImg.alt="like";
likeButton.appendChild(likeImg);

//Comment Button
const commentButton = document.createElement('a');// 'a' contains comment logo (commentImg) 
commentButton.href="#";
interactButtonDiv.appendChild(commentButton);
const commentImg = document.createElement('img');// (commentImg)
commentImg.src="img/comment.png";
commentImg.alt="comment";
commentButton.appendChild(commentImg);

//Send button
const sendButton = document.createElement('a');// 'a' contains send logo (sendImg) 
sendButton.href="#";
interactButtonDiv.appendChild(sendButton);
const sendImg = document.createElement('img');// (sendImg)
sendImg.src="img/send.png";
sendImg.alt="send";
sendButton.appendChild(sendImg);

//Number of likes (likesNumber)
const likesNumber = document.createElement('p');
likesNumber.innerHTML="Number of likes";// Random likes
footer.appendChild(likesNumber);


const post = [
    {
        username: "user",
        profilePicture: "https://random.imagecdn.app/50/50",
        isSponsored: false,
        
    }
]
