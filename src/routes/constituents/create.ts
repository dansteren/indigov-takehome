import { Request, Response } from "express";
import { Constituent } from "../../db/constituent";

export function createConstituent(req: Request, res: Response) {
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
}
