const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./routes");

app.use(router);
app.use(cors());

app.listen(5000, () => console.log("server: http://localhost:5000"));
