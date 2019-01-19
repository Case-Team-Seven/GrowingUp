const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
// express/ API port
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

//test to make sure express is working
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.use(routes);



app.listen(PORT, function() {
    console.log(`Lisetning ==> Server now on port ${PORT}!`);
});
