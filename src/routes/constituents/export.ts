import { Request, Response } from "express";
import { Constituent } from "../../db/constituent";

export function exportConstituents(req: Request, res: Response) {
  res.status(500).send("Endpoint not yet implemented");
}
