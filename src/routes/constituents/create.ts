import { Request, Response } from "express";
import { Constituent } from "../../db/constituent";
import { Address } from "../../db/address";

export function createConstituent(req: Request, res: Response) {
  // TODO: Validate the inputs. Make sure you have the required fields. I would
  // use something like Zod or JSON schema to define a schema and then validate
  // the input against that schema.

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
  }).save();

  new Address({
    constituentId: newConstituent.id,
    street: req.body.address?.street,
    city: req.body.address?.city,
    state: req.body.address?.state,
    zip: req.body.address?.zip,
  }).save();

  return res.status(201).send();
}
