import express, {Express} from "express";
import cors from "cors"
import tasksRouter from "./routes/task.routes";

const app: Express = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});