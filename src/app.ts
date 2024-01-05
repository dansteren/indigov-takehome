import express, { Request, Response } from "express";

import {
  createConstituent,
  getAllConstituents,
  exportConstituents,
} from "./routes/constituents";

const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Server running");
});

app.get("/constituents", getAllConstituents);
app.post("/constituents", createConstituent);
app.get("/constituents/export", exportConstituents);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
