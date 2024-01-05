import { Request, Response } from "express";
import { Constituent } from "../../db/constituent";

export function getAllConstituents(req: Request, res: Response) {
  // Relationship between constituents and addresses is 1:1 so I assume the ORM
  // will retrieve the address and return it with the user

  const allUsers = Constituent.find();

  res.json(allUsers);
}
