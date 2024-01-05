import { v4 as uuid } from "uuid";
import { Address } from "./address";

type RecordConstructor = {
  id?: string;
  uuid?: string;
  createdAt?: string;
  updatedAt?: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;
};

export class Constituent {
  static id = 1;

  static nextId() {
    const nextId = ++this.id;
    return String(nextId).padStart(8, "0");
  }

  static records = [
    new Constituent({
      id: "00000001",
      uuid: "d4059871-c79a-41ff-ba72-42b563743a2a",
      createdAt: "2024-01-04T15:50:30.000Z",
      updatedAt: "2024-01-04T15:50:30.000Z",
      email: "jolie@indigov.com",
      firstName: "Jolie",
      middleName: "Grace",
      lastName: "Spiegelman",
    }),
  ];

  static find() {
    return this.records.map((record) => {
      const address = Address.findOneByConstituentId(record.id);
      return {
        ...record,
        address,
      };
    });
  }

  static findOneByEmail(email: string) {
    return this.records.find((record) => record.email === email);
  }

  id: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  firstName: string;
  middleName?: string;
  lastName: string;

  constructor(data: RecordConstructor) {
    this.id = data.id ?? Constituent.nextId();
    this.uuid = data.uuid ?? uuid();
    this.createdAt = data.createdAt ?? new Date().toISOString();
    this.updatedAt = data.updatedAt ?? new Date().toISOString();
    this.email = data.email;
    this.firstName = data.firstName;
    this.middleName = data.middleName;
    this.lastName = data.lastName;
  }

  save() {
    Constituent.records.push(this);
    console.log("Constituent saved to list...");
  }
}
