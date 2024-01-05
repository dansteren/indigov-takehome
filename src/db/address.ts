import { v4 as uuid } from "uuid";

type AddressConstructor = {
  id?: string;
  uuid?: string;
  createdAt?: string;
  updatedAt?: string;
  constituentId: string;
  street: string;
  city: string;
  state: string;
  zip: string;
};

export class Address {
  static id = 1;

  static nextId() {
    const nextId = ++this.id;
    return String(nextId).padStart(8, "0");
  }

  static records = [
    new Address({
      id: "00000001",
      uuid: "0bd69841-e1bc-4f92-88cf-e019eddc3508",
      createdAt: "2024-01-04T15:50:30.000Z",
      updatedAt: "2024-01-04T15:50:30.000Z",
      constituentId: "00000001",
      street: "42 Wallaby Way",
      city: "Syndney",
      state: "NY",
      zip: "84010",
    }),
  ];

  static find() {
    return this.records;
  }

  static findOneByConstituentId(constituentId: string) {
    return this.records.find(
      (record) => record.constituentId === constituentId
    );
  }

  id: string;
  uuid: string;
  createdAt: string;
  updatedAt: string;
  constituentId: string;
  street: string;
  city: string;
  state: string;
  zip: string;

  constructor(data: AddressConstructor) {
    this.id = data.id ?? Address.nextId();
    this.uuid = data.uuid ?? uuid();
    this.createdAt = data.createdAt ?? new Date().toISOString();
    this.updatedAt = data.updatedAt ?? new Date().toISOString();
    this.constituentId = data.constituentId;
    this.street = data.street;
    this.city = data.city;
    this.state = data.state;
    this.zip = data.zip;
  }

  save() {
    Address.records.push(this);
  }
}
