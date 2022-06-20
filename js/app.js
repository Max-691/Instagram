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
const usernameParagraph = document.createElement('p'); //Random usernames
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





const post = [
    {
        username: "user",
        profilePicture: "https://random.imagecdn.app/50/50",
        isSponsored: false,
        
    }
]
