var express = require("express")
var bodyparser = require("body-parser");
var mongoose = require("mongoose");

const app = express();
app.use(bodyparser.json());
app.use(express.static("public"));
app.use(bodyparser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/MoneyList");
var db = mongoose.connection
db.on("error", () => console.log("Error is connecting To the Database"));
db.once("open", () => console.log("Connected To Database"));

// const expenseSchema = new mongoose.Schema({
//     category: String,
//     Amount: Number,
//     Info: String,
//     Date: String
// });

// const Expense = mongoose.model("Expense", expenseSchema);

app.post("/add", (req, res) => {
    var category_select = req.body.category_select
    var amount_input = req.body.amount_input
    var info = req.body.info
    var date_input = req.body.date_input

    var data = {
        "category": category_select,
        "Amount": amount_input,
        "Info": info,
        "Date": date_input
    }
    db.collection("users").insertOne(data, (err, collection) => {
        if (err) {
            throw err;
        } else {
            console.log("record Inserted Sucessfully");
        }
    })
})
app.get("/", (req, res) => {
    // res.send("Succesfully Connted To 5000");
    req.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect("index.html");
}).listen(5000);

console.log("Listening ON port 5000")