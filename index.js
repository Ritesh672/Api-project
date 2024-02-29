// import the npm module
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// create an express app

const app = express();
const port = 8080;

// set the body parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public/"));

// i will build a website and it will have multiple apis intigreated in it
// objective
//step1: to create a home page which will have all the multiple apis in boxes and user can choose to any one of them
//step2: for each api there would be multiple calls 

// the get request for the home page

app.get("/", (req, res)=>
{
  res.render("index.ejs");
});

// for the joke api

app.post("/joke", async(req, res)=>
{
  try
  {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");

    const object = response.data;

    console.log(object.joke);
    res.render("joke.ejs", {data : object["joke"]});
  }
  catch(error)
  {
    res.status(404);
  }
})
// listen the app on the server port

app.listen(port, ()=>
{
    console.log("server running on port 8080");
})