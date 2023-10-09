const express = require('express')
const cors = require('cors')


const app = express()
const port = 3000

// app.use(bodyParser.json())

app.use(cors())
app.use(express.json());



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


app.get('/posts', (req, res) => {
    res.json([{
        "section": "post",
        "postAvatar": "assets/img/times_now_avatar.jpg",
        "userName": "ResidentsMedical",
        "userId": "@residentsmed",
        "dots": "assets/img/dots.svg",
        "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 1",
        "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
        "actions": [ 
        {"image": "assets/img/comments.svg"},
        {"image": "assets/img/thread.svg"},
        {"image": "assets/img/like.svg"},
        {"image": "assets/img/upload.svg"}]
    },
    {
        "section": "post",
        "postAvatar": "assets/img/times_now_avatar.jpg",
        "userName": "ResidentsMedical",
        "userId": "@residentsmed",
        "dots": "assets/img/dots.svg",
        "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 2",
        "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
        "actions": [ {"image": "assets/img/comments.svg"},
        {"image": "assets/img/thread.svg"},
        {"image": "assets/img/like.svg"},
        {"image": "assets/img/upload.svg"}]
    },
    {
        "section": "post",
        "postAvatar": "assets/img/times_now_avatar.jpg",
        "userName": "ResidentsMedical",
        "userId": "@residentsmed",
        "dots": "assets/img/dots.svg",
        "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 3",
        "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
        "actions": [
            {"image": "assets/img/comments.svg"},
            {"image": "assets/img/thread.svg"},
            {"image": "assets/img/like.svg"},
            {"image": "assets/img/upload.svg"}]
        
    },
    {
        "section": "post",
        "postAvatar": "assets/img/times_now_avatar.jpg",
        "userName": "ResidentsMedical",
        "userId": "@residentsmed",
        "dots": "assets/img/dots.svg",
        "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 4",
        "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
        "actions": [
            {"image": "assets/img/comments.svg"},
            {"image": "assets/img/thread.svg"},
            {"image": "assets/img/like.svg"},
            {"image": "assets/img/upload.svg"}]
    }, 
    {
        "section": "post",
        "postAvatar": "assets/img/times_now_avatar.jpg",
        "userName": "ResidentsMedical",
        "userId": "@residentsmed",
        "dots": "assets/img/dots.svg",
        "description": "India a USD 2000 per capita economy oil prices breaking our back, says Foreign Minister S Jayashankar in US 5",
        "image": "https://pbs.twimg.com/media/FdKEfYcXgAI9H7a?format=jpg&name=small",
        "actions": [
            {"image": "assets/img/comments.svg"},
            {"image": "assets/img/thread.svg"},
            {"image": "assets/img/like.svg"},
            {"image": "assets/img/upload.svg"}
        ]
    }])
  })

app.post('/login', (req, res) => {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    if((email === "sirisharoulo@gmail.com" && password === "sirisha@576") || (email === "sagarroulo@gmail.com" && password === "sagar@576")) {
        res.send({"status" : "success"})
    }
    else {
        res.send({"status" : "failure"})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


