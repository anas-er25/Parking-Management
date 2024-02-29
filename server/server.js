const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const bodyparser = require("body-parser");
const router = require("./routes/ParkingRouter");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(cors());
app.use("/parking", router);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
