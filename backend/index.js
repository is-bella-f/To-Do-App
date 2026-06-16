//ESModule
import "dotenv/config"; //npm i dotenv
import express from 'express'; // npm i express
import mongoose from 'mongoose'; // npm i mongoose
import cors from "cors"; // npm i cors
import taskRoutes from "./routes/tasks.js";
const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

//http://localhost:3000/
app.use("/", taskRoutes);


//PROMISE
(async () => {
  try {
    //try to connect to the database
    await mongoose.connect(process.env.MONGO_URI, {autoIndex: false});
    console.log("DATABASE CONNECTED");

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
      //thunder client -> call http://localhost:3000
      //node js -> is just on
  } catch (error) {
    //if you fail connecting to the DB, do something
    console.log(`Connection failed: ${error}`)
  }
})();