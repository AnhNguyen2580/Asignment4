import express from "express";
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";
import mongoose from 'mongoose';

const app = express();
const port = 3000;


// connect with database
const dbUserName = "TuanAnh";
const dbPw = "tuananh2K";
const dbName = "User-Name";
const MONGO_URI = `mongodb+srv://<dbUserName>:<dbPw>@cluster0.sbjgk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URI,()=>{
    console.log("Connected to DB");
});


app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Users API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(process.env.PORT || port, () =>console.log(`Server running on port: http://localhost:${port}`));
