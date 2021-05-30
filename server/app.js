const express = require("express");
const dataPath = require("./Routes/dataPath")
const app = express();

app.use(express.static('public'))


//console.log((__dirname + '/public'))

app.use(express.json())
app.use("/gigs", dataPath)


app.listen(5000, () => console.log("Server is active and running"));
