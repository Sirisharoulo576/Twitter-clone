 let mainPost = []
//     "section": "post",
//     "postAvatar": "assets/img/times_now_avatar.jpg",
//     "userName": "ResidentsMedical",
//     "userId": "@residentsmed",
//     "dots": "assets/img/dots.svg",
//     "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 1",
//     "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
//     "actions": [ 
//     {"image": "assets/img/comments.svg"},
//     {"image": "assets/img/thread.svg"},
//     {"image": "assets/img/like.svg"},
//     {"image": "assets/img/upload.svg"}]
// },
// {
//     "section": "post",
//     "postAvatar": "assets/img/times_now_avatar.jpg",
//     "userName": "ResidentsMedical",
//     "userId": "@residentsmed",
//     "dots": "assets/img/dots.svg",
//     "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 2",
//     "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
//     "actions": [ {"image": "assets/img/comments.svg"},
//     {"image": "assets/img/thread.svg"},
//     {"image": "assets/img/like.svg"},
//     {"image": "assets/img/upload.svg"}]
// },
// {
//     "section": "post",
//     "postAvatar": "assets/img/times_now_avatar.jpg",
//     "userName": "ResidentsMedical",
//     "userId": "@residentsmed",
//     "dots": "assets/img/dots.svg",
//     "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 3",
//     "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
//     "actions": [
//         {"image": "assets/img/comments.svg"},
//         {"image": "assets/img/thread.svg"},
//         {"image": "assets/img/like.svg"},
//         {"image": "assets/img/upload.svg"}]
    
// },
// {
//     "section": "post",
//     "postAvatar": "assets/img/times_now_avatar.jpg",
//     "userName": "ResidentsMedical",
//     "userId": "@residentsmed",
//     "dots": "assets/img/dots.svg",
//     "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 4",
//     "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
//     "actions": [
//         {"image": "assets/img/comments.svg"},
//         {"image": "assets/img/thread.svg"},
//         {"image": "assets/img/like.svg"},
//         {"image": "assets/img/upload.svg"}]
// }, 
// {
//     "section": "post",
//     "postAvatar": "assets/img/times_now_avatar.jpg",
//     "userName": "ResidentsMedical",
//     "userId": "@residentsmed",
//     "dots": "assets/img/dots.svg",
//     "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 5",
//     "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
//     "actions": [
//         {"image": "assets/img/comments.svg"},
//         {"image": "assets/img/thread.svg"},
//         {"image": "assets/img/like.svg"},
//         {"image": "assets/img/upload.svg"}
//     ]
// }]
function render(data) {
    mainPost=data;
console.log(document);
console.log(document.getElementById("content"));
const content = document.getElementById("content");
content.className = "post";
for(let y of mainPost) {


const postAvatar = document.createElement("img");
postAvatar.src = y.postAvatar;

const div0 = document.createElement("div");
div0.appendChild(postAvatar);
div0.className = "post__avatar";

const div1 = document.createElement("div");
div1.appendChild(div0);
div1.className = "post";



const dots = document.createElement("img");
dots.src = y.dots;


const div2 =  document.createElement("div");
div2.appendChild(dots);
div2.className = "dots";

const bold = document.createElement("b");
const boldText = document.createTextNode(y.userName);
bold.appendChild(boldText);

const userId = document.createElement("h3");
const userIdText = document.createTextNode(y.userid);
userId.appendChild(bold);
userId.appendChild(userIdText);
userId.appendChild(div2);

const div3 =document.createElement("div");
div3.appendChild(userId);
div3.className = "post__headertext";

const description = document.createElement("p");
const descriptionText = document.createTextNode(y.description);
description.appendChild(descriptionText);

const divdescription = document.createElement("div");
divdescription.appendChild(description);
divdescription.className = "post__headerdescription";


const div4 = document.createElement("div");
div4.appendChild(div3);
div4.className = "post__header";
div4.appendChild(divdescription);

const div5 = document.createElement("div");
div5.appendChild(div4);
div5.className = "post__body";
div1.appendChild(div5);
content.appendChild(div1);


const image = document.createElement("img");
image.src = y.image;

const div6 =  document.createElement("div");
div6.appendChild(image);
div6.className = "post__image";
div5.appendChild(div6);

for(let x of mainPost[0].actions) {
    let image = document.createElement("img");
    image.src = x.image;

    let div11 = document.createElement("div");
    div11.appendChild(image);
    div11.className = "post__footer";
    div5.appendChild(div11);
}
}


fetch('http://localhost:3000/posts')
.then(response =>
    response.json()
).then(
  (data) => { console.log(data);
    render(data);
    // mainPost = data;
  
  
// console.log(document);
// console.log(document.getElementById("content"));
// const content = document.getElementById("content");
// content.className = "post";
// for(let y of mainPost) {


// const postAvatar = document.createElement("img");
// postAvatar.src = y.postAvatar;

// const div0 = document.createElement("div");
// div0.appendChild(postAvatar);
// div0.className = "post__avatar";

// const div1 = document.createElement("div");
// div1.appendChild(div0);
// div1.className = "post";



// const dots = document.createElement("img");
// dots.src = y.dots;


// const div2 =  document.createElement("div");
// div2.appendChild(dots);
// div2.className = "dots";

// const bold = document.createElement("b");
// const boldText = document.createTextNode(y.userName);
// bold.appendChild(boldText);

// const userId = document.createElement("h3");
// const userIdText = document.createTextNode(y.userid);
// userId.appendChild(bold);
// userId.appendChild(userIdText);
// userId.appendChild(div2);

// const div3 =document.createElement("div");
// div3.appendChild(userId);
// div3.className = "post__headertext";

// const description = document.createElement("p");
// const descriptionText = document.createTextNode(y.description);
// description.appendChild(descriptionText);

// const divdescription = document.createElement("div");
// divdescription.appendChild(description);
// divdescription.className = "post__headerdescription";


// const div4 = document.createElement("div");
// div4.appendChild(div3);
// div4.className = "post__header";
// div4.appendChild(divdescription);

// const div5 = document.createElement("div");
// div5.appendChild(div4);
// div5.className = "post__body";
// div1.appendChild(div5);
// content.appendChild(div1);


// const image = document.createElement("img");
// image.src = y.image;

// const div6 =  document.createElement("div");
// div6.appendChild(image);
// div6.className = "post__image";
// div5.appendChild(div6);

// for(let x of mainPost[0].actions) {
//     let image = document.createElement("img");
//     image.src = x.image;

//     let div11 = document.createElement("div");
//     div11.appendChild(image);
//     div11.className = "post__footer";
//     div5.appendChild(div11);
// }
// }


  }


// const comments = document.createElement("img");
// comments.src = mainPost[0].actions[0].image;

// const div7 = document.createElement("div");
// div7.appendChild(comments);
// div7.className = "post__footer";
// div5.appendChild(div7);



// const thread = document.createElement("img");
// thread.src = mainPost[0].actions[1].image;

// const div8 = document.createElement("div");
// div8.appendChild(thread);
// div8.className = "post__footer";
// div5.appendChild(div8);


// const upload = document.createElement("img");
// upload.src = mainPost[0].actions[2].image;

// const div9 = document.createElement("div");
// div9.appendChild(upload);
// div9.className = "post__footer";
// div5.appendChild(div9);



// const like = document.createElement("img");
// like.src = mainPost[0].actions[3].image;

// const div10 = document.createElement("div");
// div10.appendChild(like);
// div10.className = "post__footer";
// div5.appendChild(div10);

// let i;
// for(let x of mainPost[0].actions) {
//     let image = document.createElement("img");
//     let imageSource = mainPost[0].actions[i];
//     console.log(mainPost[0].actions[i]);
// }



// ((this is normal for loop))

// for(i=0; i<=3;i++){
//     let image = document.createElement("img");
//     image.src = mainPost[0].actions[i].image;

//     let div11 = document.createElement("div");
//     div11.appendChild(image);
//     div11.className = "post__footer";
//     div5.appendChild(div11);

// }

// ((this is for of loop))

// for(let x of mainPost[0].actions) {
//     let image = document.createElement("img");
//     image.src = x.image;

//     let div11 = document.createElement("div");
//     div11.appendChild(image);
//     div11.className = "post__footer";
//     div5.appendChild(div11);

// }

// ((this is for in loop))



 
//  for(let x in mainPost[0].actions) {
//     let image = document.createElement("img");
//     image.src = mainPost[0].actions[x].image;
//     let div11 = document.createElement("div");
//     div11.appendChild(image);
//     div11.className = "post__footer";
//     div5.appendChild(div11);
// }



   
 
   
 






// const userName = document.createElement("h3");
// const userNameText = document.createTextNode(mainPost[0].userName);
// userName.appendChild(userNameText);


// const userId = document.createElement("h3");
// const userIdText = document.createTextNode(mainPost[0].userId);
// userId.appendChild(userIdText);
// userName.className = "post__headertext";


// const div1 = document.createElement("div");
// div1.appendChild(userId);
// div1.appendChild(userIdText);
// content.appendChild(div1);




// const postDescription = document.createElement("p");
// const postDescriptionText = document.createTextNode(mainPost[0].description);
// postDescription.appendChild(postDescriptionText);

// const div2 = document.createElement("div");
// div2.appendChild(postDescription);
// content.appendChild(div2);




// const image = document.createElement("img");
// const postImage = document.createTextNode(mainPost[0].image);
// image.appendChild(postImage);

// const div3 = document.createElement("div");
// div3.appendChild(image);
// content.appendChild(div3);




// const comments = document.createElement("img");
// comments.src = mainPost[0].actions[0].image;

// const div4 =document.createElement("div");
// div4.appendChild(comments);







// const thread = document.createElement("img");
// const threadPic = document.createTextNode(mainPost[0].actions[1].image);
// thread.appendChild(threadPic);

// const div5 =document.createElement("div");
// div5.appendChild(thread);
// content.appendChild(div5);



// const like = document.createElement("img");
// const likePic = document.createTextNode(mainPost[0].actions[2].image);
// like.appendChild(likePic);

// const div6 =document.createElement("div");
// div6.appendChild(like);
// content.appendChild(div6);



// const upload = document.createElement("img");
// const uploadPic = document.createTextNode(mainPost[0].actions[3].image);
// upload.appendChild(uploadPic);

// const div7 = document.createElement("div");
// div7.appendChild(upload);
// content.appendChild(div7);


// let create = "";
//  for(let x of mainPost) {
//     create += x; 
// console.log(x);
//  }

 
//    let text2 = "";
//    for(let x of footerJSON.actions){
//      text2 += x.name;
//    }
















