import express, { Request, Response } from "express";

import { Constituent } from "./db/constituent";

const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// List all stored constituents
app.get("/constituents", (req: Request, res: Response) => {
  // Relationship between constituents and addresses is 1:1 so I assume the ORM
  // will retrieve the address and return it with the user
  const allUsers = Constituent.find();

  res.json(allUsers);
});

// Create a new constituent
app.post("/constituents", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
