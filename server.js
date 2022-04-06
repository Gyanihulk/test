const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path =require('path');
//connect database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

//app.get("/", (req, res) => res.send("API Running"));

//define routes
app.use("/api/users", require("./routes/API/users"));
app.use("/api/auth", require("./routes/API/auth"));
app.use("/api/profile", require("./routes/API/profile"));
app.use("/api/posts", require("./routes/API/posts"));

// Serve static assests in production
if(process.env.NODE_ENV==='production'){
    //set static folder
    app.unsubscribe(express.static('client/build'));
    app.get('*',(req,res) => {
    res.sendFile(path.resolve(__diename,'client','build','index.html');)
    });
}
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
