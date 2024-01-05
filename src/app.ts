import express, { Request, Response } from "express";

import { Constituent } from "./db/constituent";

const port = 3000;

const app = express();
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send(
    "Server running. Try calling one of the following:\
    <br>\
    <ul>\
      <li>GET /constituents</li>\
      <li>POST /constituents</li>\
      <li>GET /constituents/export</li>\
    </ul>"
  );
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
  // TODO: Validate the inputs. Make sure you have the required fields. I would
  // use something like Zod to define a schema and then validate the input
  // against that schema.

  if (!req.body.email) {
    return res.status(400).json({
      status: 400,
      message: "Missing required field: email",
    });
  }

  const existingConstituent = Constituent.findOneByEmail(req.body.email);

  if (existingConstituent) {
    return res.status(200).send();
  }

  const newConstituent = new Constituent({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });
  newConstituent.save();

  return res.status(201).send();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
