dotenv = require("dotenv").config();
const fs = require("fs");
const axios = require("axios");
const express = require("express");
const app = express();


const handlebars = require("express-handlebars").create({
    defaultLayout: "main",
});
const path = require("path");

app.use(express.urlencoded({ extended: false }));
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.use(express.static("public"));

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");




let port = process.env.PORT;
let host = process.env.HOST;

app.get("/", function(req, res) {

    res.render("index");
});

//=========================================================================
API_KEY = "ahutoSbmiRJp7CUBrL5s2yefa7OrVrKw1zsel4VF";
startDate = "2021-10-01";
endDate = "2021-10-02";

// (async() => {
//     try {
//         const response = await axios.get(
//             `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
//         );

//         //  console.log(response.data.url);
//         // console.log(response.data.near_earth_objects);
//     } catch (error) {
//         console.log(error.response.body);
//     }
// })();

// const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`;
// axios({
//         method: "get",
//         url: url,
//         responseType: "stream",
//     })
//     .then((res) => {
//         res.data.pipe(fs.createWriteStream("nasa_api.json"));
//     })
//     .catch((err) => console.log(err));

//=========================================================================
// function downloadURL(url, name) {
//     var link = document.createElement("a");
//     link.download = name;
//     link.href = url;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//     delete link;
// }

// function downloadFile() {
//     var data = "okay this is epic";
//     var blob = new Blob([data], { type: 'text/txt' });
//     var url = window.URL.createObjectURL(blob);
//     downloadURL(url, "test.txt");
// }


app.use(function(req, res) {
    res.status(404);
    res.render("404");
});

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type("plain/text");
    res.status(500);
    res.render("500");
});



app.listen(port, host, () => {
    console.log(
        `Express started \on http//:${host}:${port} press Ctrl-C to terminate.`
    );
});