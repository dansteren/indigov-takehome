import { Request, Response } from "express";
import { Parser } from "json2csv";
import { Constituent } from "../../db/constituent";

export function exportConstituents(req: Request, res: Response) {
  const allConstituents = Constituent.find().map((constituent) => {
    return {
      email: constituent.email,
      firstName: constituent.firstName,
      middleName: constituent.middleName,
      lastName: constituent.lastName,
      street: constituent.address?.street,
      city: constituent.address?.city,
      state: constituent.address?.state,
      zip: constituent.address?.zip,
    };
  });
  const csv = new Parser().parse(allConstituents);

  res.setHeader("Content-Type", "text/csv");
  res.setHeader(
    "Content-Disposition",
    'attachment; filename="constituents.csv"'
  );
  res.send(csv);
}
