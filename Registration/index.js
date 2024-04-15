const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");


const app = express();
dotenv.config();


const port = process.env.PORT || 3000;

const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.kju50tw.mongodb.net/registrationFormDB`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// registration schema
const registrationSchema = new mongoose.Schema({
    Name: String,
    LastName: String,
    Email: String,
    password: String
});

// mode of registration schema
const Registration = mongoose.model("Registration", registrationSchema);

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
})

app.post("/register", async (req, res) => {
    try {
        const { Name, LastName, Email, password } = req.body;

        const existingUser = await Registration.findOne({ Email: Email });

        if (!existingUser) {
            const registrationData = new Registration({
                Name,
                LastName,
                Email,
                password
            });
            await registrationData.save();
            res.redirect("/success");
        } else {
            alert("user alredy exist");
            res.redirect("/error");
        }

    } catch (error) {
        console.log(error);
        res.redirect("error");
    }
})

app.get("/success", (req, res) => {
    res.sendFile(__dirname + "/pages/success.html");
})
app.get("/error", (req, res) => {
    res.sendFile(__dirname + "/pages/error.html");
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})