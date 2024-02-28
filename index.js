// import the npm module
import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

// create an express app

const app = express();
const port = 8080;

// the base url for the port

var baseURL = "https://v2.jokeapi.dev/joke";

// set the body parser

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public/"));

// get request
app.get("/", (req, res)=>
{
    res.render("joke.ejs");
});


app.post("/joke", async(req, res)=> {
  try {
    const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
    const joke = response.data.joke; // Access joke directly from response.data
    console.log(joke);
    res.render("joke.ejs", { joke }); // Pass joke directly to render
  } catch (error) {
    res.status(404).send(error.message);
  }
});



// for the custom jokes

// app.post("/submit",  async(req, res)=>
// {
//     // create a function to make dynamic url for the axios

//     const custom = req.body.custom;
//     console.log(custom);

//    try{
//     const response = await axios.get(baseURL + `/${custom}?type=single`);
//    }

    

 
// });


// listen the app on the server port

app.listen(port, ()=>
{
    console.log("server running on port 8080");
})