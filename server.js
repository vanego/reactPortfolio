const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static('build'))

// app.get("/", (req, res) => {
//     res.send("hello");
// })

app.listen(port, () => {
    console.log("server listening on port 8080");
})