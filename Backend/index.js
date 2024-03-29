const express = require("express");
const { connection } = require("./Configs/db");
const { userRouter } = require("./Routes/userRoute");
const { taskRouter } = require("./Routes/taskRoute");
const app = express();
require("dotenv").config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ message: "Mirror Infotech Shopping portal Activated" });
});

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to Database");
  } catch (error) {
    console.log(error);
  }
  console.log(`Server running on port ${process.env.PORT}`);
});
