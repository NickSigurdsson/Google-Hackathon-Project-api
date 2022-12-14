const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());
dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello");
});

const alertData = require("./routes/alertPostRoute");

app.use("/alerts", alertData);

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
});
