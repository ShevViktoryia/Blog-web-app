import express from "express";
import bodyParser from "body-parser";
import posts from "./public/js/posts.js";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const title = req.body["title"];
  const descr = req.body["descr"];
  posts.push({ title, descr });
  res.render("index.ejs", {
    title: title,
    descr: descr,
    posts: posts,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
