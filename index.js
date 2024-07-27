import e from "express";
import bodyParser from "body-parser";
import fs from "fs"
import { error } from "console";

const app = e();
const port = 3000;
var dataEntered = [];
var indexOfPostToEdit;
var indexOfPostToDelete;
var indexOfPostToView;

function readText(req,res,next){
    dataEntered = fs.readFileSync("post.txt").toString().split("\n");
    next();
}

app.use(bodyParser.urlencoded({extended: true}));
app.use(e.static("public"));
app.use(readText);

app.get("/", (req,res)=>{
    res.render("index.ejs",{
        dataEntered: dataEntered
    })
});

app.get("/home", (req,res)=>{
    res.redirect("/");
});

app.get("/newPost", (req,res)=>{
    res.render("post.ejs");
});

app.post("/submit", (req,res)=>{
    fs.appendFile("post.txt", JSON.stringify(req.body)+"\n",(error)=>{if(error)throw error ;});
    res.redirect("/home");
});

app.post("/deleteLogin", (req,res)=>{
    indexOfPostToDelete = req.body.indexInArray;
    res.render("deletePostLogin.ejs");
});

app.post("/deletePost",(req,res)=>{
    if(req.body.password===JSON.parse(dataEntered[indexOfPostToDelete]).password)
    {
        dataEntered.splice(req.body.indexInArray,1)
        dataEntered.splice(dataEntered.length-1,1)
        fs.truncate("post.txt", 0, (err) => err && console.error(err));
        var file = fs.createWriteStream("post.txt");
        file.on('error', function(err) { throw err });
        dataEntered.forEach((item)=>{
            file.write(item + '\n');
        })
        indexOfPostToDelete = null;
        res.redirect("/home");
    }
    else
    {
        indexOfPostToDelete = null;
        res.redirect("/home")
    }
});

app.post("/editPost", (req,res)=>{
    indexOfPostToEdit = req.body.indexInArray;
    res.render("loginPost.ejs");
});

app.post("/editor", (req,res)=>{
    if(req.body.password===JSON.parse(dataEntered[indexOfPostToEdit]).password)
    {
        res.render("editor.ejs",
            {
                heading: JSON.parse(dataEntered[indexOfPostToEdit]).heading,
                body: JSON.parse(dataEntered[indexOfPostToEdit]).body,
                password: JSON.parse(dataEntered[indexOfPostToEdit]).password
            }
        );
    }
    else{
        indexOfPostToEdit = null;
        res.redirect("/home");
    }
});

app.post("/makeChanges", (req,res)=>{
    dataEntered[indexOfPostToEdit] = JSON.stringify(req.body);
    dataEntered.splice(dataEntered.length-1,1)
    var file = fs.createWriteStream("post.txt");
    file.on('error', function(err) { throw err });
    dataEntered.forEach((item)=>{
        file.write(item + '\n');
    })
    indexOfPostToEdit = null;
    res.redirect("/home");
});

app.post("/viewPost", (req,res)=>{
    indexOfPostToView = req.body.indexInArray;
    res.render("viewPost.ejs",
        {
            heading: JSON.parse(dataEntered[indexOfPostToView]).heading,
            body: JSON.parse(dataEntered[indexOfPostToView]).body
        }
    );
});

app.get("/gitHub", (req,res)=>{
    res.redirect("https://github.com/anish877/blogsite");
});

app.get("/portfolio", (req,res)=>{
    res.redirect("https://anish877.github.io/portfolio/");
});

app.listen(port, ()=>{
    console.log(`Server started at port ${port}.`)
});